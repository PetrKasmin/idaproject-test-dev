<template>
  <div class="wrapper">
    <Navigation />
    <main class="container">
      <NavAction />
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navbar/Navigation'
import NavAction from '@/components/Actionbar/NavAction'


export default {
  components: { 
    Navigation, 
    NavAction
  },
  computed: {
  }
}
</script>
