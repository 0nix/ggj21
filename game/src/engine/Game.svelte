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

<div>
    <section class="section">
        <div class="container" class:is-hidden="{gameStart == false}">
            <NarrativeBox bind:this={mainNarrative} bind:script={runScript} bind:Events={ev} bind:VarStore={vs} on:load={loadScriptCallback}/>
        </div>
        {#if !gameStart && gameLoad}
        <div class="container">
            <section class="hero is-medium is-link">
                <div class="hero-body">
                    <p class="title has-text-centered">Panopticon Dev Build</p>
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