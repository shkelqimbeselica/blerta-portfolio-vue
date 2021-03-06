import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Styles
import "@/styles/_global.scss";

createApp(App).use(router).mount("#app");
