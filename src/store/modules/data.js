import axios from "axios";
import api from "@/store/api";
import {indexOf} from "core-js/internals/array-includes";

export const state = {
    quiz: {},
    result: [
        {
            id: null,
            correctAnswer: Boolean
        }
    ],
    tasks: []
}

export const mutations = {
    SET_QUIZ(state, quiz) {
        state.quiz = quiz
    },
    SET_RESULT(state, result) {
        state.result = result
    },
    SET_LIST(state, tasks) {
        state.tasks = tasks
    },
    UPDATE_TASK(state, {task, id}) {
        const index = state.tasks.findIndex(obj => obj.id === id)
        const obj = state.tasks[index]
        state.tasks[index].task = task

    }
}

export const actions = {
    async get_quiz ({commit}, quiz) {
      try {
          const {data} = await axios.get(api.getQuiz, quiz)
          commit('SET_QUIZ', data)
      }catch(err){
          console.log(err)
      }
  },
    async verify_ans ({commit}, {answers}) {
      try{
          const {data} = await axios.post(api.getQuiz, {answers})
          commit('SET_RESULT', data)
      } catch (error){
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
    async addTask({commit}, {task}) {
      try {
          await axios.post(api.toDoList, {...task})
          console.log(state.tasks)
          commit('UPDATE_LIST', task)
      } catch (err) {
          console.log(err)
      }
    },
}
export const getters = {
    rightTasks (state) {
        const filtered = state.tasks.filter( (ojb, index) => index >= 121 )
        return filtered
    }
}