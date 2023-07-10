<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  export let isCurrent = false
  let elementWidth: number
  const underlineWidth = tweened(0, { duration: 400, easing: cubicOut })

  function onMouseOver() {
    if (!isCurrent) {
      underlineWidth.set(elementWidth - 2)
    }
  }

  function onMouseOut() {
    if (!isCurrent) {
      underlineWidth.set(0)
    }
  }
</script>

<div
  class="font-bold text-violet-900 cursor-pointer"
  role="navigation"
  on:mouseenter={onMouseOver}
  on:mouseleave={onMouseOut}
  bind:clientWidth={elementWidth}
>
  <slot />
  <div
    style="width: {$underlineWidth}px;"
    class="h-[2px] rounded-sm bg-violet-900"
  />
</div>
