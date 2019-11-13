<template>
  <footer class="footer">
    <div id="nav">
      <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><a v-bind:href ="''+url+''" target="blank">Contact</a></li>
      <li>View the code on <a href="https://github.com/dukesnuz/david-petringa-vuejs" target="blank">Github</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
     url: "http://www.dukesnuz.com/contact/dukesnuz/david/petringa/",
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: aliceblue;
  padding-bottom: 250px;
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
.footer a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>