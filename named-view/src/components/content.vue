<template>
    <div>
      <table>
        <tr v-for="x in 10">
          <td>哈哈哈{{ x }}</td>
          <td>哈哈哈{{ x }}</td>
          <td>哈哈哈{{ x }}</td>
          <td>哈哈哈{{ x }}</td>
          <td>哈哈哈{{ x }}</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "content"
    }
</script>

<style scoped>
  table {
    margin-top: 50px;
    width: 100%;
  }
  div{

  }
</style>
