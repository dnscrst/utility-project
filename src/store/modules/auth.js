import api from "@/store/api";
import axios from 'axios';
import router from "@/router";

export const state = {
    user:{},
    isLogged: false,
    errors: '',
}
export const actions = {
    async login ({commit}, user) {
        try {
            const {data} = await axios.post(api.login, user);
            commit('SET_USER', data);
            commit('SET_LOG', 'true')
            await router.push('/')

        }catch(error){
            console.log(error)
           commit('SET_SHOWERROR', error.response.data.message.reason)
        }   
    },

    async check_login({commit}, next){
        if( state.user.name) {
            next()
            return
        }
        try{
            const {data} = await axios.get(api.checkLogin)
            commit('SET_USER', data)
            next()
        }catch (err) {
            console.log(err)
        }
    },

    async logout({commit}) {
        try{
            await axios.delete(api.logout);
            commit('SET_LOG', 'false')
            location.reload()
            await router.push('/')

        }catch(err){
            console.log(err)
        }
    }
    }
export const mutations = {
    SET_USER(state, user) {
        state.user = user
    },

    SET_LOG(state, isLogged) {
        state.isLogged = isLogged
    },

    SET_SHOWERROR(state, error) {
        state.errors = error
        console.log(state.errors);
    }


}
