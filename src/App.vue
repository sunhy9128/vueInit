<template>
  <div id="app">
    <img src="./assets/logo.png">
    <firstComponent></firstComponent>
    <blogComponent></blogComponent>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/first">click to first page</router-link>
      </li>
      <li>
        <router-link to="/second">click to second page</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  import firstComponent from './component/firstComponent.vue'
  import secondComponent from './component/secondComponent.vue'
  import blogComponent from './component/blogComponent'

  // import Vue from 'vue'
  // import VueRouter from "vue-router";
  // import VueResource from 'vue-resource'
  // import Element from 'element-ui'
  // import 'element-ui/lib/theme-chalk/index.css'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'hello'
      }
    },
    components: {firstComponent, secondComponent, blogComponent}
  };

  //开启debug模式
  // Vue.config.debug = true;
  // Vue.use(Element, {size: 'small'});
  // Vue.use(VueRouter);
  // Vue.use(VueResource);
  //
  // // 创建一个路由器实例
  // // 并且配置路由规则
  // const router = new VueRouter({
  //   mode: 'history',
  //   base: __dirname,
  //   routes: [
  //     {
  //       path: '/first',
  //       component: firstComponent
  //     },
  //     {
  //       path: '/second',
  //       component: blogComponent
  //     }
  //   ]
  // });
  //
  // // 现在我们可以启动应用了！
  // // 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
  // const app = new Vue({
  //   router: router,
  //   render: h => h(App)
  // }).$mount('#app');
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
