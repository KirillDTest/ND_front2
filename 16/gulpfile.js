const gulp = require('gulp');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const data = require('gulp-data');
const fs = require('fs');
const spritesmith = require('gulp.spritesmith');
const gulpIf = require('gulp-if');


gulp.task('serve', ['pug', 'pug', 'stylus', 'copy', 'sprite'], () => {
	browserSync.init({
			server: {
				baseDir: "./build/"
			}
	});

	gulp.watch('src/', ['copy']);
	gulp.watch('src/assets/icon', ['sprite']);
	gulp.watch('src/**/*.styl', ['stylus']);
	gulp.watch('src/**/*.pug', ['pug']);
	gulp.watch('src/data/*.json', ['pug', 'stylus']);
	gulp.watch('build/**/*.*').on('change', browserSync.reload);
});

// PUG
gulp.task('pug', () => {
	return gulp.src('src/*.pug')
	.pipe(data( ()=> {
		return JSON.parse(fs.readFileSync('./src/data/data.json'));
	}))
	.pipe(pug({pretty: true}))
	.pipe(gulp.dest('build'));
});


// stylus
gulp.task('stylus', () => {
	return gulp.src('src/assets/*.styl')
	.pipe(stylus().on( 'error', ( error ) => {
		console.log( error );
	}))
	.pipe(gulp.dest('build/css/'));
});


// COPY
gulp.task('copy', () => {
	gulp.src('src/assets/fonts/**/*')
	.pipe(gulp.dest('build/fonts'))
	gulp.src('src/assets/img/**/*')
		.pipe(gulp.dest('build/img'));
});

// SPRITE
gulp.task('sprite', () => {
	var spriteData = gulp.src('src/assets/icon/*.png').pipe(spritesmith({
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