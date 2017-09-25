// ===========================================================================
// TFM Main Gulp Settings
// 

// ===========================================================================
// Define variables here:
//

var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var cleancss     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var del          = require('del');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var imagemin     = require('gulp-imagemin');
var jshint       = require('gulp-jshint');
var notify       = require('gulp-notify');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var run          = require('gulp-run');
var runSequence  = require('run-sequence');
var sass         = require('gulp-ruby-sass');
var uglify       = require('gulp-uglify');
var uncss        = require('gulp-uncss');

// ===========================================================================
// Include local paths helper
//

var paths        = require('./source/_assets/gulp/paths');

// ===========================================================================
// BUILD : Styles : Main
//
// Uses Sass compiler to process styles, adds vendor prefixes, minifies, then
// outputs file to the appropriate location.
//
gulp.task('build:styles:main', function() {
    return sass(paths.sassFiles + '/main.scss', {
        style: 'compressed',
        trace: true,
        loadPath: [paths.sassFiles]
    }).pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        // .pipe(uncss({
        //     html: ['source/**/*.html'],
        //     ignore: ['.menu-overlay.open', '.hamburger.open', '.open', '.open .nav li']
        // }))
        .pipe(cleancss())
        .pipe(gulp.dest(paths.jekyllCssFiles))
        .pipe(gulp.dest(paths.siteCssFiles))
        .pipe(browserSync.stream())
        .on('error', gutil.log);
});

// ===========================================================================
// CLEAN : Styles
//

gulp.task('clean:styles', function(callback) {
    del([paths.jekyllCssFiles + 'main.css', paths.siteCssFiles + 'main.css']);
    callback();
});

// // Processes critical CSS, to be included in head.html.
// gulp.task('build:styles:critical', function() {
//     return sass(paths.sassFiles + '/critical.scss', {
//         style: 'compressed',
//         trace: true,
//         loadPath: [paths.sassFiles]
//     }).pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
//         .pipe(cleancss())
//         .pipe(gulp.dest('source/_includes'))
//         .on('error', gutil.log);
// });


// ===========================================================================
// Build : Styles
//
// Builds all styles.
// gulp.task('build:styles', ['build:styles:main', 'build:styles:critical']);
gulp.task('build:styles', ['build:styles:main']);

// Deletes CSS.
gulp.task('clean:styles', function(callback) {
    del([paths.jekyllCssFiles + 'main.css',
        paths.siteCssFiles + 'main.css',
        'source/_includes/critical.css'
    ]);
    callback();
});

// Concatenates and uglifies global JS files and outputs result to the
// appropriate location.
gulp.task('build:scripts:main', function() {
    return gulp.src([
        paths.jsMainFiles + paths.jsPattern
        ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', gutil.log);
});


gulp.task('build:scripts:solo', function() {
    return gulp.src([
        paths.jsSoloFiles + paths.jsPattern
        ])
        // .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', gutil.log);
});


gulp.task('clean:scripts', function(callback) {
    del([paths.jekyllJsFiles + 'main.js', paths.siteJsFiles + 'main.js']);
    callback();
});

// // Concatenates and uglifies leaflet JS files and outputs result to the
// // appropriate location.
// gulp.task('build:scripts:leaflet', function() {
//     return gulp.src([
//         paths.jsFiles + '/leaflet/leaflet.js',
//         paths.jsFiles + '/leaflet/leaflet-providers.js'
//     ])
//         .pipe(concat('leaflet.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest(paths.jekyllJsFiles))
//         .pipe(gulp.dest(paths.siteJsFiles))
//         .on('error', gutil.log);
// });

// gulp.task('clean:scripts:leaflet', function(callback) {
//     del([paths.jekyllJsFiles + 'leaflet.js', paths.siteJsFiles + 'leaflet.js']);
//     callback();
// });

// // Build all scripts.
gulp.task('build:scripts', ['build:scripts:main', 'build:scripts:solo']);

// Optimizes and copies image files.
gulp.task('build:images', function() {
    return gulp.src(paths.imageFilesGlob)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.jekyllImageFiles))
        .pipe(gulp.dest(paths.siteImageFiles))
        .pipe(browserSync.stream());
});

gulp.task('clean:images', function(callback) {
    del([paths.jekyllImageFiles, paths.siteImageFiles]);
    callback();
});

