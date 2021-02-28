<script>
    import {createEventDispatcher} from 'svelte';
import { space } from 'svelte/internal';
    import Typed from 'typed.js'

    let ptext
    let charName
    let runningTyped
    let _text = null
    let isRunning = false
    let clickToAdvance = true
    let wasAborted = false
    let finishRunCallback = null
    const dispatch  = createEventDispatcher();

    let testRider = () => {
        console.log('aloha')
    }

    let clickOnBox = () => {
        if(isRunning){
            abortTyped();
            if(!clickToAdvance) {
                finishRunCallback();
                return
            }
        } else { //progress the box
            if(clickToAdvance) dispatch('consumedTextBox');
        }
    }
 
    let abortTyped = () => {
        isRunning = false
        stopNow();
        ptext.innerHTML = '';
        ptext.innerHTML = _text
        wasAborted = true
    }

    export function stopNow() {
        if(runningTyped != null) runningTyped.destroy()
    }

    export function clear(){
        ptext.innerHTML = ''
        charName.innerHTML = ''
    }

    export function printThisText(text, _charName = null) {
        wasAborted = false
        isRunning = true
        _text = text;
        this.clear();
        if(runningTyped) runningTyped.destroy();
        charName.innerHTML = (_charName) ? _charName : ''; 
        runningTyped = new Typed(ptext,{
            strings: [text],
            typeSpeed: 10,
            showCursor: true,
            cursorChar: '*',
            onComplete: () => {
                isRunning = false
                if(finishRunCallback) finishRunCallback()
            }
        });
    }

    export function setClickAdvance(b){
        clickToAdvance = b
    }

    export function setFinishRunCallback(run){
        finishRunCallback = run
    }


</script>

<div on:mousedown="{() => clickOnBox()}">
    <h3 class="title is-6 charName" bind:this={charName}></h3>
    <p bind:this={ptext}></p>
    <span class="typed-cursor typed-cursor--blink" class:is-hidden={!wasAborted}>*</span>
</div>

<style>
    div {
        min-height: 100px;
        height: fit-content;
        cursor: pointer;
        padding: 1em;
        background-color: hsl(0, 0%, 6%);
    }

    .charName {
        margin-bottom: 0.2rem;
    }
    p, h3 {
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        color: hsl(0, 0%, 96%);
        text-shadow:
            0 0 5px hsl(0, 0%, 70%),
            0 0 10px hsl(0, 0%, 70%),
            0 0 20px hsl(0, 0%, 70%);

    }
</style>