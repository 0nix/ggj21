<script>
import {createEventDispatcher, onMount} from 'svelte';
import Typed from 'typed.js'

const dispatch = createEventDispatcher();
let hasTyped = false

onMount(() => {
  let typed = new Typed('#typed-title', {
    strings: [`                                                                                                    
                                                               ,,                                 
'7MM"""Mq.                                             mm      db                                 
  MM   'MM.                                            MM                                         
  MM   ,M9  ,6"Yb.  '7MMpMMMb.   ,pW"Wq.  '7MMpdMAo. mmMMmm  '7MM   ,p6"bo   ,pW"Wq.  '7MMpMMMb.  
  MMmmdM9  8)   MM    MM    MM  6W'   'Wb   MM   'Wb   MM      MM  6M'  OO  6W'   'Wb   MM    MM  
  MM        ,pm9MM    MM    MM  8M     M8   MM    M8   MM      MM  8M       8M     M8   MM    MM  
  MM       8M   MM    MM    MM  YA.   ,A9   MM   ,AP   MM      MM  YM.    , YA.   ,A9   MM    MM  
.JMML.     'Moo9^Yo..JMML  JMML. 'Ybmd9'    MMbmmd'    'Mbmo .JMML. YMbmd'   'Ybmd9'  .JMML  JMML.
                                            MM                                                    
                                          .JMML.                                                  
`],
    showCursor: true,
    typeSpeed: 1,
    cursorChar: '*',
    onComplete: () => {
        hasTyped = true
    }
  });
})
</script>

<style>
.ascii-art{
    background: none;
    width: fit-content;
    font-weight: 700;
    /*color: whitesmoke;*/
}

.ascii-art{
    width: 875px;
    height: 260px;
    -webkit-transition: all 1s linear;
    -moz-transition: all 1s linear;
    -o-transition: all 1s linear;
    transition: all 1s linear;
}
.other-text {
    -webkit-transition: all 1s linear;
    -moz-transition: all 1s linear;
    -o-transition: all 1s linear;
    transition: all 1s linear;
}
*.glow{
color: orange;
  text-shadow:
    0 0 5px orangered,
    0 0 10px orangered,
    0 0 20px orangered,
    0 0 40px orange,
    0 0 80px orange,
    0 0 90px orangered,
    0 0 100px orangered,
    0 0 150px red;
}
.hide{
    display:none;
}
</style>

<div class="container">
    <section class="hero is-medium">
        <div class="hero-body">
            <pre id="typed-title" class="ascii-art horizontal-center" class:glow="{hasTyped}">
            </pre>
            <p style="margin-bottom: 1.5rem;"class="has-text-centered other-text" class:glow="{hasTyped}">a game by Asobu Lab</p>
                <ul class="has-text-centered">
                    <li><button on:click="{() => dispatch('startGame')}" class="button is-dark">Start Game</button></li>
                    <li><button on:click="{() => dispatch('startGame')}" class="button is-dark">Credits</button></li>
                </ul>
        </div>
    </section>
</div>