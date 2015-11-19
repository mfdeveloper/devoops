var path = require('path');
var gulp = require('gulp');
var fs = require('fs');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

/**
* Just run grunt tasks from 'fine-uploader'
* js dependency. Additional dependencies that
* need of grunt tasks to build a release, will be
* here in future
*/
gulp.task('build-deps', function(){

    var componentPath = 'bower_components/fine-uploader';
    if(!fs.existsSync(componentPath+'/_build')){
      require('gulp-grunt')(gulp,{
                  base: path.join(__dirname, componentPath),
                  verbose:true
              });

      runSequence('grunt-build');
    }
});

/**
* Simple local webserver to test the theme.
* To use this into a front-end application,
* use "browser-sync" node module into your
* custom gulp task :)
*/
gulp.task('serve', ['build-deps'], function(){
  plugins.connect.server({
    root:[__dirname],
    port:3005
  });
});
