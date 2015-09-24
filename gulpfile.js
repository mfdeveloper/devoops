var path = require('path');
var gulp = require('gulp');
var fs = require('fs');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

gulp.task('install-deps', function(){
  return gulp.src(['bower_components/**/package.json'])
             .pipe(plugins.install());
});

/**
* Just run grunt tasks from 'fine-uploader'
* js dependency. Additional dependencies that
* need of grunt tasks to build a release, will be
* here in future
*/
gulp.task('build-deps', ['install-deps'], function(){

    var componentPath = 'bower_components/fine-uploader';
    if(!fs.existsSync(componentPath+'/_build')){
      require('gulp-grunt')(gulp,{
                  base: path.join(__dirname, componentPath),
                  verbose:true
              });

      runSequence('grunt-build');
    }
});
