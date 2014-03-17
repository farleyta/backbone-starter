module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

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

  grunt.registerTask('default', ['watch']);

};