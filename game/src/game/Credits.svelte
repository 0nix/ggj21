<script>
    let show = false;
    export function showModal() {
        show = true;
    }
    export function hideModal() {
        console.log('aaa')
        show = false;
    }
    /*
      * TODO: Style the modal to fit the rest of the game
    */
</script>

<style>
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

<div class="modal" class:is-active={show}>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Panopticon, a game about surveillance</p>
    </header>
    <section class="modal-card-body">
        <p>Game Design, Game Scenario, Game and Tool Development, Art, and Music</p>
        <p>by Asobu Lab</p>
        <br/>
        <p>With special thanks to: Global Game Jam, The GitGud Group, ThatMaestroGuy, WreckoGekko, SlotterOtter, Aarón Cortés, Devin McCullough, Marco Antonio Solís, my parents, my Twitch followers, and you for playing my game.</p>
        <br/>
        <p>You can find more games at <a class="choices" href="https://asobulab.itch.io/" target="_blank">asobulab.itch.io</a></p>
        <p>I post on Twitter <a class="choices" href="https://twitter.com/asobulab" target="_blank">@asobulab</a></p>
        <p>I also stream on Twitch <a class="choices" href="https://twitch.tv/asobulab" target="_blank">asobulab</a></p>
        <br/>
        <p>This game was made with the Modesto Narrative Game Tool</p>
        <br/>
        <p>Neon text effect by Matt Smith on <a class="choices" href="https://codepen.io/AllThingsSmitty/pen/VzXrgY" target="_blank">codepen.io/AllThingsSmitty/pen/VzXrgY</a></p>
    </section>
    <footer class="modal-card-foot">
      <a class="choices" on:click={() => hideModal()}>Close</a>
    </footer>
  </div>
</div>