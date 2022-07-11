<template>
  <view class="page">
    <view class="page-logo">
      <u-avatar :src="src" size="120"></u-avatar>
    </view>
    <view class="page-form">
      <u-form :model="form" ref="uForm" :label-width="80">
        <u-form-item label="用户名">
          <u-input v-model="form.userName"></u-input>
        </u-form-item>
        <u-gap height="20"></u-gap>
        <u-form-item label="密码">
          <u-input v-model="form.password"></u-input>
        </u-form-item>
        <u-gap height="20"></u-gap>
        <u-form-item>
          <u-button type="primary" @click="handleLogin">登录</u-button>
        </u-form-item>
      </u-form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      src: "https://cdn.uviewui.com/uview/album/1.jpg",
      form: {
        userName: "admin",
        password: "1",
      },
    };
  },
  methods: {
    // 登录
    async handleLogin() {
      uni.setStorageSync("token", "uni_token123");
      uni.$e.route({
        type: "tab",
        url: "/pages/index/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  background: #fff;
  min-height: 100vh;
  .page-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500rpx;
  }
  .page-form {
    padding: 0 32rpx;
  }
}
</style>
