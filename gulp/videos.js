const gulp = require('gulp');

module.exports = () => {
    return gulp
        .src('src/video/**/*.*')
        .pipe(gulp.dest('dist/video/'));
};