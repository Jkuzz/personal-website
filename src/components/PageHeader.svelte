<script lang="ts">
  import HeaderLink from './HeaderLink.svelte'

  const sectionLinks = [
    { id: 'section-hello', header: 'Hello' },
    { id: 'section-tools', header: 'Tools' },
    { id: 'section-projects', header: 'Projects' },
    { id: 'section-contact', header: 'Contact' },
  ]

  let activeSectionId = 'section-hello'
  let y = 0
  let innerHeight: number
  let offsetHeight = document.body.offsetHeight

  $: {
    const isEndOfPage = y + innerHeight - offsetHeight > -200
    if (isEndOfPage) {
      activeSectionId = sectionLinks[sectionLinks.length - 1].id
    } else {
      for (const section of sectionLinks) {
        const offsetTop = document.getElementById(section.id)?.offsetTop
        const isVisible = offsetTop != undefined && y >= offsetTop - 150
        if (isVisible) {
          activeSectionId = section.id
        }
      }
    }
  }
</script>

<svelte:window
  bind:scrollY={y}
  bind:innerHeight
/>

<div class="fixed top-0 z-50 flex h-10 w-screen flex-row items-stretch">
  <div class="w-0 md:w-[62vw] bg-violet-600" />
  <nav
    class="flex w-full md:w-[38vw] px-4 flex-row items-center justify-end gap-4 bg-violet-600 md:bg-amber-300"
  >
    {#each sectionLinks as section}
      <HeaderLink
        targetId={section.id}
        isActive={section.id === activeSectionId}
      >
        {section.header}
      </HeaderLink>
    {/each}
  </nav>
</div>
