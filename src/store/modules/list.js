import axios from "axios";
import api from "@/store/api";

export const state = {
  tasksList:[]
}
export const actions = {
    async addList ({list}) {
        try {
            const {data} = await axios.post(api.toDoList,{list})
        }catch (error) {
            console.log(error)
        }
    },
    async getList ({commit}, tasksList) {
        try {
            const {data} = await axios.get(api.toDoList, tasksList)
            commit('SET_LIST', data)
        }catch (err) {
            console.log(err)
        }
    }
}
export const mutations = {
    SET_LIST(state, tasksList) {
        state.tasksList = tasksList
    }
}