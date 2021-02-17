<script>
import {createEventDispatcher} from 'svelte';

const dispatch = createEventDispatcher();
</script>

<style>
.ascii-art{
    background: none;
    width: fit-content;
    font-weight: 700;
    /*color: whitesmoke;*/
}
</style>

<div class="container">
    <section class="hero is-medium">
        <div class="hero-body">
            <pre class="ascii-art horizontal-center">
                                                                                                    
                                                               ,,                                 
`7MM"""Mq.                                             mm      db                                 
  MM   `MM.                                            MM                                         
  MM   ,M9  ,6"Yb.  `7MMpMMMb.   ,pW"Wq.  `7MMpdMAo. mmMMmm  `7MM   ,p6"bo   ,pW"Wq.  `7MMpMMMb.  
  MMmmdM9  8)   MM    MM    MM  6W'   `Wb   MM   `Wb   MM      MM  6M'  OO  6W'   `Wb   MM    MM  
  MM        ,pm9MM    MM    MM  8M     M8   MM    M8   MM      MM  8M       8M     M8   MM    MM  
  MM       8M   MM    MM    MM  YA.   ,A9   MM   ,AP   MM      MM  YM.    , YA.   ,A9   MM    MM  
.JMML.     `Moo9^Yo..JMML  JMML. `Ybmd9'    MMbmmd'    `Mbmo .JMML. YMbmd'   `Ybmd9'  .JMML  JMML.
                                            MM                                                    
                                          .JMML.                                                  

            </pre>
            <p class="has-text-centered">
                <button on:click="{() => dispatch('startGame')}" class="button is-dark">Start Game</button>
            </p>
        </div>
    </section>
</div>