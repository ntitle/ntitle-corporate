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

    return gulp.src(['src/pages/*.njk', '!src/pages/default.njk'])
        .pipe(data(getDataForFile))
        .pipe(nunjucksRender({
            path: ['src/partials', 'src/templates', 'src/utils', 'src/components', 'src/pages', 'src/**/*.njk']
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
};
