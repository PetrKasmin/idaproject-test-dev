<template>
  <div class="brand">
    <nuxt-link class="brand-logo" to="/">
      <svg v-if="them === 'light'" class="logo cursor" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" />
        <circle cx="17" cy="22" r="8" fill="#012345"/>
        <circle cx="35" cy="7" r="4" fill="#4959FF"/>
        <path d="M16 45C19.0204 45 22.0112 44.4051 24.8017 43.2492C27.5922 42.0934 30.1277 40.3992 32.2635 38.2635C34.3992 36.1277 36.0934 33.5922 37.2492 30.8017C38.4051 28.0112 39 25.0204 39 22H30.72C30.72 23.9331 30.3393 25.8472 29.5995 27.6331C28.8598 29.419 27.7755 31.0417 26.4086 32.4086C25.0417 33.7755 23.419 34.8598 21.6331 35.5995C19.8472 36.3393 17.9331 36.72 16 36.72L16 45Z" fill="#4959FF"/>
      </svg>
      <svg v-if="them === 'dark'" class="logo cursor" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="#012345"/>
        <circle cx="17" cy="22" r="8" fill="#FCFCFC"/>
        <circle cx="35" cy="7" r="4" fill="#4959FF"/>
        <path d="M16 45C19.0204 45 22.0112 44.4051 24.8017 43.2492C27.5922 42.0934 30.1277 40.3992 32.2635 38.2635C34.3992 36.1277 36.0934 33.5922 37.2492 30.8017C38.4051 28.0112 39 25.0204 39 22H30.72C30.72 23.9331 30.3393 25.8472 29.5995 27.6331C28.8598 29.419 27.7755 31.0417 26.4086 32.4086C25.0417 33.7755 23.419 34.8598 21.6331 35.5995C19.8472 36.3393 17.9331 36.72 16 36.72L16 45Z" fill="#4959FF"/>
      </svg>
    </nuxt-link>
    <nuxt-link class="brand-title" to="/">Pepelane</nuxt-link>
    <span class="brand-subtitle"> World's first affordable airsharing </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      them: 'getThem'
    })
  }
}
</script>

<style lang="scss">
.brand {
  display: flex;
  align-items: center;
  height: 100%;

  .brand-title {
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
  }

  .brand-subtitle {
    padding: 0 0 0 3rem;
    color: #677B8F;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
  }

  .brand-logo {
    .logo {

    }
  }
}
// .logo {
//   animation: 1s appear;
//   margin: auto;
// }

// @keyframes appear {
//   0% {
//     opacity: 0;
//   }
// }
</style>
