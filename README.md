# Theme for writethedocs.org

To make changes to the theme

1. Edit the relevant sass file in `src/sass/`.
2. Run `gulp sass` to translate to css in `dist`.
3. Run `gulp minify-css` to minify the css in `dist`.
4. Copy the updated CSS files to the `www` repository with something like:

   ```
   cp dist/styles.min.css ../www/docs/_static/dist/
   cp dist/css/styles.css ../www/docs/_static/dist/css/
   ```
