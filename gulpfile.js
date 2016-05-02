var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var cssScss = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('es6', function () {
    return browserify({entries: './js/main.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
  		.pipe(cssScss({"bundleExec": true}))
  		.pipe(concat('style.css'))
  		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['scss','es6'], function () {
    gulp.watch('./js/**/*.jsx', ['es6']);
    gulp.watch('./scss/**/*.scss', ['scss']);
});

gulp.task('default', ['watch']);

