<template>
    <div class="menu">
      <ul>
        <li v-for="x in 10">
          <router-link to="/">菜单{{ x }}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped>

  .menu {
    height: 600px;
  }
</style>
