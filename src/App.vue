<template>
  <div class="app" v-if="!isProductLoading">
    <div class="add_product_container">
      <p class="add_product_container_title">Добавление товара</p>
      <ProductForm @add="addProduct" />
    </div>

    <div class="product_container">
      <MySelect v-model="selectedSort" :options="sortOptions" />

      <ListProduct v-if="prod" :products="prod" @remove="removeProduct" />
    </div>
  </div>
  <MySpiner v-else />
  <MyAlert v-if="isAddProduct" v-model="isAddProduct" :time="1000" />
</template>

<script>
import { onMounted, ref, watch } from "vue";
import ListProduct from "./components/ListProduct.vue";
import MySelect from "./components/ui/MySelect.vue";
import ProductForm from "./components/ProductForm.vue";
import MySpiner from "./components/ui/MySpiner.vue";
import MyAlert from "./components/ui/MyAlert.vue";
import { product } from "./data";
import { selectPar } from "./use/inputAttr";

const listProduct = product;
if (!localStorage.getItem("prod")) {
  localStorage.setItem("prod", JSON.stringify(listProduct));
}

export default {
  name: "App",
  components: {
    ListProduct,
    ProductForm,
    MySelect,
    MyAlert,
    MySpiner,
  },
  setup() {
    const prod = ref([]);
    const isProductLoading = ref(false);
    const selectedSort = ref("");
    const isAddProduct = ref(false);
    onMounted(() => {
      isProductLoading.value = true;
      setTimeout(() => {
        prod.value = JSON.parse(localStorage.getItem("prod"));
        isProductLoading.value = false;
      }, 2000);
    });
    const removeProduct = ({ id }) => {
      prod.value = [...prod.value.filter((p) => p.id !== id)];
      localStorage.setItem("prod", JSON.stringify(prod.value));
    };
    const addProduct = (product) => {
      prod.value.push(product);
      localStorage.setItem("prod", JSON.stringify(prod.value));
      isAddProduct.value = true;
    };
    watch(selectedSort, (value) => {
      switch (value) {
        case "title": {
          prod.value.sort((a, b) => a[value]?.localeCompare(b[value]));
          break;
        }
        case "priceMax": {
          console.log("max");
          prod.value.sort((a, b) => Number(b.price) - Number(a.price));
          break;
        }
        case "priceMin": {
          console.log("min");
          prod.value.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        }
      }
    });

    return {
      isProductLoading,
      prod,
      addProduct,
      removeProduct,
      selectedSort,
      isAddProduct,
      ...selectPar(),
    };
  },
};
</script>

<style>
.app {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 32px 32px 32px;
  background: rgba(255, 254, 251, 0.8);
  display: flex;
  flex-flow: wrap;
  max-width: 1440px;
  position: relative;
  justify-content: space-around;
}
.add_product_container {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.add_product_container_title {
  font-weight: 600;
  margin: 0;
  font-size: 28px;
  line-height: 35px;
}
.product_container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1044px;
  margin-top: 31px;
}
.product_sort {
  width: 121px;
  height: 31px;
}
.preloader {
}
</style>
