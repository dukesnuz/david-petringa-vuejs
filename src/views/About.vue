<template>
  <div class="about">
    <section class="header">
      <h2>Greetings</h2>
      <p>
        This is a simple website made with Vue.js. My goal in developing this site is to practice and become more
        proficient with Vue.js. Vue.js is a frontend web develpment framework. I discovered and started using Vue.js
        when I was learning the PHP Framework, Laravel. I coded
        <a
          href="https://david.dukesnuz.com/links/get-list"
          target="blank"
        >this</a>
        using Laravel. Vue.js was not used.
      </p>
    </section>

    <section>
      <h3>Where am I on the web</h3>
      <ul>
        <li>
          My
          <a href="http://www.dukesnuz.com" target="blank">playground</a>
        </li>
        <li>
          I coded these
          <a
            href="http://www.dukesnuz.com/websites/david/petringa/coded/"
            target="blank"
          >Websites</a>
        </li>
        <li>
          My favorite
          <a href="https://david.dukesnuz.com/links/get-list" target="blank">websites</a>
        </li>

        <li>
          For version control I use
          <a href="https://github.com/dukesnuz" target="blank">Github</a>
        </li>
        <li>
          My favorite meetup is
          <a
            href="https://www.meetup.com/bostonphp/members/67794352/"
            target="blank"
          >Boston PHP</a>
        </li>
        <li>
          Occasionally, I post on
          <a href="https://twitter.com/Dukesnuz" target="blank">Twitter</a>
        </li>
        <li>
          Just becasue, I am on
          <a
            href="https://www.linkedin.com/in/davidpetringa"
            target="blank"
          >Linkedin</a>
        </li>
      </ul>
    </section>

    <section>
      <h3>I am using the following technologies for this site.</h3>
      <ul>
        <li>Designed and coded using An Acer Laptop running Windows 7.</li>
        <li>
          <a href="https://code.visualstudio.com/" target="blank">VS Code</a> for a text editor
        </li>
        <li>
          <a href="https://www.mozilla.org/en-US/firefox/new/" target="blank">Firefox</a> for development browser
        </li>
        <li>
          <a href="https://github.com/dukesnuz/david-petringa-vuejs" target="blank">Github</a> for version control
        </li>
        <li>
          <a href="https://m.do.co/c/3ec7cdf44173" target="blank">Digital Ocean</a> for hosting
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.about {
  margin-bottom: 500px;
  padding: 0 5% 0 5%;
  font-size: 1.25em;
}
.header {
  padding: 5px 5px 25px 5px;
}
section {
  background: rgb(240, 248, 255);
  margin-bottom: 50px;
}
section h2,
section h3 {
  padding-top: 25px;
}
ul {
  padding: 25px 0px;
  width: 90%;
  margin: auto;
  margin-top: 3px;
}
h2,
h3 {
  padding: 0 5px 0 0;
  margin-bottom: 0;
}

@media only screen and (min-width: 320px) {
  .about {
    font-size: 1.5em;
  }
}
@media only screen and (min-width: 768px) {
  .about {
    margin: auto;
    width: 500px;
    font-size: 1.5em;
  }
}
</style>
