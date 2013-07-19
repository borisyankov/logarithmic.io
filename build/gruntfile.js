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
                        '../public/lib/angular-cookies.js',
                        '../public/lib/angular-ui-router.js'
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
                        '../public/js/directives/error.js',
                        '../public/js/directives/modal.js',
                        '../public/js/directives/validIf.js',
                        '../public/js/directives/validIfEquals.js',
                        '../public/js/directives/buttonSubmit.js',
                        '../public/js/directives/buttonCancel.js',
                        '../public/js/api.js js/ctrl/signup.js',
                        '../public/js/ctrl/account.js',
                        '../public/js/ctrl/signup.js',
                        '../public/js/ctrl/login.js',
                        '../public/js/ctrl/project.js',
                        '../public/js/ctrl/changepwd.js',
                        '../public/js/ctrl/subscribe.js']
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
                src: ['../public/html/pages/*.html', '../public/html/modals/*.html', '../public/html/templates/*.html'],
                dest: 'output/templates.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['uglify', 'concat']);
};