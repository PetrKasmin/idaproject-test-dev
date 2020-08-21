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

            <transition name="fade" mode="out-in">
                <NuxtChild :vehicle="vehicle" />
            </transition>

            <div class="action-rent">
                <div class="action-rent-price">
                    Rent for <span class="color-violet">{{ vehicle.rent }} $/h</span>
                </div>
                <div class="action-rent-btn cursor">
                    Rent now
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import { mapMutation, mapGetters } from 'vuex';

export default {
    validate({ params }) {
        return `${params.vehicle}`.length === 24;
    },
    layout: 'show',
    computed: {
        ...mapGetters({
            vehicle: 'getVehicle',
            error: 'error'
        })
    },
    mounted () {
        this.getVehicle();
        if (this.error) {
            throw new Error({ statusCode: 500, message: 'Server error' });
        }
    },
    methods: {
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
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
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

.action-rent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    margin-top: 2rem;
    background: #f3f4f7;
    border-radius: 16px;


    .action-rent-price {
        font-weight: bold;
        font-size: 20px;
        line-height: 140%;
    }
    .action-rent-btn {
        background: #4959FF;
        border-radius: 12px;
        padding: 0 2rem;
        height: 44px;
        line-height: 42px;
        color: #fff;
        cursor: pointer;
    }
}
</style>
