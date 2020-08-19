<template>
  <div class="wrapper">
    <Navigation />
    <main class="container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navbar/Navigation'

export default {
  components: { Navigation }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  max-width: 1920px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.container {
  background: #F3F4F7;
  border-radius: 48px;
  padding: 1rem;
}
</style>
