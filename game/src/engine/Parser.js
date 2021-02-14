class Parser {

    static SAY_ACTION = 'say'; //print text with control to advance
    static DIA_ACTION = 'dia'; //print text with a character, control to advance. Include character name in brackets i.e. [dia {Person A}]
    static JMP_ACTION = 'jmp'; //jump to a given instruction
    static EXC_ACTION = 'exc'; //execute code through window.eval
    static DEC_ACTION = 'dec'; //creates a decision list with a prompt, and extra information. Look to mainline for definition. 
    static MSG_ACTION = 'msg'; //send a message to the associated event dispatcher within the engine. Include category in brackets i.e. [msg {category}] for granular management. No category defaults to default.
    static END_ACTION = 'end'; //no more messages parser shuts down, sends message through evt if available.

    static STO_ACTION = 'sto'; //store a variable on the svelte store
    static ADD_ACTION = 'add'; //if a variable is numeric, add something to it, include the variable name in brackets i.e. [add {var}]2. To store the result in a new variable preventing mutation of the original include the new variable in parentheses [add {foo}(bar)]2
    static MUL_ACTION = 'mul'; //if a variable is numeric, multiply it by something. use the same syntax for [add]
    static MOD_ACTION = 'mod'; //if a variable is numeric, divide it and get the remainder. use the same syntax for [add]
    static EQU_ACTION = 'equ'; //compare a variable value with the provided value or variable. if numeric, the value will be converted and compared as numbers. var in brackets, 

    constructor(mainScript, evtService = null, loadScriptAt = null, sayCallback = null,decisionCallback=null){
        this.mainScript = mainScript;
        this.evt = evtService;
        this.mainScriptIdentifiers = Object.keys(mainScript);
        this.sayCallback = sayCallback;
        this.decisionCallback = decisionCallback;
        this.currentLine = (loadScriptAt == null) ? this.mainScriptIdentifiers[0] : loadScriptAt;
        this.runningScript = true;
    }

    processLine(fullInstruction){
        if (!this.runningScript) return;
        let instruction, content, opts = null;
        let line = fullInstruction
        let isObj = false;
        if (typeof line === 'string') {
            instruction = line.substring(0, 255).match(/(\[.+\])/)[0];
            content = line.substring(instruction.length)
            instruction = instruction.substring(1, instruction.length - 1)
        } else {
            instruction = line.instruction;
            content = line.content;
            opts = line.opts;
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
            case instruction === Parser.MSG_ACTION:
                let category = instruction.match(/{.*}/)
                if(this.evt) {
                    if (category != null) {
                        let cat = category[0].replace("{","").replace("}","");
                        this.evt.emit(cat, content);
                    }
                    else {
                        this.evt.emit('global',content);
                    }
                }
                this.queueNextLine();
                this.processCurrentLine();
                break;
            case instruction === Parser.DEC_ACTION && isObj:
                console.log(content, opts)
                if (this.decisionCallback) this.decisionCallback(content, opts);
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
                if (this.evt) this.evt.emit('global', 'END');
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