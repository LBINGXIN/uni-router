import route from "./route";
// 配置白名单
const whiteList = ["/pages/login/index"];

const handleOverwirteRoute = () => {
  // 重写switchTab、navigateBack
  const methodToPatch = ["switchTab", "navigateBack"];
  methodToPatch.map((type) => {
    // 通过遍历的方式分别取出，uni.switchTab、uni.navigateBack
    // 并且对相应的方法做重写
    const original = uni[type];
    uni[type] = function (options = {}) {
      const { url: path } = options;
      if (!whiteList.includes(path) && !uni.getStorageSync("token")) {
        // 判断是否存在token，不存在重定向到登录页
        uni.$e.route("/pages/login/index");
      } else {
        return original.call(this, options);
      }
    };
  });
};

const install = function (Vue, options) {
  uni.$e = { route };
  Vue.prototype.route = route;
  // 重写uni方法
  handleOverwirteRoute();
  // 路由拦截器
  uni.$e.routeIntercept = (routeConfig, resolve) => {
    const path = routeConfig.url.split("?")[0];
    if (!whiteList.includes(path) && !uni.getStorageSync("token")) {
      uni.$e.route("/pages/login/index");
      return;
    }
    resolve(true);
  };
};
export default {
  install,
};
