import gulp from 'gulp'
import uglify from 'gulp-uglify'

import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

import browserify from 'browserify'
import babelify from 'babelify'

gulp.task('build', () => {
	browserify('src/index.js')
		.transform(babelify)
		.bundle()
		.on('error', e => console.error(e.stack))
		.pipe(source('bundle.js'))
		//.pipe(buffer())
		//.pipe(uglify())
		.pipe(gulp.dest('build/js'))
})

gulp.task('default', [ 'build' ])
