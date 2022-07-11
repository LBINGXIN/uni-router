# uni-router

一个比较完整的实现 uni-app 路由拦截的示例，具有良好的扩展性、实用性、可维护性

# 安装依赖

## npm

```shell
npm install
```

## yarn

```shell
yarn
```

# 运行

```shell
npm run serve
```

# 备注

登录时，会使用 uni.setStorageSync("token", "uni_token123")；缓存一个测试的 token 到 localStorage，需要测试路由拦截时，可以手动删除 token。
