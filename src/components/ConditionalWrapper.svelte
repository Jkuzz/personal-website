<script>
  export let condition = false
  export let tag = 'a'
</script>

{#if condition && tag}
  <svelte:element
    this={tag}
    {...$$restProps}><slot /></svelte:element
  >
{:else}
  <slot />
{/if}
