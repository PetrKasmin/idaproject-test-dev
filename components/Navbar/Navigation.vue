<template>
  <nav id="main-nav">
    <div class="nav-wrapper">
      <Logo />
      <div class="user-panel">
        <StyleMod />
        <UserPanel />
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Navbar/Logo'
import StyleMod from '@/components/Navbar/StyleMod'
import UserPanel from '@/components/Navbar/UserPanel'


export default {
  components: { Logo, StyleMod, UserPanel },

}
</script>

<style lang="scss">
#main-nav {
  padding-bottom: 1rem;
}
.nav-wrapper {
  display: flex;
  justify-content: space-between;
}
.user-panel {
  display: flex;
  justify-content: space-between;
}
</style>
