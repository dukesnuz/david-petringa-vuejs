(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VuejsUploadToDigitalOcean.vue"],{"024e":function(e,t,o){"use strict";var i=o("0716"),n=o.n(i);n.a},"0716":function(e,t,o){},"861e":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h2",[e._v("Deploy a Vue.js App to Digital Ocean Using Github")]),e._m(0),e._m(1),o("div",{staticClass:"list-content"},[o("ol",[o("li",[e._v(" Open your text editor and navigate to your Vue.js app. Open .gitignore. The /dist folder may not be commented out. Comment this out by type # before dist/. So it will look like #dist/. This will allow you to push the dist folder to your master branch on github. In case you were wondering the dist folder is created when you run npm run build. ")]),o("li",[e._v("In your terminal navigate to the master branch verify that all changes have been pushed to github and the repository is clean.")]),e._m(2),o("li",[e._v("Now use git add, then git commit and push the new dist files to the master branch on github.")]),o("li",[e._v(" Check your repository on github and veryfy the dist folder was added. This folder most likely will be the first folder in your repository. If you do not see it then .gitignore may still be ignoring the dist folder. So proceed to step 6. If the dist folder is in your repository skip to step 7. ")]),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),o("li",[e._v(' Go to Github and verify the dist folder is now in the production branch. On the left side above the folders and to the left of the "New pull request" tab is a tab, "Branch: master", If the production branch was created successfully, then the dist folder will be in the production branch. ')]),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),o("li",[e._v("Congradulations your site should now be live!")]),o("li",[e._v(" View the "),o("a",{attrs:{href:""+e.url,target:"blank"}},[e._v("Gist")])])])])])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" In this tutorial we will upload a Vue.js app from local development to a "),o("a",{attrs:{href:"https://m.do.co/c/3ec7cdf44173",target:"blank"}},[e._v("Digital Ocean")]),e._v(" Droplet This tutorial assumes you already have a Digital Ocean Droplet, a Github account and your "),o("a",{attrs:{href:"https://vuejs.org/v2/guide/installation.html",target:"blank"}},[e._v("Vue.js")]),e._v(" app is connected to a github repository with a master branch ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",[e._v("View more of my tutorials on my "),o("a",{attrs:{href:"https://david.dukesnuz.com/blog/home",target:"blank"}},[e._v("blog")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" From the command line run "),o("code",[e._v("npm run build")]),e._v(" or run build from the "),o("a",{attrs:{href:"https://vuejs.org/v2/guide/installation.html#CLI",target:"blank"}},[e._v("Vue ui")]),e._v(". In your project you will notice a new folder called dist. ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" We will need to remove and cache all files. In the command line type: "),o("ul",[o("li",[e._v(" a. "),o("code",[e._v("git rm -r --cached")])]),o("li",[e._v(" b. "),o("code",[e._v("git add . or git add --all")])]),o("li",[e._v(" c. "),o("code",[e._v('git commit -m "untrack files in .gitignore"')])])]),e._v("This only will have to be done one time, unless you edit the .gitignore file in the future. Credit given to "),o("a",{attrs:{href:"https://stackoverflow.com/questions/45400361/why-is-gitignore-not-ignoring-my-files/45400404",target:"blank"}},[e._v("Stackoverflow")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" In your terminal on the command line, create a branch called production by typing: "),o("br"),o("code",[e._v("git branch production")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Now checkout the production branch by typing: "),o("br"),o("code",[e._v("git checkout production")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" We want to move the dist folder from the master branch to the production branch. In the command line type, make sure to leave a space between -- and dist: "),o("br"),o("code",[e._v("git checkout master -- dist")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Run git status and you should see the new dist file untracked. Lets push it to github. We are going to push this file to the production branch. So run: "),o("ul",[o("li",[e._v(" a. "),o("code",[e._v("git add dist")])]),o("li",[e._v(" b. "),o("code",[e._v('git commit -m "deploy to production"')])]),o("li",[e._v(" c. "),o("code",[e._v("git push origin production")])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Next lets pull the dist folder into "),o("a",{attrs:{href:"https://m.do.co/c/3ec7cdf44173",target:"blank"}},[e._v("Digital Ocean")]),e._v(". ssh or login to your droplet. Cd to your html folder. "),o("br"),o("code",[e._v("cd /var/www/html/")]),o("br"),e._v('Create an empty folder called "myvuejsapp" by typing '),o("br"),o("code",[e._v("mkdir myvuejsapp")]),o("br"),e._v("Then cd into this new folder. ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" We now have to pull the dist folder from our github repo in the production branch. While in the new folder called myvuejsapp, in the command line type: "),o("br"),o("code",[e._v("git pull origin production")]),o("br"),e._v("Type "),o("code",[e._v("ls")]),e._v(" to veryify the folder was uploaded. ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Next we have to tell the server which folder to open when traffic is coming in form your domain. This assumes you have a domain name pointing to your "),o("a",{attrs:{href:"https://m.do.co/c/3ec7cdf44173",target:"blank"}},[e._v("Digital Ocean")]),e._v(" Droplet. Open /etc/apache2/sites-enabled/000-default.conf by typing the following in the command line: "),o("br"),o("code",[e._v("nano /etc/apache2/sites-enabled/000-default.conf")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Paste the following into this file, using your domain. I also add a second virtual host changing ServerName to yourdomain.com. Notice no www. "),o("pre",[o("code",[e._v('‹VirtualHost *:80›\n  ServerName www.yourdomain.com\n  DocumentRoot "/var/www/html/myvuejsapp/dist"\n  Directory "/var/www/html/myvuejsapp/dist"›\n    AllowOverride All\n  ‹/Directory›\n‹/VirtualHost›')])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v(" Close the file and restart Apache by typing: "),o("br"),o("code",[e._v("service apache2 restart")])])}],r={data:function(){return{url:"https://gist.github.com/dukesnuz/dc8a440e076698e36ffcf402d73da7e5"}}},a=r,l=(o("024e"),o("2877")),s=Object(l["a"])(a,i,n,!1,null,"55725b51",null);t["default"]=s.exports}}]);
//# sourceMappingURL=VuejsUploadToDigitalOcean.vue.fde8c289.js.map