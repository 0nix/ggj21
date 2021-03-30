<script>
    import {onMount, createEventDispatcher} from 'svelte';
    const dispatch  = createEventDispatcher();
    export let VarStore
    export let Events
    export let InventoryLimit
    export let Strings

    let cacheItem = null;
    let showDropOrReplace = false;

    Events.subscribe(ev => {
        switch(ev.category){
            case 'INV':
                addToInventory(ev.content)
                break;
            default:
                break;
        }
    });

    const addToInventory = (obj) => {
        VarStore.update((store) => {
            if(store.inventory.length <= InventoryLimit - 1){
                store.inventory.push(obj)
                 dispatch('inventoryDone');
            } else {
                cacheItem = obj;
                showDropOrReplace = true;
            }
            return store;
        })
    }

    function display(key){
        return Strings.hasOwnProperty(key) ? Strings[key] : key;
    }

    function dropItem(key) {
        VarStore.update((store) => {
            if(store.inventory.includes(key)){
                let inv = store.inventory.filter(it => it != key);
                inv.push(cacheItem);
                store.inventory = inv;
                return store;
            } else {
                return store;
            }
        });
        showDropOrReplace = false;
        cacheItem = null;
        dispatch('inventoryDone');
    }

</script>

<style>
    .columns {
        height: 42px;
        width: 875px;
    }
    .inventory-slot {
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        color: whitesmoke;
    }
    .inventory-slot{
        border: 1px solid whitesmoke;
        padding: 0.5rem;
    }

    .modal-card-head, .modal-card-title, .modal-card-body, .modal-card-foot, button{
        color: whitesmoke;
        background-color: rgba(0, 0, 0, 0) !important;
    }

    .choices{
        color: hsl(0, 0%, 4%);
        background-color: hsl(0, 0%, 96%);
    }
    .choices:hover{
        background-color: orangered;
        color: hsl(0, 0%, 96%);
    }
</style>

<div class="columns horizontal-center">
    {#each $VarStore.inventory as i}
        <div class="column inventory-slot">
            <span class='inventory-content'>{display(i)}</span>
        </div>
    {/each}
</div>

<div class="modal" class:is-active={showDropOrReplace}>
<div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Drop or Replace a piece of Evidence</p>
        </header>
        <section class="modal-card-body">
            <p>You can only present three pieces of evidence at a time. Please choose a piece of evidence to drop or leave the current one off the record.</p>
            <p>Replace [{display(cacheItem)}] with: </p>
            <ul>
            {#each $VarStore.inventory as i}
                <li><a class="choices" on:click="{() => dropItem(i)}">[{display(i)}]</a></li>
            {/each}
            </ul>
            <p>Or, <a class="choices" on:click="{() => dropItem(cacheItem)}">Drop the Evidence for [{display(cacheItem)}]</a></p>
        </section>
    </div>
</div>