import Vue from 'vue'
import VueRouter from "vue-router";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'
import secondComponent from './component/secondComponent.vue'
import firstComponent from './component/firstComponent.vue'

//开启debug模式
Vue.config.debug = true;
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/first',
      component: firstComponent
    },
    {
      path: '/second',
      component: secondComponent
    }
  ]
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
