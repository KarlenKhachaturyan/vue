<template>
  <div>
  </div>
</template>

<script>
import SquareComponent from '@/components/test/SquareComponent'

export default {
  props: {
    main_counter: {
      type: Number
    }
  },
  data() {
    return {
      main_counter: 2
    }
  },
  components:{
    SquareComponent
  }

};
</script>

<style scoped>
</style>
