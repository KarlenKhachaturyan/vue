<template>
  <div>
    <nav-component/>
    <div :style="canvas" @click="change">
      <div :style="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: {
        width: "100vw",
        height: "100vh",
        background: "grey",
      },
      circle: {
        position: "absolute",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "green",
        top: "50%",
        left: "50%",
      },
    };
  },
  methods: {
    change(e) {
      this.circle.top = `${e.clientY - 50}px`;
      this.circle.left = `${e.clientX - 50}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
