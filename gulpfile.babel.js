import gulp from 'gulp'

import del from 'del'

import webpack from 'webpack'
import combineLoaders from 'webpack-combine-loaders'

gulp.task('build', () => {
	gulp.src('./node_modules/material-design-icons/images/sprite-communication-black.PNG')
		.pipe(gulp.dest('./build/images'))
	gulp.src('./src/index.htm')
		.pipe(gulp.dest('./build'))

	webpack({
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: './build/js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: combineLoaders([
						{
							loader: 'babel',
							query: {
								cacheDirectory: './cache',
								babelrc: false,
								presets: [
									'es2015-native-modules',
									'angular2'
								]
							}
						},
						{
							loader: 'angular2-template-loader'
						}
					]),
					exclude: /node_modules/,
				},
				{
					test: /\.json$/,
					loader: 'json-loader'
				},
				{
					test: /\.(html|css)$/,
					loader: 'raw-loader'
				},
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: "url-loader?limit=10000&minetype=application/font-woff&name=./[hash].[ext]"
				},
				{
					test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: "file-loader?name=./[hash].[ext]"
				}
			]
		},
		devtool: false,
		cache: true,
		plugins: [
			/*new webpack.optimize.UglifyJsPlugin({
				mangle: {
					except: [ 'exports', 'require' ],
					eval: true,
					toplevel: true
				},
				compress: {
					dead_code: true,
					booleans: true
				}
			})*/
		]
	}, (err, stats) => {
		err && console.error(err)
                console.log(stats.toString({ colors: true }))
	})
})

gulp.task('clean', () => {
	del([ './build/js/*' ])
})

gulp.task('default', [ 'build' ])
