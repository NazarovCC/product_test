<template>
  <div class="product" @mouseover="del = true" @mouseleave="del = false">
    <div class="icon_delete" @click="removeProduct" v-if="del">
      <img
        class="img_delete"
        src="https://img.icons8.com/ios-filled/16/ffffff/trash.png"
      />
    </div>
    <div
      class="product_img"
      :style="{ backgroundImage: `url('${product.url}')` }"
    ></div>

    <div class="product_content">
      <h2 class="product_content_title">{{ product.title }}</h2>
      <div class="product_content_description">{{ product.description }}</div>
      <p class="product_content_price">{{ product.price }} руб.</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    product: {
      type: Object,
    },
  },
  emits: ["remove"],
  setup(props, { emit }) {
    const del = ref(false);
    const removeProduct = () => {
      emit("remove", props.product.value);
    };

    return {
      del,
      removeProduct,
    };
  },
};
</script>

<style>
.product {
  position: relative;
  width: 332px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  height: 423px;
  margin-left: 16px;
  margin-top: 16px;
}
.product:hover {
  transform: scale(1.02);
  cursor: pointer;
}
.icon_delete {
  width: 32px;
  height: 32px;
  background: rgb(255, 132, 132);
  position: absolute;
  left: 312px;
  text-align: center;
  z-index: 20;
  top: -8px;
  border-radius: 10px;
}
.icon_delete:hover {
  box-shadow: 0px 4px 10px rgba(255, 132, 132, 0.5);
}
.icon_delete .img_delete {
  padding: 7px;
}
.product_img {
  height: 200px;
  position: relative;
  border-radius: 4px 4px 0px 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.product_content {
  margin: 16px 16px 24px 16px;
  max-height: 223px;
}
.product_content_title {
  margin: 0px;
}
.product_content_description {
  box-sizing: content-box;
  height: 80px;
  size: 16px;
  margin-top: 16px;
  margin-bottom: 32px;
  overflow: auto;
}
.product_content_price {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
}
</style>
