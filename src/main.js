import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// funtab插件
/* import FunTab from 'fun-tab'
import 'fun-tab/dist/index.css'use(FunTab) */
import "@/assets/css/common.css";
import "@/assets/css/iconfont.css";

createApp(App).use(store).use(router).mount("#app");
