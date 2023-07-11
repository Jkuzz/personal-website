<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let toolWidth: number

  export let title: string
  export let image: string
  export let alt: string
  export let text: string

  let expanded = false

  function onExpand() {
    expanded = !expanded
    if (expanded) {
      cardWidth.set(256)
      dispatch('expand', { width: 256 })
    } else {
      cardWidth.set(0)
      dispatch('expand', { width: 0 })
    }
  }
  const cardWidth = tweened(0, { duration: 400, easing: cubicOut })
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  class="group flex-shrink-0 cursor-pointer rounded-md bg-gray-200 hover:shadow-lg flex flex-col gap-4 p-4"
  bind:clientWidth={toolWidth}
  on:click={onExpand}
  on:keydown={onExpand}
  {...$$restProps}
>
  <h3 class="text-center font-bold select-none">
    {title}
  </h3>
  <div class="flex flex-row justify-around">
    <div
      style="max-width: {$cardWidth}px;"
      class="overflow-hidden"
    >
      <p class="text-sm w-44 md:w-64 p-2 select-none">
        {text}
      </p>
    </div>
    <img
      class="h-28 w-28 md:h-32 md:w-32 bg-gray-200"
      src={image}
      {alt}
    />
  </div>
</li>
