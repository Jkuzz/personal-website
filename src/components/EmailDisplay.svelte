<script lang="ts">
  import emailIcon from '../assets/icon-email.svg'
  let emailText = 'javascript:void(0)'
  let anchor: HTMLAnchorElement

  window.setTimeout(() => {
    anchor.classList.remove('opacity-20', 'cursor-wait')
    anchor.attributes.removeNamedItem('aria-disabled')
    emailText = 'mailto:' + atob('aG9uemEua3VAZ21haWwuY29t')
  }, 5000)
</script>

<a
  href={emailText}
  class="origin-bottom-right transition-all flex items-center hover:-translate-y-2', 'hover:rotate-6 justify-center opacity-20 cursor-wait"
  bind:this={anchor}
  aria-disabled="true"
>
  <img
    class="w-16"
    src={emailIcon}
    alt="Email icon"
  />
</a>
