var gulp = require('gulp'),
    watch = require('gulp-watch'),
    bowserSync = require('browser-sync').create();

gulp.task('watch', function(){
    
    bowserSync.init({
            server: {
                baseDir: app
            }    
    });
    
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
        
});

