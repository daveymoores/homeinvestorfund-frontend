require('events').EventEmitter.prototype._maxListeners = 100;

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');
var imagemin = require('gulp-imagemin');
var flatten = require('gulp-flatten');
var svgstore = require('gulp-svgstore');
var rename = require('gulp-rename');
var argv   = require('minimist')(process.argv);
var gulpif = require('gulp-if');
var prompt = require('gulp-prompt');
var rsync  = require('gulp-rsync');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');
var babel = require('gulp-babel');

var manifest = require('asset-builder')('./assets/manifest.json');
var config = manifest.config || {};
var globs = manifest.globs;

var path = {
    HTML: 'index.php',
    ALL: ['assets/**/*.jsx', 'assets/**/*.js'],
    MINIFIED_OUT: 'main.min.js',
    SRC: 'assets',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/scripts',
    DEST: 'dist'
};


gulp.task('webpack', [], function() {
    return gulp.src(path.ALL)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(stream(webpackConfig))
        .pipe(uglify())
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('styles', function() {
    var includePaths = require('node-bourbon').includePaths;

    gulp.src('assets/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: includePaths,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    //.pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles/'));
});


gulp.task('images', function() {
  return gulp.src(globs.images)
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
    }))
    .pipe(gulp.dest(path.DEST + '/images'));
});


// ### Fonts
// `gulp fonts` - Grabs all the fonts and outputs them in a flattened directory
// structure. See: https://github.com/armed/gulp-flatten
gulp.task('fonts', function() {
  return gulp.src(globs.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.DEST + '/fonts'));
});


gulp.task('svg', function () {
    return gulp
        .src(['assets/svg/**/*.svg', '!assets/svg/backgrounds/*.svg', '!assets/svg/**/*-sprite.svg'])
        .pipe(svgstore())
        .pipe(rename('svg-sprite.svg'))
        .pipe(gulp.dest(path.DEST + '/svg'));
});


gulp.task('svg-bg', function () {
    return gulp
        .src(['assets/svg/backgrounds/*.svg'])
        .pipe(gulp.dest(path.DEST + '/svg'));
});

gulp.task("webpack-dev-server", function(callback) {
    var myConfig = Object.create(webpackConfig);

    myConfig.devtool = "eval";
    myConfig.debug = true;
});


gulp.task('init', ['webpack','styles','images','fonts','svg','svg-bg']);


gulp.task('watch', function() {
    gulp.watch(path.ALL, ['webpack']);
    gulp.watch([path.SRC + '/fonts/**/*'], ['fonts']);
    gulp.watch('assets/styles/**/*.scss',['styles']);
    gulp.watch([path.SRC + '/images/**/*'], ['images']);
    gulp.watch([path.SRC + '/svg/**/*.svg'], ['svg', 'svg-bg']);
});


gulp.task('default', ['watch']);


function throwError(taskName, msg) {
  throw new gutil.PluginError({
      plugin: taskName,
      message: msg
    });
}
