module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                    'output/style.css': ['../public/style.css']
                }
            }
        },
        concat: {
            templates: {
                options: {
                    process: function(src, filepath) {
                        return '<script type="text/ng-template" id="' + filepath.replace(/^.*[\\\/]/, '') + '">\n'
                            + src + '\n'
                            + '</script>';
                    }
                },
                src: [
                    '../public/html/pages/*.html',
                    '../public/html/modals/*.html',
                    '../public/html/templates/*.html'
                ],
                dest: 'output/templates.html'
            },
            indexhtml: {
                src: [
                    '../public/html/start.html',
                    '../public/html/modal.html',
                    '../public/html/body.html',
                    'output/templates.html',
                    'output/style.css',
                    'output/lib.min.js',
                    'output/app.min.js',
                    '../public/html/end.html'
                ],
                dest: '../public/index.html'
            }
        },
        preprocess: {
            options: {
                context: {
                    DEBUG: true
                }
            },
            html: {
                src: '../public/html/main.html',
                dest: '../public/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-preprocess');

    grunt.registerTask('default', ['uglify', 'cssmin', 'concat', 'preprocess']);
};