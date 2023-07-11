<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicInOut } from 'svelte/easing'

  const cubeRotate = tweened(0, { duration: 700, easing: cubicInOut })

  const cubeFaceOptions = [
    'Software engineer',
    'Web developer',
    'Problem solver',
    'Learner',
    'Tech nerd',
    'Data enjoyer',
  ]

  /**
   * The faces of the cube. The back face gets replaced on every spin.
   */
  const cubeFaces = ['Software engineer', 'Web developer', '', '']

  window.setInterval(() => {
    const backFaceIndex = ($cubeRotate * 4 + 2) % 4
    const unusedFaces = cubeFaceOptions.filter((face) => !cubeFaces.includes(face))
    cubeFaces[backFaceIndex] = unusedFaces[Math.floor(Math.random() * unusedFaces.length)]
    cubeRotate.set(($cubeRotate + 0.25) % 2)
  }, 3000)
</script>

<div
  class="cube h-10 w-56 text-xl text-center"
  style="transform: rotate3d(1, 0, 0, {$cubeRotate}turn);"
>
  <div class="front-face bg-violet-600 h-10 flex items-center justify-center">
    <span>{cubeFaces[0]}</span>
  </div>
  <div class="bottom-face bg-violet-600 h-10 flex items-center justify-center">
    <span>{cubeFaces[1]}</span>
  </div>
  <div class="back-face bg-violet-600 h-10 flex items-center justify-center">
    <span>{cubeFaces[2]}</span>
  </div>
  <div class="top-face bg-violet-600 h-10 flex items-center justify-center">
    <span>{cubeFaces[3]}</span>
  </div>
</div>

<style>
  /* Container box to set the sides relative to */
  .cube {
    -webkit-transition: -webkit-transform 0.33s;
    transition: transform 0.33s; /* Animate the transform properties */

    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .cube > div {
    -webkit-box-shadow: 0 0 8px 0 rgba(203, 191, 207, 0.1) inset;
    box-shadow: 0 0 8px 0 rgba(203, 191, 207, 0.1) inset;
  }

  /* Position the faces */
  .front-face {
    -webkit-transform: translateZ(20px);
    transform: translateZ(20px);
  }

  .bottom-face {
    -webkit-transform: rotateX(-90deg) translateZ(-20px);
    transform: rotateX(-90deg) translateZ(-20px);
  }

  .back-face {
    -webkit-transform: rotateX(180deg) translateZ(20px) translateY(80px);
    transform: rotateX(180deg) translateZ(20px) translateY(80px);
  }

  .top-face {
    -webkit-transform: rotateX(-270deg) translateZ(140px);
    transform: rotateX(-270deg) translateZ(140px);
  }
</style>
