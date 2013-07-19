module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
            },
            my_target: {
                files: {
                    'output/app.min.js': [
                        '../public/lib/angular.js',
                        '../public/lib/angular-cookies.js',
                        '../public/lib/angular-ui-router.js',
                        '../public/js/app.js',
                        '../public/js/directives/error.js',
                        '../public/js/directives/modal.js',
                        '../public/js/directives/validIf.js',
                        '../public/js/directives/validIfEquals.js',
                        '../public/js/directives/buttonSubmit.js',
                        '../public/js/directives/buttonCancel.js',
                        '../public/js/api.js js/ctrl/signup.js',
                        '../public/js/ctrl/account.js',
                        '../public/js/ctrl/login.js',
                        '../public/js/ctrl/project.js',
                        '../public/js/ctrl/changepwd.js',
                        '../public/js/ctrl/subscribe.js']
                }
            }
        },
        dataUri: {
            dist: {
                src: ['../public/css/*.css'],
                dest: 'output/',
                options: {
                    target: ['public/font/embed/*.woff'],
                    fixDirLevel: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-data-uri');

    grunt.registerTask('default', ['dataUri']);
};