import { getVehicles } from '../api/request.js';

export const state = () => ({
    vehicles: [],
    vehicleFiltered: [],
    vehicle: null,
    them: null,
    error: null
})

export const getters = {
    getVehicles: (state) => state.vehicleFiltered,
    getVehicle: (state) => state.vehicle,
    getType: (state) => state.vehicles.map((el) => el.type).reduce((acc, item) => !acc.includes(item) ? [...acc, item]: acc, []),
    getThem: (state) => state.them,
    error: (state) => state.error
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
    },
    setThem (state, payload) {
        state.them = payload;
    },
    setError (state, payload) {
        state.error = payload;
    },
    addVehicle (state, payload) {
        state.vehicleFiltered.push(payload);
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        try {
            const vehicles = await getVehicles();
            commit('setError', false);
            commit('setVehicles', vehicles);
        } catch (e) {
            console.log(e);
            commit('setError', true);
        }
    },
    vehicleFiltered ({ state, commit }, payload) {
      const vehicles = payload !== 'all' ? state.vehicles.filter((el) => el.type === payload) : state.vehicles;
      commit('setVehiclesFiltered', vehicles);
    }
}
