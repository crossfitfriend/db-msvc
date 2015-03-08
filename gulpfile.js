var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('lint', function(){
  return gulp.src(['gulpfile.js', 'app/src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'js-lint task complete' }));
});

gulp.task('clean', function(cb) {
  del(['dist/assets/js'], cb);
});

gulp.task('default', ['clean'], function(){
   gulp.start('lint');
});