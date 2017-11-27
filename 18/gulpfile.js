const gulp = require('gulp');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const data = require('gulp-data');
const fs = require('fs');
const spritesmith = require('gulp.spritesmith');
const gulpIf = require('gulp-if');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('serve', ['pug', 'sass', 'js', 'copy', 'sprite'], () => {
	browserSync.init({
			server: {
				baseDir: "./build/"
			}
	});

	gulp.watch('src/', ['copy']);
	gulp.watch('src/assets/icon', ['sprite']);
	gulp.watch('src/**/*.sass', ['sass']);
	gulp.watch('src/**/*.pug', ['pug']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/data/*.json', ['pug', 'sass', 'js']);
	gulp.watch('build/**/*.*').on('change', browserSync.reload);
});

// PUG
gulp.task('pug', () => {
	return gulp.src('src/*.pug')
	.pipe(data( ()=> {
		return JSON.parse(fs.readFileSync('./src/data/data.json'));
	}))
	.pipe(pug({pretty: true}).on( 'error', ( error ) => {
		console.log( error );
	}))
	.pipe(gulp.dest('build'));
});

// SASS

gulp.task('sass', () => {
	setTimeout( () => {
		return gulp.src('src/assets/style.sass')
		.pipe(sass().on( 'error', ( error ) => {
			console.log( error );
		}))
		.pipe(sourcemaps.init())
		//.pipe(autoprefixer())
		//.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css/'));
	},500 );
});


// JS
gulp.task('js', () => {
	return gulp.src('src/block/**/*.js')
	.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/js/'));
});


// COPY
gulp.task('copy', () => {
	gulp.src('src/assets/fonts/**/*')
	.pipe(gulp.dest('build/fonts'))
	gulp.src(['src/assets/img/**/*', '!src/assets/img/sprite/*'])
		//.pipe(imagemin())
		.pipe(gulp.dest('build/img'));
});

// SPRITE
gulp.task('sprite', () => {
	let spriteData = gulp.src('src/assets/img/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css',
		cssVarMap: (sprite) => {
			sprite.name = 'my_' + sprite.name;
		}
	}));
	return spriteData.pipe( 
		gulp.dest('build/vendor/sprite')
	);
});

gulp.task('default', ['serve']);