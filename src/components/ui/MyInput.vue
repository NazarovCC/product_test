<template>
  <div class="input_class">
    <div class="flex_title">
      <div class="title">{{ option.title }}</div>
      <div class="star" v-if="!option.big"></div>
    </div>

    <input
      :value="modelValue"
      :type="option.type"
      :placeholder="option.placeholder"
      :class="{ big_input: option.big }"
      @input="inputHandler"
      @keydown="formatCost"
    />
    <p class="label_input" v-if="labelHide && !option.big">
      {{ option.label }}
    </p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    option: {
      type: Object,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const labelHide = ref(true);

    const formatCost = (event) => {
      const key = event.key;
      console.log(key);
      if (props.option.mask) {
        if (!/^\d+/g.test(key) && key !== "Backspace") {
          event.preventDefault();
        }
      }
    };

    const inputHandler = (event) => {
      emit("update:modelValue", event.target.value);
      if (event.target.value !== "") {
        labelHide.value = false;
      } else {
        labelHide.value = true;
      }
    };
    return {
      labelHide,
      inputHandler,
      formatCost,
    };
  },
};
</script>

<style scoped>
.star {
  z-index: 100;
  width: 4px;
  height: 4px;
  background: #ff8484;
  border-radius: 4px;
}
.input_class {
  margin: 0 0 12px 0;
  width: 284px;
}
input {
  box-sizing: border-box;
  text-align: start;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-left: 16px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 11px;
  border: none;
  color: rgba(180, 180, 180, 0.7);
  font-size: 12px;
  line-height: 15px;
}
input:focus {
  border: 1px solid coral;
}
.big_input {
  padding-top: 10px;
  padding-bottom: 83px;
}
.flex_title {
  display: flex;
}
.label_input {
  margin: 4px 0 0 0;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #ff8484;
}
.title {
  margin: 0;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;
  position: relative;
}
</style>
