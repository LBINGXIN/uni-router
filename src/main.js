import Vue from "vue";
import App from "./App";
import router from "./router";
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = "app";

Vue.use(router);

const app = new Vue({
  ...App,
});
app.$mount();
