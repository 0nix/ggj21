<script>
    import {onMount} from 'svelte'
    import NarrativeBox from './NarrativeBox.svelte'
    import {VarStore,Events} from './Store'

    let mainNarrative
    let scripts
    let runScript = null
    let vs = VarStore
    let ev = Events
    let gameStart = false
    let gameLoad = false

    vs.subscribe(val =>{ console.log(val)})
    ev.subscribe(ev => {console.log(ev) });

    const startGame = (opts) => {
        gameStart = true
        mainNarrative.start();
    }

    const loadScriptCallback = (evt) => {
        if(scripts[evt.detail.name]){
            if(!evt.detail.hasOwnProperty('location')){
                runScript = scripts[evt.detail.name];
                //until I can figure out how to reactively update the prop, I'll have to make this call
                mainNarrative.loadScript(runScript,true); 
            } else {
                //put narrative modal boxes and other instances of sidelining narrative here
            }
        } else {
            mainNarrative.nextLine();
        }
    }

    onMount (async () => {
        scripts = await import('../script/scriptDepo.js');
        runScript = scripts.main;
        gameLoad = true;
    })

</script>

<style>
.ascii-art{
    background: none;
    width: fit-content;
    font-weight: 700;
    /*color: whitesmoke;*/
}
</style>

<div>
    <section class="section">
        <div class="container" class:is-hidden="{gameStart == false}">
            <NarrativeBox bind:this={mainNarrative} bind:script={runScript} bind:Events={ev} bind:VarStore={vs} on:load={loadScriptCallback}/>
        </div>
        {#if !gameStart && gameLoad}
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
                    <button on:click="{() => startGame()}" class="button is-dark">Start Game</button>
                    </p>
                </div>
            </section>
        </div>
        {/if}
        {#if !gameLoad}
        <div class="container">
            <p>Loading...</p>
        </div>
        {/if}
    </section>
</div>