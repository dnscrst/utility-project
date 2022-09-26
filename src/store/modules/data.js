import axios from "axios";
import api from "@/store/api";

export const state = {
   quiz: {}
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
      } catch (error){
          console.log(error)
      }
  }
}

export const mutations = {
    SET_QUIZ(state, quiz) {
        state.quiz = quiz
    }
}