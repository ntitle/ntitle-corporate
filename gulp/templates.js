const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const htmlmin = require('gulp-htmlmin');


module.exports = () => {
    function getDataForFile(file) {
        const dataFileName = file.relative.replace('.njk', '.data.js');
        const dataPath = file.path.replace(file.relative, dataFileName);

        return require(dataPath);
    }

    return gulp.src(['src/templates/*.njk', '!src/templates/default.njk'])
        .pipe(data(getDataForFile))
        .pipe(nunjucksRender({
            path: ['src/partials', 'src/templates']
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
};