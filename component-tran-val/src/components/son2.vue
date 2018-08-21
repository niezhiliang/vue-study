<template>
  <div>
    <h5>{{ val }}</h5>
    <button @click="add">+</button>
    {{ h }}
    <button @click="reduce">-</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        h: this.height
      }
    },
    watch: {
      height(val) {
        this.h = val;//新增result的watch，监听变更并同步到myResult上
      }
    },
    props:['height','val'],
    methods: {
      add: function () {
        this.h +=1
      },
      reduce: function () {
        this.h-=1
      }
    }
  }
</script>

<style scoped>

</style>
