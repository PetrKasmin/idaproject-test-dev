import { getVehicles } from '../api/request.js';

export const state = () => ({
    vehicles: [],
    vehicleFiltered: [],
    vehicle: null,
})

export const getters = {
    getVehicles: (state) => state.vehicleFiltered,
    getVehicle: (state) => state.vehicle,
    getType: (state) => state.vehicles.map((el) => el.type).reduce((acc, item) => !acc.includes(item) ? [...acc, item]: acc, [])
}

export const mutations = {
    setVehicles (state, payload) {
        state.vehicles = payload;
    },
    setVehicle (state, payload) {
        const [vehicle] = state.vehicles.filter((el) => el.id === payload);
        state.vehicle = vehicle;
    },
    setVehiclesFiltered (state, payload) {
      state.vehicleFiltered = payload;
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
    },
    vehicleFiltered ({ state, commit }, payload) {
      const vehicles = payload !== 'all' ? state.vehicles.filter((el) => el.type === payload) : state.vehicles;
      commit('setVehiclesFiltered', vehicles);
    }
}
