module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      vendor: {
        src: ['js/vendor/jquery*.js', 'js/vendor/underscore*.js', 'js/vendor/backbone*.js', 'js/vendor/*.js', '!js/vendor/all.js'],
        dest: 'js/vendor/all.js',
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      vendor: {
        files: {
          'js/vendor.min.js': ['js/vendor/all.js']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/*.js', '!js/vendor/*']
    },
    watch: {
      js: {
        files: ['<%= jshint.all %>'], // exclude the vendor files from linting,
        tasks: ['jshint']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('setup', ['concat:vendor', 'uglify:vendor']);

};