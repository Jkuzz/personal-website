<script lang="ts">
  import emailIcon from '../assets/icon-email.svg'
  let emailText = 'wait-5-seconds-to-avoid-spambots'

  window.setTimeout(() => {
    emailText = atob('aG9uemEua3VAZ21haWwuY29t')
  }, 5000)
</script>

<a
  target="_blank"
  href={'mailto:' + emailText}
  class="origin-bottom-right transition-all hover:-translate-y-2 hover:rotate-6 flex items-center justify-center"
>
  <img
    class="w-16"
    src={emailIcon}
    alt="Email icon"
  />
</a>
