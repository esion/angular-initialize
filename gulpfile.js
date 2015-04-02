var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var del = require('del');
var source = require('vinyl-source-stream');
var gulpMerge = require('merge-stream');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var karma = require('karma').server;
var minifyHTML = require('gulp-minify-html');

var output = './dist';
var config = {
    outputDir: 'output',
    jsFiles: './src/js/**/*.js',
    jsEntryFile: './src/js/module.js',
    outputJSFile: 'angular-initialize.js',
    outputJSDir: output + '/js',
};

gulp.task('build', ['build/js']);

gulp.task('clean', function(done) {
    del(config.outputDir, function() {
        del(config.tmpDir, done);
    });
});

gulp.task('build/js', function() {
    return gulpMerge(
        gulp.src(config.jsFiles)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail')),
        browserify(config.jsEntryFile, { debug: true })
            .transform(babelify)
            .bundle()
            .on('error', function (err) {
                console.log('Error: ' + err.message);
            })
            .pipe(source(config.outputJSFile))
            .pipe(ngAnnotate())
            .pipe(gulp.dest(config.outputJSDir))
    );
});

// Watch
gulp.task('watch', function () {
    gulp.watch(config.jsFiles, ['build/js']);
    gulp.watch(Object.keys(config.partialsConfig), ['build/partials']);
    gulp.watch(config.localesFiles, ['build/locales']);
    gulp.watch(config.lessFiles, ['build/less']);
    gulp.watch('gulpfile.js', ['build']);
});

// Karma jenkins
gulp.task('jenkins', ['build'], function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        reporters: ['progress', 'junit'],
        singleRun: true
    }, done);
});

// Karma test
gulp.task('test', ['build'], function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('default', ['build']);
