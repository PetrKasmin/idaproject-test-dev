<template>
    <ul class="vehicles">
        <li v-for="item in vehicles" :key="item.id" class="vehicles-wrap">
            <!-- <nuxt-link class="vehicles-item" :to="{ name : 'vehicle', params: { id: item.id }}"> -->
            <nuxt-link class="vehicles-item" :to="`${item.id}`">

                <img class="vehicles-item-preview" :src="item.preview" />
                <div>            
                    <h4 class="vehicles-item-title">{{ item.name }}</h4>
                    <p class="vehicles-item-descr">{{ item.description }}</p>
                    <span class="vehicles-item-rent">{{ item.rent }} $/h</span>
                    <!-- {{ item }} -->
                </div>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'vehicles',
    computed: {
		...mapGetters({
			vehicles: 'getVehicles',
        }),
    }
}
</script>

<style lang="scss">
.vehicles {
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 100%;
}

.vehicles-wrap {
    width: 33.3333333%;
    display: flex;
}

.vehicles-item {
    margin: 0 1rem 2rem;
    width: 100%;
    display: flex;
    background: #FCFCFC;
    border-radius: 32px;
    padding: 1.5rem;
}

.vehicles-item-preview {
    width: 80px;
    height: 80px;
    border-radius: 24px;
    margin-right: 1rem;
}

.vehicles-item-descr {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 148%;
    padding: 0.6rem 0;
    color: #677B8F;
}

.vehicles-item-rent {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 148%;
    color: #F84AB3;
}
</style>
