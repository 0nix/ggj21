<script>
    import {createEventDispatcher} from 'svelte';
    let choices = []
    let rolledOverChoice = null
    const dispatch  = createEventDispatcher();

    let choose = (choice) => {
         dispatch('consumedChoice',choice.line);
    }

    export function hydrate(data){
        choices = data
    }

    export function dehydrate(){
        choices = []
        rolledOverChoice = null
    }


</script>

<div class="container">
    <div class="columns">
        <div class="column">
            <ul>
                {#each choices as c}
                    <li class="choice-container"><a class="noselect choices" on:mouseover="{() => rolledOverChoice = c}" on:mouseout="{() => rolledOverChoice = null}"  on:click="{choose(c)}">{c.content}</a></li>
                {/each}
            </ul>
        </div>
        <div class="column">
                {#each choices as c}
                    <p class="noselect" class:is-hidden="{c != rolledOverChoice}" >{(c.extra) ? c.extra : ''}</p>
                {/each}
        </div>
    </div>
</div>

<style>
    .noselect {
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
    .choice-container{
        margin-bottom: 0.65rem;
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