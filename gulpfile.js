var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var sass = require('gulp-sass');

/**
 * Compile nunjucks with corresponding data.js file context
 */
gulp.task('compile-templates', function () {
    function getDataForFile(file) {
        var dataFileName = file.relative.replace('.njk', '.data.js');
        var dataPath = file.path.replace(file.relative, dataFileName);

        return require(dataPath);
    }

    return gulp.src(['src/templates/*.njk', '!src/templates/default.njk'])
        .pipe(data(getDataForFile))
        .pipe(nunjucksRender({
            path: ['src/partials', 'src/templates']
        }))
        .pipe(gulp.dest('dist'));
});

/**
 * Build sass files
 */
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

/**
 * Watch sass files
 */
gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['compile-templates', 'sass']);