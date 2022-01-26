<template>
  <form class="form_product" @submit.prevent>
    <MyInput :option="options.name" v-model="productModel.title" />
    <MyInput :option="options.desc" v-model="productModel.description" />
    <MyInput :option="options.link" v-model="productModel.url" />
    <MyInput :option="options.cost" v-model="productModel.price" />

    <my-button @click="addHandler" :disabled="btnDisabled"
      >Добавить товар</my-button
    >
  </form>
</template>

<script>
import { computed, ref } from "vue";
import MyButton from "./ui/MyButton.vue";
import MyInput from "./ui/MyInput.vue";
import { inputPar } from "../use/inputAttr";
export default {
  components: {
    MyInput,
    MyButton,
  },
  setup(_, { emit }) {
    const productModel = ref({
      title: "",
      description: "",
      url: "",
      price: "",
    });
    const addHandler = () => {
      const oneProduct = { ...productModel.value, id: Date.now() };
      emit("add", oneProduct);
      for (const key in productModel.value) {
        productModel.value[key] = "";
      }
    };
    const btnDisabled = computed(() => {
      const { title, url, price } = productModel.value;
      return !title | !url | !price;
    });
    return {
      btnDisabled,
      addHandler,
      ...inputPar(),
      productModel,
    };
  },
};
</script>

<style>
.form_product {
  margin-top: 16px;
  max-width: 332px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
}
</style>
