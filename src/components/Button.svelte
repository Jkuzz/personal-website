<script lang="ts">
  export let url: string | undefined = undefined
  export let action: (() => void) | undefined = undefined
</script>

{#if url}
  <a href={url} target="_blank"><slot /></a>
{/if}
