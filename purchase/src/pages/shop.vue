<template>
  <div class="style1">
    <div v-for="(item, index) in shirt" :key="index" v-bind="item.clothesId" >
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
</template>

<script>
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
export default {
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
          clothesId: 2,
          img: img2,
        },
        {
          clothesTitle: "STORY T-Shirt",
          clothesId: 3,
          img: img3,
        },
      ],
    };
  },
};
</script>

<style>
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
</style>
