<script>
    import {createEventDispatcher} from 'svelte';
import { space } from 'svelte/internal';
    import Typed from 'typed.js'

    let ptext
    let charName
    let charNameText = ''
    let runningTyped
    let _text = null
    let isRunning = false
    let clickToAdvance = true
    let wasAborted = false
    let finishRunCallback = null
    let lockCharacterText = false
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
    }

    export function setCharacterText(_charName){
        charNameText =  _charName; 
    }
    export function setLockCharacterText(input){
        lockCharacterText = input;
    }

    export function printThisText(text, _charName = null) {
        wasAborted = false
        isRunning = true
        _text = text;
        this.clear();
        if(runningTyped){
             runningTyped.destroy();
        }
        if(!lockCharacterText){
            charNameText = (_charName) ? _charName : ''; 
        }
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

<div class="contain" on:mousedown="{() => clickOnBox()}">
    <h3 class="is-6 charName" bind:this={charName}>{charNameText}</h3>
    <p bind:this={ptext}></p>
    <span class="typed-cursor typed-cursor--blink" class:is-hidden={!wasAborted}>*</span>
</div>

<style>
    .contain {
        min-height: 300px;
        height: fit-content;
        cursor: pointer;
        padding: 1em;
        background-color: hsl(0, 0%, 6%);
        border-radius: 25px;
    }

    .charName {
        margin-bottom: 1.4rem;
        font-style: italic;
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