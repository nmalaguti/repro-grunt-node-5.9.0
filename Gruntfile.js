'use strict';

module.exports = function ( grunt ) {

  /**
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-myth');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-bower-installer');
  grunt.loadNpmTasks('grunt-index');

  /**
   * This is the configuration object Grunt uses to give each plugin its
   * instructions.
   */
  grunt.initConfig({
    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: [
      'build'
    ]
  });

  /**
   * The default task is to clean.
   */
  grunt.registerTask( 'default', [ 'clean' ] );
};
