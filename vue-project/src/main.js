import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
// use various tools to handle some kinda data structures
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

const app = createApp(App);

app.use(router, VueLodash, { name: 'custom' , lodash: lodash });
app.use(VueAxios, axios) //追記

app.mount("#app");
