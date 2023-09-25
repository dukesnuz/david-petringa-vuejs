<template>
  <footer class="footer">
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <!--<li>
          <router-link to="/about">About</router-link>
        </li>
         <li>
          <a href="https://david.dukesnuz.com/blog/home" target="blank">Blog</a>
        </li>
        <li>
          <a v-bind:href="''+url+''" target="blank">Say Hello</a>
        </li>
        <li>
          View the code on
          <a
            href="https://github.com/dukesnuz/david-petringa-vuejs"
            target="blank"
          >Github</a>
        </li>-->
      </ul>
      <p v-html="copy()" class="copy"></p>
    </div>
    <div class="column_2">
      <!--<Duke />-->
    </div>
  </footer>
</template>

<script>
//import Duke from "./ads/DukeCannon";

export default {
  name: "Footer",
  components: {
   /* Duke */
  },
  data() {
    return {
      url: "http://www.dukesnuz.com/contact/dukesnuz/david/petringa/"
    };
  },
  methods: {
    copy() {
      return `Copyright &copy; David Petringa ` + new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: rgb(255, 255, 255);
  padding-bottom: 200px;
}
#nav {
  padding: 30px;
  float: left;
  text-align: left;
}
.column_2 {
  float: left;
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
.copy {
  font-size: .85em;
  font-style: italic;
}
</style>