<template>
  <div class="content">
    <VehicleList />
  </div>
  
</template>

<script>
import VehicleList from '@/components/Vehicles/VehicleList';
import { mapGetters } from 'vuex';

export default {
  components: { VehicleList },
  data: () => ({

  }),
  computed: {
    ...mapGetters({ error: 'error'})
  },
  mounted () {    
    if (this.error) {
      throw new Error({ statusCode: 500, message: 'Server error' })
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
