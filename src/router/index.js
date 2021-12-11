import {createRouter, createWebHashHistory} from 'vue-router';
import home from '../views/home.vue';
import empty from '../components/frame/empty.vue';
import {Home as iconHome, ViewList as iconList, Info as iconInfo} from '@icon-park/vue-next';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                title: '首页',
                icon: iconHome,
                menu: true
            }
        },
        {
            path: '/list',
            name: 'list',
            component: empty,
            meta: {
                title: '列表',
                icon: iconList,
                menu: true
            },
            children: [
                {
                    path: '/list/normal',
                    name: 'list-normal',
                    component: () => import('../views/list-normal.vue'),
                    meta: {
                        title: '普通列表',
                        menu: true
                    }
                },
                {
                    path: '/list/table',
                    name: 'list-table',
                    component: () => import('../views/list-table.vue'),
                    meta: {
                        title: '表格',
                        menu: true
                    }
                },
                {
                    path: '/list/image',
                    name: 'list-image',
                    component: () => import('../views/list-image.vue'),
                    meta: {
                        title: '图片',
                        menu: true
                    }
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/about.vue'),
            meta: {
                title: '关于',
                menu: true,
                icon: iconInfo
            }
        }
    ]
});
export default router;