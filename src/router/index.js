/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: maxin
 * @Date: 2022-03-29 16:46:57
 * @LastEditors: maxin
 * @LastEditTime: 2022-03-29 16:51:33
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import home from '@/views/home/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;