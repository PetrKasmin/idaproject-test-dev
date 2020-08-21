<template>
  <div class="wrapper">
    <Navigation />
    <main>
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