# component-tran-val
父组件与子组件传值: 

    index.vue  父组件
    
    son.vue 子组件1 // 普通的父子传值
    
    <son :val="com1" :height="num" ></son>
    父组件直接在子组件引用上面声明属性 在子组件通过`props`接收 props:['height','val']
    
    son2.vue 子组件2  //父组件改变  子组件也改变
    
    <son2 :val="com2" :height="num2"></son2>
     父组件直接在子组件引用上面声明属性 在子组件通过`props`接收 props:['height','val']并通过watch来申明一个函数来
     监听父组件的值
      height(val) {
        this.h = val;
      }
    
    son3.vue 子组件3  //双向绑定  父组件改变  子组件也改变    子组件改变也能改变父组件
    
    <son3 :val="com3" :height="num3" @on-val-change="changeVal"></son3>
    父组件直接在子组件引用上面声明属性和一个监听事件, 在子组件通过`props`接收 props:['height','val']并通过watch来申明
    两个个函数来监听父组件的值,
    和子组件拿到的值 ，向父组件提交一个事件
    
    父组件：
     changeVal: function (val) {
          console.log(val)
          this.num3 = val
        }
    
    子组件：
      props: ['height','val'],
      watch:{
        h(val) {
          this.$emit("on-val-change",val)
        },
        height(val) {
          this.h = val
        }
        
还有一种组件之间传值的方法，那就是借助vuex
