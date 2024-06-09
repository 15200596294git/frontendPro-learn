import { createRouter, createWebHashHistory } from 'vue-router'
import C from '../components/Card.vue'

const modules = import.meta.glob('../components/*.vue')
console.log("🚀 ~ modules:", modules)


export const routes = Object.entries(modules).map(([path, fn])=> {
    console.log("🚀 ~ roues ~ path:", path)
    return {
        path: '/' + path.match(/(\w+)\.vue$/)[1],
        component: fn
        // component: C,
    }
})
console.log("🚀 ~ routes ~ routes:", routes)


export default createRouter({
    history: createWebHashHistory(),
    routes,
})

 

