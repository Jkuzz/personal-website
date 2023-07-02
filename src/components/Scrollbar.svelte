<script lang="ts">
  let scrollY = 0
  let innerHeight = 0
  let offsetHeight = document.body.offsetHeight

  function updateHeight() {
    offsetHeight = document.body.offsetHeight
  }
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight
  on:resize={updateHeight}
/>

<aside class="p-2 fixed left-0 top-0 h-screen">
  <div
    class="p-4 bg-indigo-300"
    style="height: {(100 * scrollY) / (offsetHeight - innerHeight)}%;"
  />
</aside>
