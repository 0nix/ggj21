<script>
    import {onMount} from 'svelte'
    import NarrativeBox from '../engine/NarrativeBox.svelte'
    import {VarStore,Events} from '../engine/Store'
    import StartScreen from './StartScreen.svelte'
    import Credits from './Credits.svelte'
    import Inventory from './Inventory.svelte'
    import dictionary from '../script/stringDictionary'

    let mainNarrative
    let inventory
    let credits
    let scripts
    let strings
    let runScript = null
    let vs = VarStore
    let ev = Events
    let gameStart = false
    let gameLoad = false
    let awaitMode = false;
    const STARTSCRIPT = 'day1'
    let INVENTORYLIMIT = 3
    let stringDictionary = dictionary;

    vs.subscribe(val =>{ 
        console.log(val);
    })
    ev.subscribe(ev => {
        switch(ev.category){
            case 'AWAIT':
                mainNarrative.setNextLineEnabled(!ev.content);
                awaitMode = ev.content;
                break;
            case 'SETCHAR':
                let char = (dictionary.hasOwnProperty(ev.content) ? dictionary[ev.content] : ev.content);
                mainNarrative.setCharacterText(char);
                break;
            case 'UNLOCKCHAR':
                mainNarrative.unlockCharacterText();
                break;
            case 'LOCKCHAR':
                console.log(ev)
                mainNarrative.lockCharacterText();
                break;
            case 'flushInventory':
                 vs.update((currentStore) => {
                        let newVars = {}
                        for(let i of currentStore.inventory){
                            newVars[i] = true
                        }
                        newVars.numberItems = currentStore.inventory.length;
                        currentStore.memory = Object.assign(currentStore.memory,newVars)
                        currentStore.inventory = [];
                        return currentStore;
                    })
                break;
            default:
                console.log(ev);
                break;
        }
    });

    const startGame = (opts) => {
        gameStart = true
        mainNarrative.start();
    }

    const showCredits = () => {
        credits.showModal();
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

    const inventoryDoneCallback = () => {
        if(awaitMode){
            mainNarrative.forceNextLine()
        }
    }

    onMount (async () => {
        scripts = await import('../script/scriptDepo.js');
        
        vs.update((n) => {
            n.memory = Object.assign({},scripts.starterValues);
            return n;
        });
        runScript = scripts[STARTSCRIPT];
        gameLoad = true;
    })
</script>

<style>
    .gameScreen{
        width: 875px;
    }
    .view{
        padding-top: 100px;
    }
</style>

<div class="game-container">
    <div class:is-hidden="{gameStart == false}" class="game">
        <section class="gameScreen horizontal-center view">
            <NarrativeBox bind:this={mainNarrative} bind:script={runScript} bind:Events={ev} bind:VarStore={vs} on:load={loadScriptCallback}>
                <div slot="TypeBoxFooter">
                    <Inventory bind:this={inventory} bind:Strings={stringDictionary} bind:VarStore={vs} bind:Events={ev} bind:InventoryLimit={INVENTORYLIMIT} on:inventoryDone={inventoryDoneCallback}/>
                </div>
            </NarrativeBox>
        </section>
    </div>
    <section class="section">
        <Credits bind:this={credits}/>
        {#if !gameStart && gameLoad}
            <StartScreen on:startGame={() => startGame()} on:credits={() => showCredits()}/>
        {/if}
        {#if !gameLoad}
        <div class="container">
            <p>Loading...</p>
        </div>
        {/if}
    </section>
</div>