class Parser {

    static SAY_ACTION = 'say'; //print text with control to advance
    static DIA_ACTION = 'dia'; //print text with a character, control to advance. Include character name in brackets i.e. [dia {Person A}]
    static JMP_ACTION = 'jmp'; //jump to a given instruction
    static EXC_ACTION = 'exc'; //execute code through window.eval
    static DEC_ACTION = 'dec'; //creates a decision list with a prompt, and extra information. Look to mainline for definition. 
    static MSG_ACTION = 'msg'; //send a message to the associated event dispatcher within the engine. Include category in brackets i.e. [msg {category}] for granular management. No category defaults to global.
    static END_ACTION = 'end'; //no more messages parser shuts down, sends message through evt if available.
    static STO_ACTION = 'sto'; //store a variable on the svelte store
    static ADD_ACTION = 'add'; //if a variable is numeric, add something to it, include the variable name in brackets i.e. [add {var}]2. To store the result in a new variable preventing mutation of the original include the new variable in parentheses [add {foo}(bar)]2
    static MUL_ACTION = 'mul'; //if a variable is numeric, multiply it by something. use the same syntax for [add]
    static MOD_ACTION = 'mod'; //if a variable is numeric, divide it and get the remainder. use the same syntax for [add]
    static EQ_ACTION = 'eq'; //compare a variable value with the provided value or variable. if numeric, the value will be converted and compared as numbers. var in brackets, 
    static NQ_ACTION = 'nq';
    static GT_ACTION = 'gt';
    static LT_ACTION = 'lt';
    static GE_ACTION = 'ge';
    static LE_ACTION = 'le'; 

    constructor(mainScript, evtService = null, store = null, loadScriptAt = null, sayCallback = null,decisionCallback=null){
        this.mainScript = mainScript;
        this.evt = evtService;
        this.mainScriptIdentifiers = Object.getOwnPropertyNames(mainScript);
        this.sayCallback = sayCallback;
        this.decisionCallback = decisionCallback;
        this.currentLine = (loadScriptAt == null) ? this.mainScriptIdentifiers[0] : loadScriptAt;
        this.runningScript = true;
        this.store = store;
    }

    processLine(fullInstruction){
        if (!this.runningScript) return;
        let instruction, content = null;
        let line = fullInstruction
        let isObj = false;
        if (typeof line === 'string') {
            instruction = line.substring(0, 255).match(/(\[.+\])/)[0];
            content = line.substring(instruction.length)
            instruction = instruction.substring(1, instruction.length - 1)
        } else {
            instruction = line.instruction;
            isObj = true;
        }

        switch (true) {
            case instruction == Parser.SAY_ACTION:
                if (this.sayCallback) this.sayCallback(content)
                break
            case instruction === Parser.JMP_ACTION:
                this.queueLine(content);
                this.processCurrentLine();
                break;
            case instruction === Parser.EXC_ACTION:
                window.eval(content);
                this.queueNextLine();
                this.processCurrentLine();
                break;
            case instruction.includes(Parser.DIA_ACTION):
                let charName = instruction.match(/{.*}/)[0]
                charName = charName.substring(1, charName.length - 1)
                if (this.sayCallback) this.sayCallback(content, charName)
                break;
            case instruction.includes(Parser.MSG_ACTION):
                let category = instruction.match(/{.*}/)
                if(this.evt) {
                    if (category != null) {
                        let cat = category[0].replace("{","").replace("}","");
                        //this.evt.emit(cat, content);
                        this.evt.update( n => {
                            return {category: cat, content: content}
                        })
                    }
                    else {
                        //this.evt.emit('global',content);
                        //this.evt.set({ category: 'global', content: content })
                        this.evt.update(n => {
                            return { category: 'global', content: content }
                        })
                    }
                }
                this.queueNextLine();
                this.processCurrentLine();
                break;
            case instruction === Parser.DEC_ACTION && isObj:
                if (this.decisionCallback) this.decisionCallback(line.content, line.opts);
                break;
            case instruction.includes(Parser.DEC_ACTION) && !isObj:
                let payload = {}
                let character = instruction.match(/{.*}/)
                if(character != null && character[0]) {
                    payload.character = character[0].substring(1, character[0].length - 1)
                }
                let prompt = content.match(/\*.*\*/)[0]
                let options = content.substring(prompt.length).split("^")
                prompt = prompt.substring(1, prompt.length - 1)
                let opts = options.map((it) => {
                    let obj = {};
                    let splits = it.split("|");
                    obj.content = splits[0];
                    obj.line = splits[1].replace("<","[").replace(">","]");
                
                    if(splits.length === 3) {
                        obj.extra = splits[2];
                    }
                    return obj;
                });
                payload.choices = opts; 
                if(this.decisionCallback) this.decisionCallback(prompt,payload);
                break;
            case instruction === Parser.END_ACTION:
                this.runningScript = false;
                this.evt.update(n => {
                    return { category: 'global', content: 'END' }
                })
                break;
            case instruction.includes(Parser.STO_ACTION):
                let varName = instruction.match(/{.*}/)[0]
                varName = varName.substring(1, varName.length - 1)
                let numContent = Number(content); 
                if(this.store){
                    this.store.update((currentStore) => {
                        let newVars = {}
                        newVars[varName] = (numContent === NaN) ? content : numContent;
                        currentStore.memory = Object.assign(currentStore.memory,newVars)
                        return currentStore;
                    })
                }
                this.queueNextLine();
                this.processCurrentLine();
                break;
            case instruction.includes(Parser.ADD_ACTION):
            case instruction.includes(Parser.MUL_ACTION):
            case instruction.includes(Parser.MOD_ACTION):
                this.numericMemoryOperation(instruction,content)
                this.queueNextLine();
                this.processCurrentLine();
                break;
            case instruction.includes(Parser.EQ_ACTION):
            case instruction.includes(Parser.NQ_ACTION):
            case instruction.includes(Parser.GT_ACTION):
            case instruction.includes(Parser.LT_ACTION):
            case instruction.includes(Parser.GE_ACTION):
            case instruction.includes(Parser.LE_ACTION):
                this.comparisonMemoryOperation(instruction,content);
                break;
            
        }
    }

