/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: maxin
 * @Date: 2022-03-29 16:34:25
 * @LastEditors: maxin
 * @LastEditTime: 2022-03-29 16:54:31
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index';

import store from './store/index';

createApp(App).use(router).use(store).mount('#app');
