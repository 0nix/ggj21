import {writable} from 'svelte/store';

const VarStore = writable({
    inventory: [],
    memory: {},
});

const Events = writable({})

const Debug = writable({})

export {VarStore, Events, Debug};