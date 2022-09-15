import api from "@/store/api";
import axios from "axios";
import router from "@/router";

export const state = {
    user:{}
}
export const actions = {
    async login ({commit}, user) {
        try {
            const {data} = await axios.post(api.login, user);
            commit('SET_USER', data);
            await router.push('/')
        }catch(error){
            console.log(error)
        }
    }
}
export const mutations = {
    SET_USER(state, user) {
        state.user = user
    }
}
