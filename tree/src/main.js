import Vue from 'vue'
//引入vue
import App from './App'
//引入app根组件
import "./styles/reset.less"
//引入全局的配置样式 
import router from './router'
//引入路由
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//全局引入mint-ui

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,//目的是为了能够在实例的子类中可以使用this.$router能够获取到路由的实例
  components: { App },
  template: '<App/>'
})
