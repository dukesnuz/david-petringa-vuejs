<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/TheHeader";
import Footer from "./components/layout/TheFooter";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul, li {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
li {
  margin-bottom: 10px;
}
a {
  text-decoration:none;
  color:#3366ff;
}
</style>
