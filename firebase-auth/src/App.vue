<template>
  <div>
    <main>
<!--      <router-view>-->
        <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 200px">
          <Register />
          <Login />
        </div>
<!--      </router-view>-->
    </main>
  </div>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

export default {
  name: 'App',
  components: {
    Register,
    Login,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
