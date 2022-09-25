import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '../views/CalculatorView'
import MathQuizView from '../views/MathQuizView'
import ToDoListView from '../views/ToDoListView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import store from "@/store";

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
    component: MathQuizView,
    meta: {
      auth:true
    }
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: ToDoListView,
    meta: {
      auth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async ({name, meta}, from, next) => {
  if (name !== "login" && meta?.auth) {
    await store.dispatch('check_login', next)
  }
  else {
    next()
  }
})

export default router
