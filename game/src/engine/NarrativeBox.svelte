<script>
    import TypeBox from './TypeBox.svelte'
    import DecisionBox from './DecisionBox.svelte'
    import Parser from './Parser'
    let typeBox, decisionBox, _parser
    export let script
    export let Events
    export let VarStore

    const onTextConsumed = () => {
        nextLine();
    }

    const onChoiceConsumed = (evt) => {
        let line = evt.detail;
        typeBox.setClickAdvance(true);
        typeBox.setFinishRunCallback(null);
        decisionBox.dehydrate();
        _parser.processLine(line);
    }

    const nextLine = () => {
        _parser.queueNextLine();
        _parser.processCurrentLine();
    }

    const sayBox = (args,charName = null) =>{
        typeBox.printThisText(args, charName)
    }

    const decisionCallback = (content,opts) => {
        typeBox.setClickAdvance(false)
        typeBox.setFinishRunCallback(() => { decisionBox.hydrate(opts.choices) })
        typeBox.printThisText(content, (opts.hasOwnProperty('character')) ? opts.character : null)   
    }



    export function start(lineIdentifier = null){
        _parser = new Parser(script, Events, VarStore, lineIdentifier, sayBox,decisionCallback)
        _parser.processCurrentLine()
    }

</script>

<TypeBox bind:this={typeBox} on:consumedTextBox={onTextConsumed}/>
<DecisionBox bind:this={decisionBox} on:consumedChoice={onChoiceConsumed}/>