<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  margin-top: 8px;
  width: 100%;
  height: 36px;
  background: #7bae73;
  padding: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  border: none;
  color: #ffffff;
}
.btn:hover {
  background: #6daf62;
  cursor: pointer;
}
.btn:disabled {
  background: #eeeeee;
  border-radius: 10px;
  font-size: 12px;
  color: #b4b4b4;
}
</style>
