<template>
  <div>
    <a-layout>
      <a-layout-header>
        <div class="logo">
          <img src="/src/assets/clothes.png" />
        </div>
        <a-menu
          mode="horizontal"
          :style="{ lineHeight: '90px', float: 'right', width: '260px' }"
        >
          <a-menu-item key="shop">
            <SkinOutlined :style="{ fontSize: '14px' }" />
            <router-link to="/Shirt">SHOP</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <a-badge :count="99">
              <ShoppingCartOutlined :style="{ fontSize: '14px' }" />
              CART</a-badge
            >
          </a-menu-item>

          <a-menu-item key="3">PROFILE</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px; background: #fff">
        <div class="style1">
          <div
            v-for="(item, index) in shirt"
            :key="index"
            v-bind="item.clothesId"
          >
            <a-card hoverable style="width: 300px">
              <template #cover>
                <img alt="example" :src="item.img" />
              </template>
              <a-card-meta
                :title="item.clothesTitle"
                description="This is the description"
              >
              </a-card-meta>
              <div class="text-right">
                <a-button @click="handleAdd">Add</a-button>
              </div>
            </a-card>
          </div>
        </div>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        Eve Design ©2023 Created by Eve
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import { ShoppingCartOutlined, SkinOutlined } from "@ant-design/icons-vue";
import img1 from "../assets/img-1.jpg";
export default {
  components: {
    ShoppingCartOutlined,
    SkinOutlined,
  },
  data() {
    return {
      shirt: [
        {
          clothesTitle: "STORY T-Shirt",
          clothesId: 1,
          img: img1,
        },
        {
          clothesTitle: "STORY T-Shirt",
          clothesId: 1,
          img: img1,
        },
        {
          clothesTitle: "STORY T-Shirt",
          clothesId: 1,
          img: img1,
        },
      ],
    };
  },
  created() {
    console.log("shirt", this.shirt);
  },
  methods: {
    handleClick(v) {
      console.log("data", this.shirt, v);
    },
    handleAdd() {
      console.log("data");
    },
    clikMenu() {
     
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .style1 {
    display: flex;
    flex-direction: column;
  }
}
.style1 {
  display: flex;
  justify-content: space-around;
}
.logo {
  float: left;
}
/* .ant-layout .ant-layout-header .ant-menu {
  float: right;
} */
.ant-layout .ant-layout-header {
  max-width: 1820px;
  height: 90px;
  color: rgba(0, 0, 0, 0.88);
  line-height: 64px;
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
