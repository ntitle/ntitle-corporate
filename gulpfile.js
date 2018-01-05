var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

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

gulp.task('default', ['compile-templates']);