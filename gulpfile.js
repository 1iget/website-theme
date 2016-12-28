var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    // sourcemaps = require('gulp-sourcemaps'), 
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();
 
function errorLog (error) {
  console.error.bind(error);
  this.emit('end');
}

//sass + prefix
gulp.task('sass', function () {
  return gulp.src('./src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-css', function () {
  return gulp.src('./dist/css/styles.css')
    // .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    // .pipe(sourcemaps.write())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./dist'));
});

var jsDest = 'dist';
gulp.task('js', function () {
  return gulp.src(['node_modules/jquery/dist/jquery.js', 'src/js/**/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('browser-sync', function () {
    browserSync.init({
      proxy: "write-the-docs.dev", 
      open: false
    });
});

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass', 'reload']);
  gulp.watch('dist/css/styles.css', ['minify-css', 'reload']);
  gulp.watch('src/js/**/*.js', ['js', 'reload']);
  gulp.watch('*.html', ['reload']);
});

gulp.task('default', ['watch', 'js', 'sass', 'browser-sync', 'reload']);
