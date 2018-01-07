const imagemin = require('gulp-imagemin');
const gulp = require('gulp');


module.exports = () => {
    return gulp
        .src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
};