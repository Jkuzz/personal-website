<script lang="ts">
  import { fly, scale } from 'svelte/transition'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  export let title: string
  export let image: string
  export let alt: string
  export let text: string

  let expanded = false

  function onExpand() {
    expanded = !expanded
    if (expanded) {
      cardWidth.set(256)
    } else {
      cardWidth.set(0)
    }
  }
  const cardWidth = tweened(0, { duration: 400, easing: cubicOut })
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  class="group flex-shrink-0 cursor-pointer rounded-md bg-gray-200 hover:shadow-lg flex flex-col gap-4 p-4"
  on:click={onExpand}
  on:keydown={onExpand}
>
  <h3 class="text-center font-bold">
    {title}
    <!-- {$cardWidth} -->
  </h3>
  <div class="flex flex-row justify-around">
    <div
      style="max-width: {$cardWidth}px;"
      class="overflow-hidden"
    >
      <p class="text-sm w-64 p-2">
        {text}
      </p>
    </div>
    <img
      class="h-32 w-32 bg-gray-200"
      src={image}
      {alt}
    />
  </div>
</li>
