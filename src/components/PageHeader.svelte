<script lang="ts">
  import HeaderLink from './HeaderLink.svelte'
</script>

<div class="fixed top-0 z-50 flex h-10 w-screen flex-row items-stretch">
  <div class="w-[62vw] bg-violet-600" />
  <nav class="flex w-[38vw] px-4 flex-row items-center justify-end gap-4 bg-amber-300">
    <HeaderLink>Hello</HeaderLink>
    <HeaderLink>Tools</HeaderLink>
    <HeaderLink>Projects</HeaderLink>
    <HeaderLink>Contact</HeaderLink>
  </nav>
</div>
