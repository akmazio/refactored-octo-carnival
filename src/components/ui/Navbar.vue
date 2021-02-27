<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><img src="'/assets/arcus-logo-v2.png/' + fileName" alt="">ARCUS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item nav">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item nav">
          <router-link to="/About"> About</router-link>
        </li>
        <li>  <router-link to="/Services">Services</router-link></li>
        <li>  <router-link to="/Team">Team</router-link></li>
      </ul>
      <form class="d-flex">

        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    date: new Date(),
  },
  methods: {
     data() {// method to togglr navabar on smaller screen / burger menu
      let date = new Date();
      return {
        date
      }
    }
  }
}
</script>

<style>

ul {
  list-style: none;
  padding: 10px;
}
ul>li {
  padding: 0px 10px;
  color: blue;
  display: inline-block;
}

</style>