<template>

  <div class="Navbar">
      <Navbar />
  </div>
  <div>
  <h1>
    <HomeGreeting msg="ARCUS TWO"/>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGreeting from '../components/HomeGreeting.vue';
import Navbar from '../components/ui/Navbar.vue';


export default {
  name: 'Home',
  components: {
    HomeGreeting,
    Navbar

  }
}
</script>

<style scoped>
</style>