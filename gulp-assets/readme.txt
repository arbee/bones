######### To use Gulp for SASS and JS minification ##########

Requires node.js and compass


Copy the following files to the root of your Wordpress installation:
config.rb
gulpfile.js
package.json
package-lock.json

If using GIT, create a .gitignore file in the root of your 
installation and add node_modules to it.

Do similar for other version control systems you may use.

Edit config.rb, changing "bones" to the name of your theme
in all directory definitions under #2.

Edit the first line of gulpfile.js to similarly change
"bones" to the name of your theme.

Finally, from a command line window on the site root, 
run "npm install" to install all necessary modules.

To use: from command line, type "gulp watch" and enter.
This will begin watching for changes in your SASS and 
javascript files. Make sass changes in library/scss
and javascript changes in library/jssrc only.