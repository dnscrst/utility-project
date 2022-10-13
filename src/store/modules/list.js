import axios from "axios";
import api from "@/store/api";

export const state = {
    // tasks:''
}
export const actions = {
    async addList({list}) {
        try {
            const {data} = await axios.post(api.toDoList, {list})
        } catch (error) {
            console.log(error)
        }
    },
}
export const mutations = {

}