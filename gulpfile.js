var gulp = require('gulp');

gulp.task('copy', function() {
   gulp.src('./bower_components/bootstrap/dist/**/*').pipe(gulp.dest('./assets/vendor/bootstrap'));
   gulp.src([
    './bower_components/polymer/polymer-*.html',
    './bower_components/polymer/polymer.html',
  ]).pipe(gulp.dest('./assets/vendor/polymer'));
   gulp.src([
    './bower_components/webcomponentsjs/webcomponents.js',
    './bower_components/webcomponentsjs/webcomponents.min.js',
   ])
   .pipe(gulp.dest('./assets/vendor/webcomponentsjs'));
});
