<template>
  <a-layout>
    <a-layout-header>
      <img src="/src/assets/clothes.png" class="w-72" />
      <a-menu mode="horizontal" :style="{ width: '260px' }">
        <a-menu-item key="shop"
          ><router-link to="/">
            <SkinOutlined class="text-base mb-10" />
            SHOP</router-link
          >
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/cart">
            <a-badge :count="99" :offset="[8, -7]">
              <ShoppingCartOutlined :style="{ fontSize: '14px' }" />
              CART
            </a-badge>
          </router-link>
        </a-menu-item>

        <a-menu-item key="3">PROFILE</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px; background: #fff">
      <router-view />
    </a-layout-content>

    <a-layout-footer style="text-align: center">
      Eve Design ©2023 Created by Eve
    </a-layout-footer>
  </a-layout>
  <!-- <div> -->
  <!-- <a-menu
          id="dddddd"
          style="width: 256px"
          mode="vertical"
          @click="handleClick"
        >
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <template #icon>
              <BarsOutlined />
            </template>
            <template #title>รายการสินค้า</template>
            <a-menu-item key="1" @click="titleClick">
              <template #icon> <SkinOutlined /> </template>เสื้อ</a-menu-item
            >
          </a-sub-menu>
        </a-menu> -->
  <!-- <PageHeader/> -->

  <!-- </div> -->
</template>

<script>
// import PageHeader from './components/PageHeader.vue'
import { ShoppingCartOutlined, SkinOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    ShoppingCartOutlined,
    SkinOutlined,
  },
};
</script>

<style>
.logo {
  float: left;
}
/* .ant-layout .ant-layout-header .ant-menu {
  float: right;
} */
.ant-layout .ant-layout-header {
  display: flex;
  justify-content: space-between;
  max-width: 1820px;
  color: rgba(0, 0, 0, 0.88);
  background: white;
  margin-block-end: 10px;
}
.ant-layout .ant-layout-footer {
  padding: 24px 50px;
  height: 90px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  background: #f5f5f5;
}
</style>
