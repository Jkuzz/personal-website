<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  export let index: number
  export let title: string
  export let text: string
  export let img: string
  export let alt: string
  export let tools: string[]
  export let githubUrl: string | undefined = undefined
  export let demoUrl: string | undefined = undefined

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
      class="w-[90vw] md:w-[70vw] lg:w-[40vw] hover:shadow-xl"
    />
  </button>
  <div
    style="width: {$sidebarWidth}rem"
    class="flex overflow-hidden bg-gray-200 text-black rounded-r-md"
  >
    <div class="p-4 flex flex-col justify-between">
      <h3 class="text-center font-bold whitespace-nowrap">
        {title}
      </h3>
      <p class="text-sm w-80">
        {text}
      </p>
      <ul class="flex flex-row gap-2 flex-wrap">
        {#each tools as tool}
          <li class="bg-amber-400 p-1 cursor-default text-black text-xs rounded-sm">{tool}</li>
        {/each}
      </ul>
      <div class="flex flex-row">
        {#if githubUrl}
          <a
            target="_blank"
            href={githubUrl}>Source Code</a
          >
        {/if}
        {#if demoUrl}
          <a
            target="_blank"
            href={demoUrl}>Live demo</a
          >
        {/if}
      </div>
    </div>
  </div>
</li>
