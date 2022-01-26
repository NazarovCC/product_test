<template>
  <select :value="modelValue" id="sort" @change="changeOption">
    <option disabled class="select_option" value="">По умолчанию</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup(_, { emit }) {
    const changeOption = ({ target }) => {
      console.dir(target);
      emit("update:modelValue", target.value);
    };
    return {
      changeOption,
    };
  },
};
</script>

<style>
#sort {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  width: 153px;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 11px;
  padding-right: 10px;
  height: 36px;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
}
#sort:focus-visible {
  border: none;
}
</style>
