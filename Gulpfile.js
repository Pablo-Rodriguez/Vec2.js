var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('js', function() {
	gulp.src('lib/Vec2.js')
		.pipe(uglify())
		.pipe(gulp.dest('lib/Vec2.min.js'));
});

gulp.task('default', ['js']);