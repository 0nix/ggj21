<script>
import { run } from 'svelte/internal';

    import Typed from 'typed.js'

    let ptext
    let runningTyped
    let _text = null

    let testRider = () => {
        console.log('aloha')
    }
 
    let abortTyped = () => {
        stopNow();
        clear();
        ptext.innerHTML = _text
    }

    export function stopNow() {
        if(runningTyped != null) runningTyped.destroy()
    }

    export function clear(){
        ptext.innerHTML = ''
    }

    export function printThisText(text) {
        _text = text;
        this.clear();
        runningTyped = new Typed(ptext,{
            strings: [text],
            typeSpeed: 10,
            showCursor: false
        });
    }


</script>

<div on:mousedown="{() => abortTyped()}">
    <p bind:this={ptext} id="text"></p>
</div>

<style>
    div {
        height: 300px;
        cursor: pointer;
    }
    p {
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
</style>