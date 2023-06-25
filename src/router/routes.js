import GameBoardView from "../components/GameBoardView";
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/', component: GameBoardView },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: routes,
});


export default router;