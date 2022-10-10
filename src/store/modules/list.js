import axios from "axios";
import api from "@/store/api";

export const state = {
    tasks:''
}
export const actions = {
    async addList({list}) {
        try {
            const {data} = await axios.post(api.toDoList, {list})
        } catch (error) {
            console.log(error)
        }
    },
    async getList({commit}) {
        try {
            const {data} = await axios.get(api.toDoList)
            commit('SET_LIST', data)
        } catch (err) {
            console.log(err)
        }
    },
}
export const mutations = {
    SET_LIST(state, tasks) {
        state.tasksList = tasks
        console.log(tasks)
    }
}