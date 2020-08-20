<template>
  <div class="rent">
    Rent
    <span class="rent-box">
      <select v-model="vehicleType" class="rent-box-select">
        <option selected value="all">all vehicle</option>
        <option v-for="(type, i) in types" :key="i">
          {{ type }}
        </option>
      </select>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    vehicleType: 'all'
  }),
  computed: {
    ...mapGetters({
      types: 'getType'
    })
  },
  watch: {
    vehicleType(val) {
      this.vehicleFiltered(val);
    }
  },
  methods: {
    vehicleFiltered (type) {
      this.$store.dispatch('vehicleFiltered', type);
    }
  },
  created () {
    this.vehicleFiltered('all');
  }
}
</script>

<style lang="scss">
.rent {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 90%;
  color: #012345;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;

  .rent-title {
    color: #4959FF;
  }

  .rent-box {
    position: relative;

    .rent-box-select {
      line-height: 90%;
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      width: auto;
      margin: 0 0.8rem;
      border: none;
      background: transparent;
      color: #4959FF;

      background: transparent;

      outline: 0;
      appearance: none !important;

      background-position: right 0 top 60%;
      padding-right: 30px;

      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg class='rent-box-arrow' width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 8L0 1.99965L2.00094 0L6 4.00071L9.99906 0L12 1.99965L6 8Z' fill='%234959FF'/%3E%3C/svg%3E");
    }

    .rent-box-arrow {
      position: absolute;
      right: 0;
      top: 50%;
    }
  }


}
</style>
