<template>
  <div class="content">
    <h2>Deploy a Vue.js App to Digital Ocean Using Github</h2>
    <p>
      In this tutorial we will upload a Vue.js app from local development to a
      <a
        href="https://m.do.co/c/3ec7cdf44173"
        target="blank"
      >Digital Ocean</a> Droplet
      This tutorial assumes you already have a Digital Ocean Droplet, a Github account and
      your
      <a href="https://vuejs.org/v2/guide/installation.html" target="blank">Vue.js</a>
      app is connected to a github repository with a master branch
    </p>

    <div class="list-content">
      <ol>
        <li>
          Open your text editor and navigate to your Vue.js app. Open .gitignore. The /dist folder may not be commented out.
          Comment this out by type # before dist/. So it will look like #dist/. This will allow you to push the dist folder to
          your master branch on github. In case you were wondering the dist folder is created when you run npm run build.
        </li>

        <li>In your terminal navigate to the master branch verify that all changes have been pushed to github and the repository is clean.</li>

        <li>
          From the command line run
          <code>npm run build</code> or run build from the
          <a
            href="https://vuejs.org/v2/guide/installation.html#CLI"
            target="blank"
          >Vue ui</a>. In your project you will notice
          a new folder called dist.
        </li>

        <li>Now use git add, then git commit and push the new dist files to the master branch on github.</li>

        <li>
          Check your repository on github and veryfy the dist folder was added. This folder most likely will be the first folder
          in your repository. If you do not see it then .gitignore may still be ignoring the dist folder. So
          proceed to step 6. If the dist folder is in your repository skip to step 7.
        </li>

        <li>
          We will need to remove and cache all files. In the command line type:
          <ul>
            <li>
              a.
              <code>git rm -r --cached</code>
            </li>
            <li>
              b.
              <code>git add . or git add --all</code>
            </li>
            <li>
              c.
              <code>git commit -m "untrack files in .gitignore"</code>
            </li>
          </ul>This only will have to be done one time, unless
          you edit the .gitignore file in the future. Credit given to
          <a
            href="https://stackoverflow.com/questions/45400361/why-is-gitignore-not-ignoring-my-files/45400404"
            target="blank"
          >Stackoverflow</a>
        </li>

        <li>
          In your terminal on the command line, create a branch called production by typing:
          <br />
          <code>git branch production</code>
        </li>

        <li>
          Now checkout the production branch by typing:
          <br />
          <code>git checkout production</code>
        </li>

        <li>
          We want to move the dist folder from the master branch to the production branch.
          In the command line type, make sure to leave a space between -- and dist:
          <br />
          <code>git checkout master -- dist</code>
        </li>

        <li>
          Run git status and you should see the new dist file untracked. Lets push it to github. We are going to
          push this file to the production branch. So run:
          <ul>
            <li>
              a.
              <code>git add dist</code>
            </li>
            <li>
              b.
              <code>git commit -m "deploy to production"</code>
            </li>
            <li>
              c.
              <code>git push origin production</code>
            </li>
          </ul>
        </li>

        <li>
          Go to Github and verify the dist folder is now in the production branch. On the left side above the folders and to the left
          of the "New pull request" tab is a tab, "Branch: master", If the production branch was created successfully, then the dist folder
          will be in the production branch.
        </li>

        <li>
          Next lets pull the dist folder into
          <a href="https://m.do.co/c/3ec7cdf44173" target="blank">Digital Ocean</a>.
          ssh or login to your droplet. Cd to your html folder.
          <br />
          <code>cd /var/www/html/</code>
          <br />Create an empty folder called "myvuejsapp" by typing
          <br />
          <code>mkdir myvuejsapp</code>
          <br />Then cd into this new folder.
        </li>

        <li>
          We now have to pull the dist folder from our github repo in the production branch. While in the new folder
          called myvuejsapp, in the command line type:
          <br />
          <code>git pull origin production</code>
          <br />Type
          <code>ls</code> to veryify the folder was uploaded.
        </li>

        <li>
          Next we have to tell the server which folder to open when traffic is coming in form your domain. This assumes you
          have a domain name pointing to your
          <a href="https://m.do.co/c/3ec7cdf44173" target="blank">Digital Ocean</a> Droplet.
          Open /etc/apache2/sites-enabled/000-default.conf by typing the following in the command line:
          <br />
          <code>nano /etc/apache2/sites-enabled/000-default.conf</code>
        </li>

        <li>
          Paste the following into this file, using your domain. I also add a second virtual host changing
          ServerName to yourdomain.com. Notice no www.
          <pre><code>&lsaquo;VirtualHost *:80&rsaquo;
    ServerName www.yourdomain.com
    DocumentRoot &quot;/var/www/html/myvuejsapp/dist&quot;
    Directory &quot;/var/www/html/myvuejsapp/dist&quot;&rsaquo;
      AllowOverride All
    &lsaquo;/Directory&rsaquo;
  &lsaquo;/VirtualHost&rsaquo;</code></pre>
        </li>

        <li>
          Close the file and restart Apache by typing:
          <br />
          <code>service apache2 restart</code>
        </li>

        <li>Congradulations your site should now be live!</li>

        <li>
          View the
          <a v-bind:href="''+url+''" target="blank">Gist</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://gist.github.com/dukesnuz/dc8a440e076698e36ffcf402d73da7e5"
    };
  }
};
</script>

<style scoped>
ul,
ol {
  margin-bottom: 25px;
}
.list-content {
  text-align: left;
  width: 90%;
  align-content: space-evenly;
  margin: auto;
  letter-spacing: 1px;
  line-height: 20px;
}
.content {
  width: 100%;
  margin: auto;
}
code {
  background-color: #ccc;
  padding: 2px;
}
@media only screen and (min-width: 375px) {
  .list-content {
    width: 500px;
  }
  .content {
    width: 65%;
  }
}
</style>