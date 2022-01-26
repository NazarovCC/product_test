<template>
  <div :class="['alert', { alertDown: !modelValue }]">
    <p>Товар добавлен</p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
    },
    time: Number,
  },
  setup(props, { emit }) {
    setTimeout(() => {
      emit("update:modelValue", false);
    }, props.time);
  },
};
</script>

<style scoped>
.alert {
  width: 170px;
  height: 30px;
  background-color: rgba(46, 139, 87, 0.4);
  position: absolute;
  top: 0px;
  left: 25%;
  z-index: 20;
  padding: 10px;
  text-align: center;
  color: white;
  border-radius: 15px;
  transition: top 1s ease-in;
}
.alert p {
  margin: 0;
}
.alert-down {
  transform: translateY(-35);
}
</style>
