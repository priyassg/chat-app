import VueRouter from "vue-router";
import LoginPage from '../src/components/LoginPage.vue';
import ChatPage from '../src/components/ChatPage.vue';

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage,
    },
    {
        path: '/chat',
        name: 'ChatPage',
        component: ChatPage,
        props: fetchUserName,
        beforeEnter: (to, from , next) => {
            if(to.params.username) next();
            else next('/');
        }
    }
]

function fetchUserName(route){
    return { username: route.params.username}
}

export const router = new VueRouter({
    routes,
})