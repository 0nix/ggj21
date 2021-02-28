<script>
    import {onMount} from 'svelte'
    import NarrativeBox from '../engine/NarrativeBox.svelte'
    import {VarStore,Events} from '../engine/Store'
    import StartScreen from './StartScreen.svelte'

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
        vs.update((n) => {
            n.memory = Object.assign({},scripts.starterValues);
            return n;
        });
        runScript = scripts.main;
        gameLoad = true;
    })

</script>

<style>
    .gameScreen{
        width: 875px;
    }
</style>

<div>
    <section class:is-hidden="{gameStart == false}" class="gameScreen horizontal-center">
        <NarrativeBox bind:this={mainNarrative} bind:script={runScript} bind:Events={ev} bind:VarStore={vs} on:load={loadScriptCallback}/>
    </section>
    <section class="section">
        {#if !gameStart && gameLoad}
            <StartScreen on:startGame={() => startGame()}/>
        {/if}
        {#if !gameLoad}
        <div class="container">
            <p>Loading...</p>
        </div>
        {/if}
    </section>
</div>