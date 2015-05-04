'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('default', function () {
	return gulp.src('src/alma.js')
		.pipe(uglify())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
	gulp.watch('src/alma.js', ['default']);
});
