const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
const concat = require('gulp-concat');


module.exports = (cb) => {
    pump([
            gulp.src('src/js/*.js'),
            babel({
                presets: ['@babel/env']
            }),
            uglify(),
            concat('scripts.js'),
            gulp.dest('dist/js')
        ],
        cb
    );
};
