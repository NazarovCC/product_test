<template>
  <div class="list_prod" v-if="products.length !== 0">
    <transition-group name="list-product">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @remove="$emit('remove', product)"
      />
    </transition-group>
  </div>
  <h2 v-else>Нема Товаров</h2>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  emits: ["remove"],
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.list_prod {
  max-width: 1044px;
  flex-flow: wrap;
  display: flex;
}
.list-product-enter-active,
.list-product-leave-active {
  transition: all 0.5s ease;
}

.list-product-enter-from,
.list-product-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.list-product-move {
  transition: transform 0.5s ease;
}
</style>
