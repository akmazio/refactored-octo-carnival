<template>
<div id="nav"> <Navbar />

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Services">Services</router-link> |
    <router-link to="/Team">Team</router-link> -->

</div>
  <router-view/>

  <HomeGreeting />
</template>
<script>
import HomeGreeting from './components/HomeGreeting.vue';
import Navbar from './components/ui/Navbar.vue';
export default {
  components: {
    HomeGreeting,
    Navbar
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>