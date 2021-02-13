class Parser {

    static SAY_ACTION = 'say'; //print text with control to advance
    static DIA_ACTION = 'dia'; //print text with a character, control to advance
    static JMP_ACTION = 'jmp'; //jump to a given instruction
    static EXC_ACTION = 'exc'; //execute code through window.eval
    static DEC_ACTION = 'dec'; //creates a decision list with a prompt 
    static MSG_ACTION = 'msg'; //send a message to the associated event dispatcher within the engine
    //unimplemented
    static DIN_ACTION = 'din'; //print text and take away the control of the player
    static END_ACTION = 'end'; //ends execution of a script

    constructor(mainScript, evtService = null, loadScriptAt = null, sayCallback = null,decisionCallback=null){
        this.mainScript = mainScript;
        this.evt = evtService;
        this.mainScriptIdentifiers = Object.keys(mainScript);
        this.sayCallback = sayCallback;
        this.decisionCallback = decisionCallback;
        this.currentLine = (loadScriptAt == null) ? this.mainScriptIdentifiers[0] : loadScriptAt;
    }

    processLine(fullInstruction){
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
            /*
            case instruction.includes(Parser.DIN_ACTION):
                let cName = instruction.match(/{.*}/)
                if(cName) cName = cName[0].substring(1, cName[0].length - 1)
                if (this.sayCallback) this.sayCallback(content, cName)
                this.queueNextLine();
                this.processCurrentLine();
                break;
                */
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
                let options = content.substring(prompt.length).split(",")
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
        }
    }

    processCurrentLine(goToNextLine = true){
        let line = this.mainScript[this.currentLine];
        this.processLine(line);
    }

    queueNextLine(){
        let _line = String(this.currentLine);
        let ix = this.mainScriptIdentifiers.indexOf(_line)
        this.currentLine = this.mainScriptIdentifiers[++ix]
    }
    queueLine(key){
        this.currentLine = key;
    }

}
export default Parser