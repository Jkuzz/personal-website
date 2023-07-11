<script lang="ts">
  import ProjectCard from '../components/ProjectCard.svelte'
  import { projects } from '../components/DisplayData'
</script>

<ul
  class="flex flex-col items-center gap-16 px-8 py-10 md:gap-44 md:px-20 lg:px-40 xl:gap-16 xl:px-[8vw]"
>
  {#each projects as project}
    <ProjectCard
      index={projects.indexOf(project)}
      title={project.title}
      text={project.text}
      img={project.img}
      tools={project.tools}
      demoUrl={project.demoUrl}
      githubUrl={project.githubUrl}
      alt={project.alt}
    />
  {/each}
</ul>
