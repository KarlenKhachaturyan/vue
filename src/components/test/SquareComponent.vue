<template>
  <div>
    <nav-component/>
       <h2>Square Component</h2>
    <p>The Counter is : {{counter}}</p>
    <button @click="inc">Add Square</button>
    <button @click="dec">Delete Square</button>
    <div :style="mainSquare">
      <div v-for="(n, index) in counter" :key="index">
        <div :style="squareClass" :id="index">
          <slot>{{ n }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:['main_counter'],
  data() {
    return {
      counter: this.main_counter || 2,
      mainSquare: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "green",
        minHeight: "200px",
        minWidth: "300px",  
        overflow: "hidden",
      },
      squareClass: {
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        textAlign: "center",
        fontSize: "30px",
        margin: "30px 5px 30px 30px ",
      },
    };
  },
  methods: {
    inc() {
      return this.counter++;
    },
    dec() {
      return this.counter--;
    },
  },
};
</script>

<style scoped>
</style>
