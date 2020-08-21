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
  middleware: 'error',
  components: { Navigation }
}
</script>

<style lang="scss" scoped>
main {
  height: 88%;
}
</style>