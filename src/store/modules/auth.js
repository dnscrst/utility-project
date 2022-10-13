import api from "@/store/api";
import axios from 'axios';
import router from "@/router";

export const state = {
    user:{},
    isLogged: false,
    error: {},
    msg: '',
    tasks: ''
}
export const actions = {
    async login ({commit}, user) {
        try {
            const {data} = await axios.post(api.login, user);
            commit('SET_USER', data);
            commit('SET_LOG', 'true');
            await router.push('/')

        }catch(err) {
            console.log(err)
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
            commit('SET_ERROR', err)
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
    },
    async register({commit}, {account}) {
        try{
            const {data} = await axios.post(api.register, {...account})
            commit('SET_MSG', data.msg)
        }catch (error){
            console.log(error)
        }
    },
    async getList({commit}) {
        try {
            const {data} = await axios.get(api.toDoList)
            commit('SET_LIST', data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    },

}
export const mutations = {
    SET_USER(state, user) {
        state.user = user
    },
    SET_LOG(state, isLogged) {
        state.isLogged = isLogged
    },
    SET_ERROR(state, error) {
        state.error = error
    },
    SET_MSG(state, msg) {
        state.msg = msg
    },
    SET_LIST(state, tasks) {
        state.tasksList = tasks
        console.log(tasks)
    }
}
