class Parser {

    static SAY_ACTION = 'say'; //print text with control to advance
    static DIA_ACTION = 'dia'; //print text with a character, control to advance
    static JMP_ACTION = 'jmp'; //jump to a given instruction
    static EXC_ACTION = 'exc'; //execute code through window.eval
    static DEC_ACTION = 'dec'; //creates a decision list with a prompt 

    static SYN_ACTION = 'din'; //print text and take away the control of the player
    static END_ACTION = 'end'; //ends execution of a script

    constructor(mainScript,loadScriptAt = null, sayCallback = null,decisionCallback=null){
        this.mainScript = mainScript;
        this.mainScriptIdentifiers = Object.keys(mainScript);
        this.sayCallback = sayCallback;
        this.decisionCallback = decisionCallback;
        this.currentLine = (loadScriptAt == null) ? this.mainScriptIdentifiers[0] : loadScriptAt;
    }

    processLine(fullInstruction){
        let instruction, content, opts = null;
        let line = fullInstruction
        if (typeof line === 'string') {
            instruction = line.substring(0, 255).match(/(\[.+\]){1}/)[0];
            content = line.substring(instruction.length)
            instruction = instruction.substring(1, instruction.length - 1)
        } else {
            instruction = line.instruction;
            content = line.content;
            opts = line.opts;
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
            case instruction === Parser.DEC_ACTION:
                console.log(content, opts)
                if (this.decisionCallback) this.decisionCallback(content, opts);
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