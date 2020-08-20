<template>
  <nav id="action-nav">
    <FilterRent />
    <AddItemRent />
  </nav>
</template>

<script>
import FilterRent from '@/components/Actionbar/FilterRent'
import AddItemRent from '@/components/Actionbar/AddItemRent'

export default {
  components: { FilterRent, AddItemRent },

}
</script>

<style lang="scss">
#action-nav {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2rem;
}
</style>
