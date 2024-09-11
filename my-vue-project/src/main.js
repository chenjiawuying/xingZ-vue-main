import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { createI18n } from 'vue-i18n';
import $ from 'jquery'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


// 定义测试用的语言内容
const messages = {
    en: {
      message: {
        hello: 'Hello World'
      }
    },
    zh: {
      message: {
        hello: '你好，世界'
      }
    }
  };

  // 创建 i18n 实例并配置语言
const i18n = createI18n({
    locale: 'en', // 默认语言
    fallbackLocale: 'en', // 回退语言
    messages, // 语言内容
  });
  
// import 'bootstrap/dist/js/bootstrap.min.js'
createApp(App).use(store).use(router).use(i18n).use(ElementPlus).mount('#app')