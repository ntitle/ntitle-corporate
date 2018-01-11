const gulp = require('gulp');
const concat = require('gulp-concat');


module.exports = () => {
    return gulp.src(['src/vendors/_jquery-3.2.1.min.js', 'src/vendors/*.js'])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('dist/js'));
};