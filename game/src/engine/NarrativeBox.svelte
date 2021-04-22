<script>
    import {onMount, createEventDispatcher} from 'svelte';
    import TypeBox from './TypeBox.svelte'
    import DecisionBox from './DecisionBox.svelte'
    import Parser from './Parser'
    let typeBox, decisionBox, _parser;
    let nextLineEnabled = true;
    export let script
    export let Events
    export let VarStore
    export let Debug
    const dispatch  = createEventDispatcher();

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
        if(nextLineEnabled) {
            _parser.queueNextLine();
            _parser.processCurrentLine();
        } else {
            console.log("disabled");
        }
    }

    const sayBox = (args,charName = null) =>{
        typeBox.printThisText(args, charName)
    }

    const decisionCallback = (content,opts) => {
        typeBox.setClickAdvance(false)
        typeBox.setFinishRunCallback(() => { decisionBox.hydrate(opts.choices) })
        typeBox.printThisText(content, (opts && opts.hasOwnProperty('character')) ? opts.character : null)   
    }

    const loadCallback = (scriptName,location) => {
        var o = {name: scriptName};
        if(location) o.location = location;
        dispatch('load',o);
    }

    export function loadScript(_script, startImmediately = false, lineIdentifier = null){
        script = _script;
        if(startImmediately){
            start(lineIdentifier);
        }
    }

    export function setNextLineEnabled(input){
        nextLineEnabled = input;
    }

    export function forceNextLine() {
        _parser.queueNextLine();
        _parser.processCurrentLine();
    }

    export function setCharacterText(input){
        typeBox.setCharacterText(input);
    }

    export function lockCharacterText(){
        typeBox.setLockCharacterText(true);
    }

    export function unlockCharacterText(){
        typeBox.setLockCharacterText(false);
    }

    export function start(lineIdentifier = null){
        _parser = new Parser(script, Events, VarStore, lineIdentifier, sayBox,decisionCallback,loadCallback, Debug);
        _parser.processCurrentLine()
    }

    export function destroyDecisionBox(){
        typeBox.setClickAdvance(true)
        decisionBox.dehydrate();
    }

</script>

<TypeBox bind:this={typeBox} on:consumedTextBox={onTextConsumed}/>
<slot name="TypeBoxFooter"></slot>
<div class="decisionbox">
<DecisionBox bind:this={decisionBox} on:consumedChoice={onChoiceConsumed}/>
</div>

<style>
    .decisionbox{
        margin-top: 1.25rem;
    }
</style>