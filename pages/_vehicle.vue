<template>

    <div v-if="vehicle" class="vehicle">
        <img class="vehicles-image" :src="vehicle.image" />
        <div class="vehicles-details">
            <h1 class="vehicles-details-title">{{ vehicle.name }}</h1>

            <nav>
                <ul class="info-nav">
                    <li>
                        <NuxtLink :to="`/${$route.params.vehicle}`" exact>
                            Spec
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/${$route.params.vehicle}/team`">
                            Team
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/${$route.params.vehicle}/rent-terms`">
                            Rent Terms
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <transition name="fade" mode="out-in"> -->
                <NuxtChild :vehicle="vehicle" />
            </transition>

        </div>

    </div>

</template>

<script>
import { mapMutation, mapGetters } from 'vuex';

export default {
    layout: 'show',
    computed: {
        ...mapGetters({
            vehicle: 'getVehicle'
        })
    },
    mounted () {
        // this.$store.dispatch('setVehicle', this.$route.params.id);
        // setVehicle(this.$route.params.id)
        this.getVehicle()
    },
    methods: {
		// ...mapMutation({
		// 	setVehicle: 'setVehicle'
        // }),

        getVehicle () {
            this.$store.commit('setVehicle', this.$route.params.vehicle);
        }
    }
}
</script>

<style lang="scss">
.vehicle {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 100%;
}

.vehicles-image {
    width: 50%;
    max-width: 712px;
    border-radius: 24px;
}
.vehicles-details {
    width: 50%;
    padding-left: 3rem;
}
.vehicles-details-title {
    padding: 2rem 0 1rem 0;
}


.info-nav {
    padding: 1rem 0 2rem;
    display: flex;

    li {
        display: flex;
        margin: 0 1.5rem 0 0;

        a {
            font-weight: bold;
            font-size: 16px;
            line-height: 14px;
            color: #677B8F;
            text-decoration: none;

            &.nuxt-link-active {
                color: #4959FF;
            }
        }

        
    }
}
</style>