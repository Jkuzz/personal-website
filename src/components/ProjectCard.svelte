<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import ConditionaWrapper from './ConditionalWrapper.svelte'

  export let index: number
  export let title: string
  export let text: string
  export let img: string
  export let alt: string
  export let tools: string[]
  export let githubUrl: string | undefined = undefined
  export let demoUrl: string | undefined = undefined

  let zigZagClass = index % 2 == 0 ? '-left-60' : '-right-60'
  let zigZagWrapperClass = index % 2 == 0 ? 'self-start' : 'self-end'

  const imgTranslate = tweened(0, { duration: 500, easing: cubicOut })

  function onMouseEnter() {
    let targetOffset = index % 2 == 0 ? 130 : -130
    imgTranslate.set(targetOffset)
  }

  function onMouseLeave() {
    imgTranslate.set(0)
  }
</script>

<li class={'flex flex-row relative ' + zigZagWrapperClass}>
  <ConditionaWrapper
    condition={!!demoUrl}
    href={demoUrl}
    target="_blank"
    class="cursor-pointer"
  >
    <img
      style="transform: translateX({$imgTranslate}px);"
      src={img}
      {alt}
      class="w-[90vw] md:w-[70vw] lg:w-[40vw] hover:shadow-lg rounded-md"
      on:mouseenter={onMouseEnter}
      on:mouseleave={onMouseLeave}
    />
  </ConditionaWrapper>

  <div
    class={'flex w-96 absolute bg-gray-200 text-black rounded-md -top-10 -bottom-10 ' + zigZagClass}
  >
    <div class="p-4 flex flex-col justify-between">
      <h3 class="text-center font-bold whitespace-nowrap">
        {title}
      </h3>
      <p class="text-sm">
        {@html text}
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
            href={githubUrl}
            class="w-6 m-1 hover:w-8 hover:m-0 transition-all"
          >
            <img
              src="Github.svg"
              alt="Source code"
            />
          </a>
        {/if}
        {#if demoUrl}
          <a
            target="_blank"
            href={demoUrl}
            class="w-6 m-1 hover:w-8 hover:m-0 transition-all"
          >
            <img
              src="icon_web.svg"
              alt="Live site"
            />
          </a>
        {/if}
      </div>
    </div>
  </div>
</li>
