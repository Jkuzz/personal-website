<script lang="ts">
  import ToolCard from '../components/ToolCard.svelte'
  import { tools } from '../components/DisplayData'
</script>

<div class="flex flex-col justify-center items-center">
  <ul class="flex flex-row gap-8 overflow-x-auto max-w-screen">
    {#each tools as tool}
      <ToolCard
        title={tool.title}
        text={tool.text}
        image={tool.img}
        alt=""
      />
    {/each}
  </ul>
</div>
