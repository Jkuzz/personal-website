<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  export let index: number
  export let title: string
  export let text: string
  export let img: string
  export let alt: string

  let zigZagClass = index % 2 == 0 ? 'self-start' : 'self-end'

  let expanded = false
  const sidebarWidth = tweened(0, { duration: 300, easing: cubicOut })

  function onClick() {
    if (expanded) {
      sidebarWidth.set(0)
    } else {
      sidebarWidth.set(21)
    }

    expanded = !expanded
  }
</script>

<li class="flex flex-row">
  <button
    class="cursor-pointer"
    on:click={onClick}
  >
    <img
      src={img}
      {alt}
      class=""
    />
  </button>
  <div
    style="width: {$sidebarWidth}rem"
    class="overflow-hidden bg-gray-200 text-black rounded-r-md"
  >
  <div class="p-4 flex flex-col">

    <h3 class="text-center font-bold">
      {title}
    </h3>
    <p class="text-sm w-80">
      {text}
    </p>
  </div>
  </div>
</li>
