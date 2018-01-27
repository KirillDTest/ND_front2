const gulp = require('gulp');
const image = require('gulp-image'); // уменьшает размер картинок 
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const connect = require('gulp-connect'); // поднимает сервер
const plumber = require('gulp-plumber');  // не дает упасть серверу
const notify = require('gulp-notify') // сообщает об шибке

gulp.task('image-comp', function(){
	gulp.src(['./src/img/**/*.jpg', './src/img/**/*.png'])  //  ** - любая вложеность папок
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(image())
		.pipe(gulp.dest('./dist/img'))
		.pipe(connect.reload())
})

gulp.task('html', function(){
	gulp.src('./src/**/*.jade')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(jade())
		.pipe(gulp.dest('./dist/'))
		.pipe(connect.reload())
})

gulp.task('css', function(){
	gulp.src(['./src/style/**/*.scss','./src/style/**/*.sass'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass())
		.pipe(gulp.dest('./dist/style'))
		.pipe(connect.reload())
})

gulp.task('watch', function(){
	gulp.watch(['src/style/**/*.scss', 'src/style/**/*.sass'], {cwd:'./'}, ['css'])  // следит за изменениями в файлах
	gulp.watch('src/**/*.jade', {cwd:'./'}, ['html'])
	gulp.watch(['src/img/**/*.jpg', 'src/img/**/*.png'], {cwd:'./'}, ['image-comp'])
})

gulp.task('connect', function(){
	connect.server({
		port: 3000,
		livereload: true,
		root: './dist'
	})
})

gulp.task('default', ['image-comp', 'css', 'html', 'watch', 'connect'])
