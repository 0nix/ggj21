<script>
    import {onMount} from 'svelte'
    import NarrativeBox from './NarrativeBox.svelte'
    import mainScript from '../script/mainline'
    import {VarStore,Events} from './Store'

    let mainNarrative
    let ms = mainScript
    let vs = VarStore
    let ev = Events
    let gameStart = false

    vs.subscribe(val =>{ console.log(val)})
    ev.subscribe(ev => {console.log(ev) });

    const startGame = (opts) => {
        gameStart = true
        mainNarrative.start();
    }

    onMount (() => {})

</script>

<div>
    <section class="section">
        <div class="container" class:is-hidden="{gameStart == false}">
            <NarrativeBox bind:this={mainNarrative} bind:script={ms} bind:Events={ev} bind:VarStore={vs}/>
        </div>
        {#if !gameStart}
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
    </section>
</div>