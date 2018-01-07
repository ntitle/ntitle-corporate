const gulp = require('gulp');

/**
 * Compile nunjucks with corresponding data.js file context
 */
gulp.task('compile-templates', require('./gulp/templates'));

/**
 * Build sass files
 */
gulp.task('sass', require('./gulp/styles'));


/**
 * Compress and copy js
 */
gulp.task('scripts', require('./gulp/scripts'));

/**
 * Copy images
 */
gulp.task('images', require('./gulp/images'));

/**
 * Copy video
 */
gulp.task('video', require('./gulp/videos'));

/**
 * Copy favicons
 */
gulp.task('favicons', require('./gulp/favicons'));

/**
 * Concat and copy vendors
 */
gulp.task('vendors', require('./gulp/vendors'));

gulp.task('default', ['compile-templates', 'sass', 'scripts', 'images', 'vendors', 'favicons', 'video']);