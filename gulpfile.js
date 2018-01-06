const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');



/**
 * Compile nunjucks with corresponding data.js file context
 */
gulp.task('compile-templates', function () {
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
});

/**
 * Build sass files
 */
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'));
});

/**
 * Watch sass files
 */
gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});


/**
 * Compress js
 */
gulp.task('uglify', function (cb) {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

/**
 * Copy images
 */
gulp.task('images', function () {
    return gulp
        .src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
});

/**
 * Copy vendors
 */
gulp.task('vendors', function () {
    return gulp
        .src('src/vendors/**/*.*')
        .pipe(gulp.dest('dist/vendors/'));
});
/**
 * Copy video
 */
gulp.task('video', function () {
    return gulp
        .src('src/video/**/*.*')
        .pipe(gulp.dest('dist/video/'));
});

/**
 * Copy favicons
 */
gulp.task('favicons', function () {
    return gulp
        .src('src/favicon/**/*.*')
        .pipe(gulp.dest('dist/favicon/'));
});

gulp.task('default', ['compile-templates', 'sass', 'uglify', 'images', 'vendors', 'favicons', 'video']);