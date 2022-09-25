import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import config from "./config/default";

import "vue-toastification/dist/index.css";

import "./assets/main.css";

const app = createApp(App);

app.use(Toast, config.toastConfig);

//app.use(VueToastify);
app.use(router);

app.mount("#app");
