<script>
    import {onMount} from 'svelte'
    import NarrativeBox from '../engine/NarrativeBox.svelte'
    import {VarStore,Events, Debug} from '../engine/Store'
    import StartScreen from './StartScreen.svelte'
    import Credits from './Credits.svelte'
    import Inventory from './Inventory.svelte'
    import dictionary from '../script/stringDictionary'

    let mainNarrative
    let inventory
    let credits
    let scripts
    let runScript = null
    let currentlyRunningScript = null
    let currentlyRunningLine = null
    let vs = VarStore
    let ev = Events
    let debug = Debug
    let gameStart = false
    let gameLoad = false
    let awaitMode = false
    let debugMenuOpen = false
    const STARTSCRIPT = 'day1'
    let INVENTORYLIMIT = 3
    let stringDictionary = dictionary

    let debugSelectedScript;
    let debugJumpLine = null
    let debugVSDump = null
    let debugAddInventory = null
    let debugRemoveInventory = null
    let debugValKey = null
    let debugValSet = null

    vs.subscribe(val =>{ 
        debugVSDump = JSON.stringify(val, null, 2);
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
    debug.subscribe(ev => {
        switch(ev.category){
            case 'line':
                currentlyRunningLine = ev.content;
                break;
        }
    })

    const startGame = (opts) => {
        gameStart = true
        mainNarrative.start();
    }

    const showCredits = () => {
        credits.showModal();
    }

    const setScript = () => {
        runScript = scripts[debugSelectedScript];
        gameStart = true
        mainNarrative.destroyDecisionBox();
        mainNarrative.loadScript(runScript,true);
    }

    const setParserLatestLine = () => {
        if(gameStart && runScript){
            if(runScript.hasOwnProperty(debugJumpLine)){
                mainNarrative.destroyDecisionBox();
                mainNarrative.loadScript(runScript,true,debugJumpLine);
            }
        }
    }

    const addtoInventory = () => {
        VarStore.update((store) => {
            store.inventory.push(debugAddInventory)
            debugAddInventory = null
            return store;
        })
    }

    const removeFromInventory = () => {
        VarStore.update((store) => {
            store.inventory = store.inventory.filter(it => it != debugRemoveInventory);
            debugRemoveInventory = null
            return store;
        })
    }

    const setMemoryValue = () => {
        if(debugValKey == null || debugValSet == null) return; 
        VarStore.update((store) => {
            if(isNaN(Number(debugValSet))){
                store.memory[debugValKey] = debugValSet;
            } else {
                store.memory[debugValKey] = Number(debugValSet);
            }
            debugValKey = null;
            debugValSet = null;
            return store;
        })
    }

    const loadScriptCallback = (evt) => {
        if(scripts[evt.detail.name]){
            currentlyRunningScript = evt.detail.name;
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
        currentlyRunningScript = STARTSCRIPT;
        runScript = scripts[STARTSCRIPT];
        gameLoad = true;
        cheet('b u g', function () {
            debugMenuOpen = true
        });
    })
</script>

<style>
    .gameScreen{
        width: 875px;
    }
    .view{
        padding-top: 100px;
    }
    .debugItems {
        width: 150px;
    }
</style>

<div class="game-container">
    <div class:is-hidden="{gameStart == false}" class="game">
        <section class="gameScreen horizontal-center view">
            <NarrativeBox bind:this={mainNarrative} bind:script={runScript} bind:Events={ev} bind:VarStore={vs} bind:Debug={debug} on:load={loadScriptCallback}>
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

<div class="modal" class:is-active={debugMenuOpen}>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Debug Menu</p>
    </header>
    <section class="modal-card-body">
        <p>Current Script: {currentlyRunningScript} Current Line: {currentlyRunningLine}</p>
        {#if gameLoad}
            <select bind:value={debugSelectedScript}>
            {#each Object.keys(scripts) as key}
                <option>{key}</option>
            {/each}
            </select>
        {/if}
        <button on:click={() => setScript() }>Execute Script</button>
        <input bind:value="{debugJumpLine}" type="text" class='input debugItems is-small'/> <button on:click={() => setParserLatestLine() }>Jump to Line</button>
        <p>Current Memory Dump: {debugVSDump}</p>
        <input bind:value="{debugAddInventory}" type="text" class='input debugItems is-small'/> <button on:click={() => addtoInventory() }>Add To Inventory</button>
        <br/>
        <input bind:value="{debugRemoveInventory}" type="text" class='input debugItems is-small'/> <button on:click={() => removeFromInventory() }>Remove from Inventory</button>
        <br/>
        <input bind:value="{debugValKey}" type="text" class='input debugItems is-small'/>
        <input bind:value="{debugValSet}" type="text" class='input debugItems is-small'/>
        <button on:click={() => setMemoryValue() }>Set Memory Value</button>

    </section>
    <footer class="modal-card-foot">
      <button on:click={() => debugMenuOpen = false}>Close</button>
    </footer>
  </div>
</div>