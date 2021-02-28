<script>
    let show = false;
    export function showModal() {
        show = true;
    }
    export function hideModal() {
        show = false;
    }
</script>

<div class="modal" class:is-active={show}>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Panopticon, a game about surveillance</p>
    </header>
    <section class="modal-card-body">
        <p>Game Design</p>
        <p>Game Writing</p>
        <p>Game and Tool Development</p>
        <p>Art</p>
        <p>Music</p>
        <p>by Asobu Lab</p>
        <br/>
        <p>You can find more games at asobulab.itch.io</p>
        <p>I post on twitter.com/asobulab</p>
        <p>I also stream on twitch.tv/asobulab</p>
        <br/>
        <p>This game was made with the Modesto Narrative Game Tool</p>
        <p>Neon text effect by Matt Smith on codepen.io/AllThingsSmitty/pen/VzXrgY</p>
    </section>
    <footer class="modal-card-foot">
      <button class="button">Close</button>
    </footer>
  </div>
</div>