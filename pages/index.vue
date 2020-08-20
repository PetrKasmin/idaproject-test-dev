<template>
  <div class="content">
      
    <VehicleList />

  </div>
</template>

<script>
import VehicleList from '@/components/Vehicles/VehicleList';
// import { mapGetters } from 'vuex';


export default {
  components: { VehicleList },
  data: () => ({
    tets: 'test'
  }),
  computed: {
		// ...mapGetters({
		// 	vehicles: 'getVehicles',
    // }),
  },
  mounted () {
    this.test();
  },
  methods: {
    test () {      

    }
  }
}
</script>

<style lang="scss">

</style>
