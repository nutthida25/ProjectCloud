import {createRouter, createWebHistory} from "vue-router"
import Homeview from "../views/HomeView.vue"
import News from "../views/News.vue"
import adminScreen from "../views/adminScreen.vue"
import documentScreen from "../views/documentScreen.vue"
import sendDocumentScreen from "../views/sendDocumentScreen.vue"
import signin from "../views/signIn.vue"
import signup from "../views/Signup.vue"
import profile from "../views/profile.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Homeview
        },
        {
            path: "/news",
            name: "news",
            component: News
        },
        {
            path: "/admin",
            name: "adminScreen",
            component: adminScreen
        },
        {
            path: "/document",
            name: "document",
            component: documentScreen
        },
        {
            path: "/send",
            name: "sendDocumentScreen",
            component: sendDocumentScreen
        },
        {
            path: "/signin",
            name: "signin",
            component: signin
        },
        {
            path: "/signup",
            name: "signup",
            component: signup
        },
        {
            path: "/profile",
            name: "profile",
            component: profile
        }


        // {
        //     path: "/news",
        //     name: "news",
        //     component: News
        // },
        // {
        //     path: "/test",
        //     name: "modal",
        //     component: Modal
        // },
        // {
        //     path: "/admin",
        //     name: "admin",
        //     component: Admin
        // }
    ]
})

export default router