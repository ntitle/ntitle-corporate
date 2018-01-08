const gulp = require('gulp');
const watch = require('gulp-watch');

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

// // Watchers
//
//
// gulp.task('watch', () => {
//     watch('/src/sass/**/*.*', 'sass');
//
//     watch(['./src/partials/**/*.*', './src/templates/**/*.*'], 'compile-templates');
// });

gulp.task('default', ['cleanup'], () => {
    return gulp.start('compile-templates', 'sass', 'scripts', 'images', 'vendors', 'favicons', 'video', () => {
        // return gulp.start('watch');
    });
});
