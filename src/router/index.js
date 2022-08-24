import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '../views/CalculatorView'
import MathQuizView from '../views/MathQuizView'
import ToDoListView from '../views/ToDoListView'
import LoginView from '../views/LoginView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalculatorView
  },
  {
    path: '/mathquiz',
    name: 'mathquiz',
    component: MathQuizView
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: ToDoListView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
