<template>
  <view class="page">
    <view class="page-header">
      <image
        class="page-header-avatar"
        src="https://p3-passport.byteacctimg.com/img/user-avatar/9877ec1ec5a57404e764bc9502f6e850~300x300.image"
      ></image>
      <text class="page-header-title">有趣的人</text>
    </view>

    <view class="page-list">
      <u-cell-group>
        <u-cell
          icon="setting-fill"
          title="设置"
          isLink
          @click="handleToRouter('/pages/setting/index')"
        ></u-cell>
        <u-cell
          icon="integral-fill"
          title="个人信息"
          isLink
          @click="handleToRouter('/pages/info/index')"
        ></u-cell>
      </u-cell-group>
      <u-button text="退出登录" @click="handlelogout"></u-button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    // 退出登录
    handlelogout() {
      uni.removeStorageSync("token");
      uni.$e.route("/pages/login/index");
    },
    // 路由跳转
    handleToRouter(path) {
      uni.$e.route(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f5f5f5;
  .page-header {
    width: 100%;
    height: 500rpx;
    display: flex;
    align-items: center;
    background: #409eff;
    padding: 0 50rpx;
    .page-header-avatar {
      width: 200rpx;
      height: 200rpx;
      border-radius: 50%;
    }
    .page-header-title {
      font-size: 60rpx;
      color: #fff;
      margin-left: 32rpx;
    }
  }
  .page-list {
    margin-top: 60rpx;
    background: #fff;
  }
}
</style>
