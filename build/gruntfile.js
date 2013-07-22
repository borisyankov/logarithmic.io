module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['output'],
        uglify: {
            lib: {
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
                        '../public/js/api.js',
                        '../public/js/directives/*.js',
                        '../public/js/ctrl/*.js',
                        '../public/js/services/*.js'
                    ]
                }
            }
        },
        less: {
            compile: {
                options: {
                    yuicompress: true
                },
                files: {
                    'output/style.min.css': ['../public/style.less']
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
            production: {
                src: '../public/html/main.html',
                dest: '../public/index.html'
            },
            dev: {
                options: {
                    context: {
                        DEV: true
                    }
                },
                src: '../public/html/main.html',
                dest: '../public/index.html'
            }
        },
        htmlmin: {
            templates: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                src: [
                    '../public/html/pages/*.html',
                    '../public/html/modals/*.html',
                    '../public/html/templates/*.html'
                ],
                dest: 'output/templates'
            }
        },
        watch: {
            htmls: {
                files: [
                    '../public/style.css',
                    '../public/html/*.html',
                    '../public/html/pages/*.html',
                    '../public/html/modals/*.html',
                    '../public/html/templates/*.html'
                ],
                tasks: ['concat', 'preprocess:dev'],
                options: {
                    interrupt: true
                }
            },
            scripts: {
                files: [
                    '../public/lib/*.js',
                    '../public/js/**/*.js'
                ],
                tasks: ['uglify', 'less', 'preprocess:dev'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'clean',
        'uglify',
        'less',
        'concat',
        'preprocess:production'
    ]);
    grunt.registerTask('dev', [
        'preprocess:dev',
        'less',
        'watch'
    ]);
    grunt.registerTask('font', ['webfont']);
};