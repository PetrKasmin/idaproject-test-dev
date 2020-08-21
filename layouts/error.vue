<template>
  <div class="error">
      <div class="error-wrap">     
          <h1 class="error-title" v-if="error.statusCode === 404">Page not found</h1>
          <h1 class="error-title" v-else>An error occurred</h1>
          <p class="error-desc">Please refresh the page</p>
          <a class="error-btn cursor" href="/">Reload page</a>
      </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navbar/Navigation'

export default {
  components: { Navigation },
  props: ['error'],
  layout: 'single',
}
</script>

<style lang="scss" scoped>
.error {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .error-wrap {
      text-align: center;
    }

    .error-title {
      color: #012345;
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
    }

    .error-desc {
      padding: 1rem 0;
      font-weight: 300;
      font-size: 14px;
      line-height: 146%;
      color: #677B8F;
    }

    .error-btn {
      background: #4959FF;
      border-radius: 12px;
      height: 48px;
      line-height: 46px;
      padding: 0 2rem;
      color: #fff;
      display: block;
      margin: 1rem;
      text-decoration: none;
    }
}
</style>