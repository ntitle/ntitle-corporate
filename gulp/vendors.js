const gulp = require('gulp');
const concat = require('gulp-concat');


module.exports = () => {
    return gulp.src('src/vendors/*.js')
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist/js'));
};