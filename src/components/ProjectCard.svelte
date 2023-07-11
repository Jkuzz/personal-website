<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import ConditionaWrapper from './ConditionalWrapper.svelte'
  import gitLogo from '../assets/Github-logo.svg'
  import webIcon from '../assets/icon_web.svg'

  export let index: number
  export let title: string
  export let text: string
  export let img: string
  export let alt: string
  export let tools: string[]
  export let githubUrl: string | undefined = undefined
  export let demoUrl: string | undefined = undefined

  let zigZagClass = index % 2 == 0 ? '-left-10' : '-right-10'
  let zigZagWrapperClass = index % 2 == 0 ? 'self-start' : 'self-end'
  const defaultImageOffset = index % 2 == 0 ? 200 : -200

  const imgTranslate = tweened(defaultImageOffset, { duration: 500, easing: cubicOut })

  function onMouseEnter() {
    let targetOffset = index % 2 == 0 ? 300 : -300
    imgTranslate.set(targetOffset)
  }

  function onMouseLeave() {
    imgTranslate.set(defaultImageOffset)
  }
</script>

<li class={'flex flex-col relative ' + zigZagWrapperClass}>
  <ConditionaWrapper
    condition={!!demoUrl}
    href={demoUrl}
    target="_blank"
  >
    <img
      style="transform: translateX({$imgTranslate}px);"
      src={img}
      {alt}
      class="hidden md:block w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] hover:shadow-lg rounded-md"
      on:mouseenter={onMouseEnter}
      on:mouseleave={onMouseLeave}
    />
  </ConditionaWrapper>

  <ConditionaWrapper
    condition={!!demoUrl}
    href={demoUrl}
    target="_blank"
  >
    <img
      src={img}
      {alt}
      class="md:hidden rounded-t-md"
    />
  </ConditionaWrapper>
  <div
    class={'flex md:w-96 md:min-h-[20rem] md:absolute bg-gray-200 text-black rounded-b-md md:rounded-md md:-top-10 md:-bottom-10 ' +
      zigZagClass}
  >
    <div class="p-4 flex flex-col gap-y-4 justify-between">
      <h3 class="text-center font-bold text-xl whitespace-nowrap">
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
            class="w-6 m-1 hover:-translate-y-1 hover:rotate-6 origin-bottom-right transition-all"
          >
            <img
              src={gitLogo}
              alt="Source code"
            />
          </a>
        {/if}
        {#if demoUrl}
          <a
            target="_blank"
            href={demoUrl}
            class="w-6 m-1 hover:-translate-y-1 hover:rotate-6 origin-bottom-right transition-all"
          >
            <img
              src={webIcon}
              alt="Live site"
            />
          </a>
        {/if}
      </div>
    </div>
  </div>
</li>
