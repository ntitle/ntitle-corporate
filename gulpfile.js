const gulp = require('gulp');
const watch = require('gulp-watch');

let isWatching = false;

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

/**
 * Clear build directory
 */
gulp.task('cleanup', require('./gulp/cleanup'));

gulp.task('compile', () => gulp.start('compile-templates', 'sass', 'scripts', 'images', 'vendors', 'favicons', 'video'));

gulp.task('watch', () => {
    isWatching = true;
    watch(['src/**/*.*'], () => gulp.start('compile'));
});

gulp.task('build', ['cleanup'], () => gulp.start('compile-templates', 'sass', 'scripts', 'images', 'vendors', 'favicons', 'video'));


gulp.task('dev', () => gulp.start('compile-templates', 'sass', 'scripts', 'images', 'vendors', 'favicons', 'video', () => {
    if (isWatching) return;

    return gulp.start('watch');
}));