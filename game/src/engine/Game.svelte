<script>
    import {onMount} from 'svelte'
    import TypeBox from './TypeBox.svelte'
    import DecisionBox from './DecisionBox.svelte'
    import Parser from './Parser'
    import mainScript from '../script/mainline'

    let mainTypeBox
    let mainDecisionBox

    let gameStart = false
    const callGame = (opts) => {
        console.log('Hello' ,opts)
    }

    const sayMainBox = (args) =>{
        console.log(args)
        mainTypeBox.printThisText(args)
    }

    const _parser = new Parser(mainScript, null, sayMainBox)

    let startGame = (opts) => {
        gameStart = true
        _parser.processCurrentLine()
    }

    onMount (() => {
        window.callGame = callGame;
    })
</script>

<div>
    <section class="section">
        <div class="container" class:is-hidden="{gameStart == false}">
            <TypeBox bind:this={mainTypeBox}/>
            <DecisionBox bind:this={mainDecisionBox}/>
        </div>
        {#if !gameStart}
        <div class="container">
            <section class="hero is-medium is-link">
                <div class="hero-body">
                    <p class="title has-text-centered">Panopticon Dev Build</p>
                    <p class="has-text-centered">
                    <button on:click="{() => startGame(122)}" class="button is-dark">Start Game</button>
                    </p>
                </div>
            </section>
        </div>
        {/if}
    </section>
</div>