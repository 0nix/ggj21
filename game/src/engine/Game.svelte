<script>
    import {onMount} from 'svelte'
    import {createNanoEvents} from 'nanoevents'
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

    const sayMainBox = (args,charName = null) =>{
        mainTypeBox.printThisText(args, charName)
    }

    const onTextConsumed = () => {
        nextLine();
    }

    const decisionCallback = (content,opts) => {
        mainTypeBox.setClickAdvance(false)
        mainTypeBox.setFinishRunCallback(() => { mainDecisionBox.hydrate(opts.choices) })
        mainTypeBox.printThisText(content, (opts.character) ? opts.character : null)   
    }

    const onChoiceConsumed = (evt) => {
        let line = evt.detail;
        mainTypeBox.setClickAdvance(true);
        mainTypeBox.setFinishRunCallback(null);
        mainDecisionBox.dehydrate();
        _parser.processLine(line);
    }

    const nextLine = () => {
        _parser.queueNextLine();
        _parser.processCurrentLine();
    }

    const emitter = createNanoEvents();
    emitter.on('global', data => {
        console.log(data);
    })

    const _parser = new Parser(mainScript, emitter, null, sayMainBox,decisionCallback)

    const startGame = (opts) => {
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
            <TypeBox bind:this={mainTypeBox} on:consumedTextBox={onTextConsumed}/>
            <DecisionBox on:consumedChoice={onChoiceConsumed} bind:this={mainDecisionBox}/>
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