var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    cssNested = require('postcss-nested'),
    cssImport = = require('postcss-import'),

gulp.task('styles', function(){
   return gulp.src("./app/assets/styles/styles.css")
//   .on("error", function(errorInfo){
//       console.log(errorInfo.toString());
//       this.emit('end');
//   })
   .pipe(gulp.dest('./app/temp/styles/'));
        
});

