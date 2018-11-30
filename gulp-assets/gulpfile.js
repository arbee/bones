var theme = 'bones';
var gulp = require('gulp');
var compass = require('gulp-compass');
var minify = require('gulp-uglify');
var jssources = 'wp-content/themes/'+theme+'/library/jssrc/**/*.js';
var jsdest = 'wp-content/themes/'+theme+'/library/js';
var csssource = 'wp-content/themes/'+theme+'/library/scss/**/*.scss';
var cssdest = 'wp-content/themes/'+theme+'/library/css';

gulp.task('default', ['watch']);

function error(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('compass', function() {
  gulp.src(csssource)
  .pipe(compass({
    config_file: 'config.rb',
    css: cssdest,
    sass: 'wp-content/themes/'+theme+'/library/scss'
  }).on('error', error));
});

gulp.task('watch', ['compass', 'compress'], function(){
  gulp.watch(jssources, ['compress']);
  gulp.watch(csssource, ['compass']);
});

gulp.task('compress', function(){
  return gulp.src(jssources)
  .pipe(minify()).on('error', error)
  .pipe(gulp.dest(jsdest))
});