<script lang="ts">
  import ToolCard from '../components/ToolCard.svelte'
  import { tools } from './DisplayData'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  /**
   * This is used to scroll the tools by transforming their X
   */
  const imgTranslate = tweened(0, { duration: 500, easing: cubicOut })
  let innerWidth: number
  const toolWidths = Array<number>(tools.length)
  let widthDiff = 0

  $: {
    // Initial value is the gap-8 between tools
    widthDiff = innerWidth - toolWidths.reduce((acc, curr) => acc + curr, 32 * (tools.length - 1))
  }

  /**
   * Check whether the element is fully within the viewport.
   */
  function isInViewport(element: HTMLElement | null) {
    if (!element) return false
    const rect = element.getBoundingClientRect()
    return (
      rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  /**
   * Handle the scrolling. Checks for the first element in the direction
   * that is not fully visible and scrolls it into view.
   * @param direction in which direction to scroll
   */
  function onScroll(direction: 'left' | 'right') {
    const visibleTools = tools.filter((tool) =>
      isInViewport(document.querySelector('#tool_' + tools.indexOf(tool)))
    )
    const borderTool = direction == 'right' ? visibleTools.pop() : visibleTools.shift()
    if (!borderTool) return
    const borderToolIndex = tools.indexOf(borderTool)
    const invisibleTools = tools.filter((tool) => !visibleTools.includes(tool))

    let scrollTarget: any
    if (direction == 'right') {
      // RIGHT scroll
      scrollTarget = invisibleTools.filter((tool) => tools.indexOf(tool) > borderToolIndex).shift()
    } else {
      // LEFT scroll
      scrollTarget = invisibleTools.filter((tool) => tools.indexOf(tool) < borderToolIndex).pop()
    }

    if (scrollTarget) {
      scrollToTool(tools.indexOf(scrollTarget))
    }
  }

  function onToolClick(toolIndex: number) {
    console.log(widthDiff)
    window.setTimeout(() => scrollToTool(toolIndex), 401)
  }

  function scrollToTool(toolIndex: number) {
    document
      .getElementById('tool_' + toolIndex)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
</script>

<svelte:window bind:innerWidth />

<div class="tools flex flex-col relative items-center">
  <ul class="flex flex-row gap-8 overflow-x-hidden py-4 max-w-[100vw]">
    {#each tools as tool, index (tools.indexOf(tool))}
      <ToolCard
        title={tool.title}
        text={tool.text}
        image={tool.img}
        alt=""
        style="transform: translateX({$imgTranslate}px);"
        id="tool_{tools.indexOf(tool)}"
        on:expand={() => onToolClick(index)}
        bind:toolWidth={toolWidths[index]}
      />
    {/each}
  </ul>
  {#if widthDiff < 0}
    <button
      class="absolute left-4 top-24 p-3 rounded-full border bg-gray-200 bg-opacity-70 border-violet-300 font-bold text-xl hover:text-2xl transition-all"
      on:click={() => onScroll('left')}
    >
      &lt;
    </button>
    <button
      class="absolute right-4 top-24 p-3 rounded-full border bg-gray-200 bg-opacity-70 border-violet-300 font-bold text-xl hover:text-2xl transition-all"
      on:click={() => onScroll('right')}
    >
      &gt;
    </button>
  {/if}
</div>
