<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  export let isActive = false
  export let targetId: string

  let elementWidth: number
  const underlineWidth = tweened(0, { duration: 400, easing: cubicOut })

  function onMouseOver() {
    if (!isActive) {
      underlineWidth.set(elementWidth - 2)
    }
  }

  function onMouseOut() {
    if (!isActive) {
      underlineWidth.set(0)
    }
  }

  function scrollToTarget() {
    console.log(document.querySelector(targetId))
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  $: {
    if (isActive) {
      underlineWidth.set(elementWidth - 2)
    } else {
      underlineWidth.set(0)
    }
  }
</script>

<button
  class="font-bold text-violet-900 cursor-pointer"
  on:mouseenter={onMouseOver}
  on:mouseleave={onMouseOut}
  bind:clientWidth={elementWidth}
  on:click={scrollToTarget}
>
  <slot />
  <div
    style="width: {$underlineWidth}px;"
    class="h-[2px] rounded-sm bg-violet-900"
  />
</button>
