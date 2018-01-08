const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');

module.exports = (cb) => {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
};