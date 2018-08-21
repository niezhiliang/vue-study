<template>
  <div>
    <h4>这是父组件</h4>
    <img src="../assets/logo.png">
    <div style="text-align: center">
      <span>
        {{ com1 }}:
        <button @click="add">+</button>{{ num }} <button @click="reduce">-</button>
      </span>
      <span>
        {{ com2 }}:
         <button @click="add1">+</button>{{ num2 }} <button @click="reduce1">-</button>
      </span>
      <span>
        {{ com3 }}:
         <button @click="add2">+</button>{{ num3 }} <button @click="reduce2">-</button>
      </span>
    </div>
    <div style="display: inline">
        <son :val="com1" :height="num" ></son>
        <son2 :val="com2" :height="num2"></son2>
        <son3 :val="com3" :height="num3" @on-val-change="changeVal"></son3>
    </div>
  </div>
</template>

<script>
  import son from './son'
  import son2 from  './son2'
  import son3 from  './son3'

    export default {
        name: "index",
      data() {
        return {
          com1: '子组件一号',
          num: 5,
          com2: '子组件二号',
          num2: 10,
          com3: '子组件三号',
          num3: 15
          }

      },
      computed:{

      },
      methods: {
        add: function () {
          this.num+=1
        },
        reduce: function () {
          this.num-=1
        },
        add1: function () {
          this.num2+=1
        },
        reduce1: function () {
          this.num2-=1
        },
        add2: function () {
          this.num3+=1
        },
        reduce2: function () {
          this.num3-=1
        },
        changeVal: function (val) {
          console.log(val)
          this.num3 = val
        }
      },
      components: { son, son2, son3 }
    }

</script>

<style scoped>

</style>
