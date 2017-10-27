# Primary CMS
Custom CMS framework using [Roots.io](https://roots.io/) and [Timber](https://timber.github.io/docs/)

## Overview
- All site files are contained in the "web" folder
- Bootstrap 4 is installed and ready to use
- Gulp is used to run BrowserSync, compile / minify SASS and JS
- Images, JS and SASS files are contained in "src"
- PHP and page templates are contained in "app/themes"
- Theme is based on Timber's [Starter Theme](https://github.com/timber/starter-theme)

## Configuration
- Dabase Name, Username and Password are assigned via the ".env" file
- Avoid editing files in the parent theme. New or modified PHP/Twig files should be saved into the child theme folder.
- Roots.io requires PHP v5.6 or later

## Gulp commands

- "gulp" runs BrowserSync and the tasks below
- "gulp styles" handles SASS and minfies to the child theme's "assets/css" folder
- "gulp images" optimizes and copies files to child theme's "assets/img" folder
- "gulp vendorsJS" combines and minifies .js files in "src/js/vendor"
- "gulp customJS" combines and minifies .js files in "src/js/custom"