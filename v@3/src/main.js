import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueToastify from "vue-toastify";

import "./assets/main.css";

const app = createApp(App);


//app.use(VueToastify);
app.use(router);

app.mount("#app");
