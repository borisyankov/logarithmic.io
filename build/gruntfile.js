module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['output'],
        uglify: {
            lib: {
                options: {
                },
                files: {
                    'output/lib.min.js': [
                        '../public/lib/angular.js',
                        '../public/lib/angular-*.js'
                    ]
                }
            },
            app: {
                options: {
                    mangle: false
                },
                files: {
                    'output/app.min.js': [
                        '../public/js/app.js',
                        '../public/js/directives/*.js',
                        '../public/js/api.js',
                        '../public/js/ctrl/*.js'
                    ]
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'output/style.min.css': ['../public/style.css']
                }
            }
        },
        concat: {
            options: {
                process: function(src, filepath) {
                    return '<script type="text/ng-template" id="' + filepath.replace(/^.*[\\\/]/, '') + '">\n'
                        + src + '\n'
                        + '</script>';
                }
            },
            dist: {
                src: [
                    '../public/html/pages/*.html',
                    '../public/html/modals/*.html',
                    '../public/html/templates/*.html'
                ],
                dest: 'output/templates.html'
            }
        },
        webfont: {
            icons: {
                src: '../assets/icons/*.svg',
                dest: 'output/fonts',
                options: {
                    types: 'woff',
                    embed: true
                }
            }
        },
        preprocess: {
            options: {
            },
            html: {
                src: '../public/html/main.html',
                dest: '../public/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-preprocess');

    grunt.registerTask('default', [
        'clean',
        'uglify',
        'cssmin',
        'concat',
        'preprocess'
    ]);
    grunt.registerTask('font', ['webfont']);
};