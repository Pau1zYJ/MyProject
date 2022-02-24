import {createRouter,createWebHashHistory} from "vue-router"
//import main from '@/components/main'
import respect from '@/components/respect'
import Calculator from '@/components/Calculator'
import Results from '@/components/Results'



const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component: respect
        },
        {
            path:'/new-life-calculator',
            component: Calculator
        },
        {
            path:'/results',
            component: Results
        }
        // {
        //     path:'/main',
        //     name: 'main',
        //     component: main
        // },


    ]
});

export default router;