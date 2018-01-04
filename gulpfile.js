var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

function getDataForFile(file) {
    var dataFileName = file.relative.replace('.html', '.data.js');
    var dataPath = file.path.replace(file.relative, dataFileName);

    return require(dataPath);
}

gulp.task('default', function () {
    return gulp.src('src/templates/*.html')
        .pipe(data(getDataForFile))
        .pipe(nunjucksRender({
            path: 'src/partials'
        }))
        .pipe(gulp.dest('dist'));
});