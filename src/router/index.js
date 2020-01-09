import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/auth';
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login';
import SignUp from '@/views/SignUp';
import Notifications from '@/views/Notifications';
import TripDetails from '@/views/TripDetails';
import NewTrip from '@/views/NewTrip';

Vue.use(VueRouter)

const router = new VueRouter(
  {
    routes: [
      {
        path: '*',
        redirect: '/login'
      },
      {
        path: '/',
        redirect: '/login'
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: Notifications,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/trip/details',
        name: 'Trip Details',
        component: TripDetails,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/trip/new',
        name: 'New Trip',
        component: NewTrip,
        meta: {
          requiresAuth: true
        }
      },


    ]
  }
)

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
