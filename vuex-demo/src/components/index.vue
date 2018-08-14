<template>
    <div>
       <h2>{{ msg }}</h2>
      <hr/>
      <!--<h3>{{ $store.state.count }}</h3>-->
      <!-- store使用模块后必须使用模块名称a -->
      <h3>{{$store.state.a.count}}</h3>
      <div>
        <button @click="addAction">+</button>
        <button @click="$store.commit('reduce')">-</button>
        <button @click="$store.commit('add10',10)">+10</button>
      </div>
    </div>
</template>

<script>
  import store from '../store/store'
  import { mapState,mapMutations,mapActions } from 'vuex';

  export default {
    data() {
      return {
        msg: 'Hello World'
      }
    },
    store,
    computed: {
      ...mapState(["count"]),
      count() {
        //return this.$store.state.count;
        //每次count 的值发生变化的时候，都会进行加100的操作
        return this.$store.getters.count
      }
    },
    methods: {
      ...mapMutations([
        'add','reduce'
      ]),
      ...mapActions(['addAction','reduceAction'])
    }
  }
</script>
