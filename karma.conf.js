var karma = require('karma');

module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ["jasmine"],

        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/js/angular-initialize.js',
            'test/**/*-spec.js'
        ],
        preprocessors: {
            'src/**/*.js': 'coverage'
        },

        exclude: [],

        reporters: ['progress', 'coverage'],

        port: 9876,

        runnerPort: 9100,

        colors: true,

        logLevel: karma.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS'],

        captureTimeout: 60000,

        singleRun: true
    });
};
