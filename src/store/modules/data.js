import axios from "axios";
import api from "@/store/api";

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
}

export const actions = {
    async get_quiz ({commit}, quiz) {
      try {
          const {data} = await axios.get(api.getQuiz, quiz)
          commit('SET_QUIZ', data)
      } catch(err){
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
          commit('SET_LIST', task)
      } catch (err) {
          console.log(err)
      }
    },
    async updateList({commit}, {newList}) {
        commit('SET_LIST', newList)
    }
}