import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppHeaderDark from "./layout/AppHeaderDark";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/components/ImmunoComponents//Login.vue";
import Register from "./views/components/ImmunoComponents/Register.vue";
import EmailSignUp from "./views/components/ImmunoComponents/EmailSignUp.vue";
import Profile from "./views/Profile.vue";
import Patients from "./views/components/ImmunoComponents/Patients.vue";
import Problems from "./views/components/ImmunoComponents/Problems.vue";
import Solutions from "./views/components/ImmunoComponents/Solutions.vue";
import About from "./views/components/ImmunoComponents/About.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/emailsignup",
      name: "emailsignup",
      components: {
        header: AppHeader,
        default: EmailSignUp,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/patients",
      name: "patients",
      components: {
        header: AppHeader,
        default: Patients,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeaderDark,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/problems",
      name: "problems",
      components: {
        header: AppHeaderDark,
        default: Problems,
        footer: AppFooter
      }
    },
    {
      path: "/solutions",
      name: "solutions",
      components: {
        header: AppHeaderDark,
        default: Solutions,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
