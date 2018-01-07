const gulp = require('gulp');

module.exports = () => {
    return gulp
        .src('src/favicon/**/*.*')
        .pipe(gulp.dest('dist/favicon/'));
};