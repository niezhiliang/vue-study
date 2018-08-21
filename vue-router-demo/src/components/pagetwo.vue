<template>
  <div>
    this is page two

    <span>
      {{ $route.params.id }}
    </span>
    <div></div>
    <router-link to="pageone">go pageone</router-link>
  </div>
</template>

<script>
    export default {
        name: "pagetwo",
      data() {
          return {

          }
      },
      watch: {
        '$route' (to, from) {
          // 对路由变化作出响应...
          console.log(to)
          console.log(from)
        }
      }
    }
</script>
