import { getVehicles } from '../api/request.js';

export const state = () => ({
    vehicles: [],
    vehicle: null
})

export const getters = {
    getVehicles: (state) => state.vehicles,
    getVehicle: (state) => state.vehicle
}

export const mutations = {
    setVehicles (state, payload) {
        state.vehicles = payload;
    },
    setVehicle (state, payload) {
        const [vehicle] = state.vehicles.filter((el) => el.id === payload);
        state.vehicle = vehicle;
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        try {
            const vehicles = await getVehicles();
            commit('setVehicles', vehicles);
        } catch (e) {
            console.log(e);
        }
    }
}
