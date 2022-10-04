import axios from "axios";
import api from "@/store/api";

export const state = {
    quiz: {},
    result: [
        {
            id: null,
            correctAnswer: Boolean
        }
    ]
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
  }
}
export const mutations = {
    SET_QUIZ(state, quiz) {
        state.quiz = quiz
    },
    SET_RESULT(state, result) {
        state.result = result
    }
}