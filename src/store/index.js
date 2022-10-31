import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../store/modules/auth'
import * as data from './modules/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tools: [
      {
        url: require('../assets/BaseIcons/calculator.png'),
        title: 'Calculator',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
      },
      {
        url: require('../assets/BaseIcons/checklist.png'),
        title: 'To do list',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
      },
      {
        url: require('../assets/BaseIcons/answer.png'),
        title: 'Math quiz',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
      }
    ],
    welcome: {
      title: 'Welcome Message',
      body: 'Amet luctus venenatis lectus magna fringilla urna porttitor ' +
          'rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget' +
          ' est lorem ipsum dolor sit amet consectetur. Mauris pellentesque ' +
          'pulvinar pellentesque habitant morbi tristique senectus. Nec ' +
          'feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. P' +
          'orta non pulvinar neque laoreet suspendisse interdum consectetur libero.',
    },
    presentation: [
      {
        url: require('../assets/denisa.jpg'),
        name: 'Denisa Cirstea',
        role: 'frontend developer',
        description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
        linkedin: 'https://www.linkedin.com/in/denisa-cirstea-978a081b6/'
      },
      {
        url: require('../assets/iulian.jpg'),
        name: 'Iulian Negrila',
        role: 'frontend developer',
        description: 'Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum',
        linkedin: 'https://www.linkedin.com/in/iulian-marinel-negrila/'
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    data,
  }
})
