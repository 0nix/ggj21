import {writable} from 'svelte/store';

const VarStore = writable({
    inventory: {},
    memory: {},
});

const Events = writable({})

export {VarStore, Events};