    numericMemoryOperation(instruction,_content){
        let varn = instruction.match(/{.*}/)[0]
        varn = varn.substring(1, varn.length - 1)
        let numC = Number(_content);
        if (this.store) {
            this.store.update((current) => {
                if (Number(current.memory[varn]) != NaN && numC != NaN) {
                    switch (true){
                        case instruction.includes(Parser.ADD_ACTION):
                            current.memory[varn] = current.memory[varn] + numC;
                            break;
                        case instruction.includes(Parser.MUL_ACTION):
                            current.memory[varn] = current.memory[varn] * numC;
                            break;
                        case instruction.includes(Parser.MOD_ACTION):
                            current.memory[varn] = current.memory[varn] % numC;
                            break;
                    }             
                }
                return current;
            });
        }
    }

    comparisonMemoryOperation(instruction,_content){
        let varn = instruction.match(/{.*}/)[0];
        varn = varn.substring(1, varn.length - 1);
        let toCompare = null;
        let comparing = null;
        let comparisonValue = _content.split("=")[0]
        let commandIfSuccesful = _content.split("=")[1].replace("<", "[").replace(">", "]");
        let success = false
        if (this.store) {
            this.store.update((current) => {
                if (current.memory.hasOwnProperty(comparisonValue)) { // var to var comparison
                    toCompare = current.memory[comparisonValue];
                } else { //var to value comparison
                    toCompare = comparisonValue;
                }
                comparing = current.memory[varn];
                return current;
            });
        }
        switch(true){
            case instruction.includes(Parser.EQ_ACTION):
                success = (comparing == toCompare);
                break;
            case instruction.includes(Parser.NQ_ACTION):
                success = (comparing != toCompare);
                break;
            case instruction.includes(Parser.GT_ACTION):
                success = (comparing > toCompare);
                break;
            case instruction.includes(Parser.LT_ACTION):
                success = (comparing < toCompare);
                break;
            case instruction.includes(Parser.GE_ACTION):
                success = (comparing >= toCompare);
                break;
            case instruction.includes(Parser.LE_ACTION):
                success = (comparing <= toCompare);
                break;
        }

        if(success) {
            this.processLine(commandIfSuccesful);
        } else{
            this.queueNextLine();
            this.processCurrentLine();
        }
    }

    processCurrentLine(goToNextLine = true){
        if (!this.runningScript) return;
        let line = this.mainScript[this.currentLine];
        this.processLine(line);
    }

    queueNextLine(){
        if (!this.runningScript) return;
        let _line = String(this.currentLine);
        let ix = this.mainScriptIdentifiers.indexOf(_line)
        this.currentLine = this.mainScriptIdentifiers[++ix]
    }
    queueLine(key){
        if(!this.runningScript) return;
        this.currentLine = key;
    }

}
export default Parser