<script lang="ts">
  import ToolCard from '../components/ToolCard.svelte'
  import { tools } from './DisplayData'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  const imgTranslate = tweened(0, { duration: 500, easing: cubicOut })

  function isInViewport(element: HTMLElement | null) {
    if (!element) return false
    const rect = element.getBoundingClientRect()
    return (
      rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function onScroll(e: WheelEvent) {
    const invisibleTools = tools.filter(
      (tool) => !isInViewport(document.querySelector('#tool_' + tools.indexOf(tool)))
    )
    const visibleTools = tools.filter((tool) => !invisibleTools.includes(tool))
    const borderTool = e.deltaY > 0 ? visibleTools.pop() : visibleTools.shift()
    if (!borderTool) return
    const borderToolIndex = tools.indexOf(borderTool)

    let targetTool: any

    if (e.deltaY > 0) {
      // RIGHT scroll
      targetTool = invisibleTools.filter((tool) => tools.indexOf(tool) > borderToolIndex).shift()
    } else {
      // LEFT scroll
      targetTool = invisibleTools.filter((tool) => tools.indexOf(tool) < borderToolIndex).pop()
    }
    if (targetTool) {
      scrollToTool(tools.indexOf(targetTool))
    }
  }

  function onToolClick(toolIndex: number) {
    window.setTimeout(() => scrollToTool(toolIndex), 401)
  }

  function scrollToTool(toolIndex: number) {
    document
      .querySelector('#tool_' + toolIndex)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
</script>

<div class="flex flex-col items-center">
  <ul
    class="flex flex-row gap-8 overflow-x-auto py-4 max-w-[100vw]"
    on:wheel|preventDefault={onScroll}
  >
    {#each tools as tool}
      <ToolCard
        title={tool.title}
        text={tool.text}
        image={tool.img}
        alt=""
        style="transform: translateX({$imgTranslate}px);"
        id="tool_{tools.indexOf(tool)}"
        on:expand={() => onToolClick(tools.indexOf(tool))}
      />
    {/each}
  </ul>
</div>
