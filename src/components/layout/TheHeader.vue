<template>
  <header class="header">
    <h1>David Petringa</h1>
     <h3>A Simple website developed with Vue.js</h3>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/blog/Vuejs-Upload-To-Digital-Ocean-With-Github">Tutorial</router-link>|
      <a href="https://david.dukesnuz.com/blog/home" target="blank">Blog</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
h1 {
  font-size: 4em;
  letter-spacing: 5px;
  margin: 0;
  margin-top: 20px;
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
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>