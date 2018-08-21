<template>
  <div>
    this is main components
    <router-view></router-view>
    <button @click="change('pageone')">
      切换到pageone
    </button>
    <button @click="change('pagetwo')">
      切换到pagetwo
    </button>
  </div>
</template>

<script>
    export default {
      methods: {
        change: function (link) {
          console.log(link)
          this.$router.push('/main/'+link)
        }
      }
    }
</script>

<style scoped>

</style>
