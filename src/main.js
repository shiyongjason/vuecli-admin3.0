import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/assets/css/main.css'
import '@/assets/css/scrollbar.css'
import '@/assets/css/reset.css'
//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


//全局变量
import APP_INFO from '../config/version'
Vue.prototype.APP_INFO = APP_INFO


Vue.config.productionTip = false


import DropdownPlugin from './m/dropdown'
import NavbarPlugin from './m/navbar'
import ContextMenuPlugin from './m/context-menu'
import MButton from '@/m/button'
import MSwitch from '@/m/switch'
import MAlert from '@/m/alert'
import MCheckbox from '@/m/checkbox'
import MInput from '@/m/input'
import MLoading from '@/m/loading'
import Mkeyboard from '@/m/keyboard'
import MNumberkeyboard from '@/m/number-keyboard'
import MBox from '@/m/box'
import MBackTop from '@/m/back-top'
import MLoader from '@/m/loader'
import MContainer from '@/m/container'


Vue.use(ElementUI)

Vue.use(DropdownPlugin)
Vue.use(NavbarPlugin)
Vue.use(ContextMenuPlugin)
Vue.use(MButton)
Vue.use(MSwitch)
Vue.use(MAlert)
Vue.use(MCheckbox)
Vue.use(MInput)
Vue.use(MLoading)
Vue.use(Mkeyboard)
Vue.use(MNumberkeyboard)
Vue.use(MBox)
Vue.use(MBackTop)
Vue.use(MLoader)
Vue.use(MContainer)


var whiteList = ['demo', 'login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  var token = sessionStorage.getItem('token')
  if (!token && whiteList.indexOf(to.name) === -1) {
    this && this.$message.warning('未授权，请登陆授权后继续')
    NProgress.done()
    return next({name: 'login'})
  }
  return next()
})

router.afterEach(transition => {
  setTimeout(() => {
    NProgress.done()
  })
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
