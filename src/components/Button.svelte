<script lang="ts">
  export let url: string | undefined = undefined
  export let action: (() => void) | undefined = undefined

  const tag = action ? 'button' : 'a'
</script>

<svelte:element
  this={tag}
  href={tag === 'a' ? url : undefined}
  target={tag === 'a' ? '_blank' : undefined}
>
  <slot />
</svelte:element>
