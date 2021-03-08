<script>
    import {onMount, createEventDispatcher} from 'svelte';
    const dispatch  = createEventDispatcher();
    export let VarStore
    export let Events
    export let InventoryLimit 

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
                //displayDropOrReplace();
                showDropOrReplace = true;
                /*
                * TODO: update inventory items on the drop or replace modal
                */
            }
            return store;
        })
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
</style>

<div class="columns horizontal-center">
    {#each $VarStore.inventory as i}
        <div class="column inventory-slot">
            <span class='inventory-content'>{i}</span>
        </div>
    {/each}
</div>

<div class="modal" class:is-active={showDropOrReplace}>

</div>