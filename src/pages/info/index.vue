<template>
  <view class="page">
    <view class="page-header">
      <image
        class="page-header-avatar"
        src="https://p3-passport.byteacctimg.com/img/user-avatar/9877ec1ec5a57404e764bc9502f6e850~300x300.image"
      ></image>
      <text class="page-header-title">个人信息</text>
    </view>

    <view class="page-list">
      <u-cell-group>
        <u-cell icon="setting-fill" title="名称" isLink value="卡卡"></u-cell>
        <u-cell icon="integral-fill" title="名称" isLink value="卡卡"></u-cell>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
export default {};
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
