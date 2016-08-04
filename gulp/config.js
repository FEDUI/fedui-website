'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = {

    build: './build/',
    dist: './dist/',
    base: './build/',
    taskPath: './gulp/tasks/',
    
    html: {
        watch: ['src/html/**/*.html'],
        src: ['./src/html/**/*.html', '!./src/html/includes/**']
    },
    
    sass: {
        watch: ['src/sass/**/*.scss'],
        src: ['./src/sass/main.scss'],
        folder: 'css/',
        destFile: 'styles.min.css'
    },

    critical: {
        watch: ['src/sass/**/*.scss'],
        src: ['./src/sass/critical.scss'],
        folder: 'css/',
        destFile: 'critical.min.css'
    },

    js: {
        watch: ['src/js/**/*.js'],
        src: ['./src/js/main.js'],
        folder: 'js/',
        destFile: 'main.min.js'
    },
    
    images: {
        watch: ['src/img/**'],
        src: ['./src/img/**'],
        srcFolder: './src/img/',
        folder: 'img/'
    },
    
    misc: {
        src: [
            'src/fonts/**',
            '*.ico',
            'src/.*'
        ],
    },

    error: function(error) {

        $.notify.onError({
            title: 'Gulp',
            message: 'Error: <%= error.message %>'
        })(error);
        this.emit('end');

    }
};

module.exports = config;