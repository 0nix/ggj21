const SAY_ACTION = 'say'
const JMP_ACTION = 'jmp'


class Parser {
    constructor(mainScript,loadScriptAt = null, sayCallback = null){
        this.mainScript = mainScript;
        this.mainScriptIdentifiers = Object.keys(mainScript);
        this.sayCallback = sayCallback
        this.currentLine = (loadScriptAt == null) ? this.mainScriptIdentifiers[0] : loadScriptAt;
        //this.nextLine = null;
    }

    processCurrentLine(goToNextLine = true){
        let line = this.mainScript[this.currentLine];
        let instruction, content, opts = null;
        if(typeof line === 'string'){
            instruction = line.substring(0,3);
            content = line.substring(3)
        } else {
            instruction = line.instruction;
            content = line.content;
            opts = line.opts;
        }
        switch (instruction){
            case SAY_ACTION:
                if(this.sayCallback) this.sayCallback(content)
                break
        }

        if(goToNextLine){
            this.queueNextLine();
        }
    }

    queueNextLine(){
        let _line = String(this.currentLine);
        let ix = this.mainScriptIdentifiers.indexOf(_line)
        this.currentLine = this.mainScriptIdentifiers[ix++]
    }
    queueLine(key){
        this.currentLine = key;
    }

}
export default Parser