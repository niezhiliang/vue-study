#### vuex 简单使用

```javascript

  npm install vuex

  在src目录下面建一个store的文件夹

  在store文件夹中再建一个store.js

  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  然后在该页面编辑 state mutations getters actions 等

```

vuex 就相当于一个全局的map集合  就是为了给页面组件之间值共享   页面一旦刷新  vuex中的值就会恢复初始状态

- state

 通俗的讲相当于数据库，所有的数据都保存在state里面

- mutations

 这个相当于数据库的RBAC 用来改变state里面的值

- getters

 在初始化state里面的数据后,触发的方法 只在第一次获取数据的时候触发

- actions

 异步的改变state里面的值 实际上他提交的还是mutations

- modual

 模块化编程，随着业务的逐渐复杂。 需要将store进行条理性的归类，这个时候就可以将各个store写成一个模块，然后在moduals中加载一下

 不过在调用的时候调用store里面的值就必须用模块名来调用 比如下面的这个

    //声明一个store的模块
    const modualA = {
      state,mutations,getters,actions

    }

    export default new Vuex.Store({
      modules: {a:modualA}
    })

     <h3>{{$store.state.a.count}}</h3>
