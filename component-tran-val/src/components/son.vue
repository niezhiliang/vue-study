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
        name: "son",
        data() {
          return {
            h: this.height
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
