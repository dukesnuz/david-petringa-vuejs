<template>
  <footer class="footer">
    <div id="nav">
      <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><a href="##">Contact</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
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