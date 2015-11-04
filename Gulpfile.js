var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('js', function() {
	gulp.src('lib/Vec2.js')
		.pipe(uglify())
        .pipe(rename('Vec2.min.js'))
		.pipe(gulp.dest('lib/'));
});

gulp.task('default', ['js']);