// // Copies fonts.
// gulp.task('build:fonts', ['fontawesome']);

// // Places Font Awesome fonts in proper location.
// gulp.task('fontawesome', function() {
//     return gulp.src(paths.fontFiles + '/font-awesome/**.*')
//         .pipe(rename(function(path) {path.dirname = '';}))
//         .pipe(gulp.dest(paths.jekyllFontFiles))
//         .pipe(gulp.dest(paths.siteFontFiles))
//         .pipe(browserSync.stream())
//         .on('error', gutil.log);
// });

// gulp.task('clean:fonts', function(callback) {
//     del([paths.jekyllFontFiles, paths.siteFontFiles]);
//     callback();
// });

// Runs jekyll build command.
gulp.task('build:jekyll', function() {
    var shellCommand = 'JEKYLL_ENV=production bundle exec jekyll build --config _config.yml';

    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log);
});

// Runs jekyll build command using local config.
gulp.task('build:jekyll:local', function() {
    // var shellCommand = 'bundle exec jekyll build --config _config.yml,_config.test.yml,_config.dev.yml';
    var shellCommand = 'bundle exec jekyll build --config _config.yml';

    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log);
});

// Deletes the entire docs directory.
gulp.task('clean:jekyll', function(callback) {
    del(['docs']);
    callback();
});

gulp.task('clean', ['clean:jekyll',
    // 'clean:fonts',
    'clean:images',
    'clean:scripts',
    'clean:styles']);

// Builds site anew.
gulp.task('build', function(callback) {
    // runSequence('clean', ['build:jekyll', 'build:scripts', 'build:images', 'build:styles', 'build:fonts'],
    runSequence('clean', ['build:jekyll', 'build:scripts', 'build:images', 'build:styles'],
        callback);
});

// Builds site anew using local config.
gulp.task('build:local', function(callback) {
    // runSequence('clean', ['build:jekyll:local', 'build:scripts', 'build:images', 'build:styles', 'build:fonts'],
    runSequence('clean', ['build:jekyll:local', 'build:scripts', 'build:images', 'build:styles'],
        callback);
});

// Special tasks for building and then reloading BrowserSync.
gulp.task('build:jekyll:watch', ['build:jekyll:local'], function(callback) {
    browserSync.reload();
    callback();
});

gulp.task('build:scripts:watch', ['build:scripts'], function(callback) {
    browserSync.reload();
    callback();
});

// Default Task: builds site.
gulp.task('default', ['build']);

// Static Server + watching files.
// Note: passing anything besides hard-coded literal paths with globs doesn't
// seem to work with gulp.watch().
gulp.task('serve', ['build:local'], function() {

    browserSync.init({
        server: paths.siteDir,
        ghostMode: false, // Toggle to mirror clicks, reloads etc. (performance)
        logFileChanges: true,
        logLevel: 'debug',
        open: true        // Toggle to automatically open page when starting.
    });

    // Watch site settings.
    gulp.watch(['_config.yml'], ['build:jekyll:watch']);

    // Watch .scss files; changes are piped to browserSync.
    gulp.watch('source/_assets/styles/**/*.scss', ['build:styles']);

    // Watch .js files.
    gulp.watch('source/_assets/js/**/*.js', ['build:scripts:watch']);

    // Watch posts.
    gulp.watch('source/_posts/**/*.+(md|markdown|MD)', ['build:jekyll:watch']);

    // Watch drafts if --drafts flag was passed.
    if (module.exports.drafts) {
        gulp.watch('source/_drafts/*.+(md|markdown|MD)', ['build:jekyll:watch']);
    }

    // Watch html and markdown files.
    gulp.watch(['**/*.+(html|md|markdown|MD)', '!docs/**/*.*'], ['build:jekyll:watch']);

    // Watch RSS feed XML file.
    gulp.watch('source/feed.xml', ['build:jekyll:watch']);

    // Watch data files.
    gulp.watch('source/_data/**.*+(yml|yaml|csv|json)', ['build:jekyll:watch']);

    // Watch favicon.png.
    gulp.watch('source/favicon.png', ['build:jekyll:watch']);
});

// Updates Ruby gems
gulp.task('update:bundle', function() {
    return gulp.src('')
        .pipe(run('bundle install'))
        .pipe(run('bundle update'))
        .pipe(notify({ message: 'Bundle Update Complete' }))
        .on('error', gutil.log);
});