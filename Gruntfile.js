var pkg = require('./package.json');

module.exports = function (grunt) {
  grunt.initConfig({
        browserify: {
            lib: {
                src: './src/index.js',
                dest: './tmp/index.js',
                options: {
                    debug: true,
                    extensions: ['.js'],
                    transform: [["babelify", { "stage": 0 }]]
                }
            }
        },
        copy: {
            dist: {files: [{
                            expand: true,
                            dot: true,
                            src: [
                                'assets/**/*.*',
                                '*.html'
                            ],
                            dest: 'dist/'
                        },
                        {
                            dot: true,
                            src: [
                                './tmp/index.js'
                            ],
                            dest: 'dist/js/index.debug.js'
                        },
                        {
                            expand: true,
                            dot: true,
                            cwd: 'bower_components/bootstrap/dist',
                            src: ['fonts/*.*'],
                            dest: 'dist/'
                        },
                        {
                            expand: true,
                            dot: true,
                            cwd: 'bower_components/fontawesome',
                            src: ['fonts/*.*'],
                            dest: 'dist/'
                        },
                        {
                            expand: true,
                            dot: true,
                            cwd: 'bower_components/react-widgets/dist',
                            src: ['fonts/*.*'],
                            dest: 'dist/'
                        }]
                    }
        },
        cssmin: {
          vendor: {
            files: [{
              expand: true,
              dot: true,
              cwd: './',
              src: ['./dist/vendor/vendor.css'],
              ext: '.min.css'
            }]
          }
        },
        watch: {
      		src: {
      			// source files to watch:
      			files: ['assets/styles/**/*', 'src/**/*.js'],
      			// When assets are changed:
      			tasks: ['build']
      		}
      	},
        karma: {
          production: {
            configFile: 'karma.conf.js',
            autoWatch: false,
            singleRun: true
          },
          dev: {
            configFile: 'karma.conf.js'
          }
        },
        uglify: {
            source: {
                files: {
                    './dist/js/index.min.js': ['./tmp/index.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/js/index.min.js.map'
                },
            },
            vendor: {
                files: {
                    './dist/vendor/vendor.min.js': ['./dist/vendor/vendor.js']
                },
                options: {
                    sourceMap: true,
                    sourceMapName: './dist/vendor/vendor.min.js.map'
                },
            }
        },
        concat: {
            css:{
              src: './assets/styles/**.css',
			        dest: './dist/assets/styles/main.css'
            }
        },
        bower_concat: {
            all: {
                dest: './dist/vendor/vendor.js',
                cssDest: './dist/vendor/vendor.css',
                bowerOptions: {
                    relative: false
                },
                mainFiles: {
                      'jquery': ['dist/jquery.min.js', 'dist/jquery.min.map'],
                      'bootstrap': ['dist/css/bootstrap.css', 'dist/js/bootstrap.min.js', 'dist/css/bootstrap.css.map'],
                      'fontawesome': ['css/font-awesome.min.css'],
                      'remarkable-bootstrap-notify': ['dist/bootstrap-notify.min.js']
                }
            }
        },
        clean: ['./dist', './tmp']
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', ['karma:production']);
    grunt.registerTask('test-dev', ['karma:dev']);
    grunt.registerTask('build-dev', ['watch']);
    grunt.registerTask('build', ['clean', 'test', 'browserify:lib', 'copy', 'uglify:source', 'bower_concat', 'uglify:vendor', 'concat:css', 'cssmin:vendor']);
};
