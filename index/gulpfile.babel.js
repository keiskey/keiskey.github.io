import gulp from "gulp"
import browser from "browser-sync"

const config = {
  jade: {
    src: "./jade/*.jade",
    dest: "./",
    watch: "./jade/**/*.jade",
  },
  stylus: {
    src: "./stylus/*.styl",
    dest: "./css/",
    watch: "./stylus/**/*.styl",
  },
  js: {
    src: "./es/*.js",
    dest: "./js/",
  },
};

import jade from "gulp-jade"
import locals from "./jade/config.json"
gulp.task("jade", () => {
  const {src, dest} = config.jade;
  gulp.src(src)
    .pipe(jade({
      pretty: true,
      locals
    }))
    .pipe(gulp.dest(dest))
    .pipe(browser.stream())
});

import plumber from "gulp-plumber"
import stylus from "gulp-stylus"
import nib from "nib"
gulp.task("stylus", () => {
  const {src, dest} = config.stylus;
  gulp.src(src)
    .pipe(plumber())
    .pipe(stylus({
      use: nib(),
      // compress: true
    }))
    .pipe(gulp.dest(dest))
    .pipe(browser.stream())
});

import babel from "gulp-babel"
gulp.task("babel", () => {
  const {src, dest} = config.js;
  gulp.src(src)
    .pipe(babel())
    .pipe(gulp.dest(dest))
    .pipe(browser.stream())
});

gulp.task("server", () => {
  browser({
    server: {
      baseDir: __dirname
    },
    port: 8888,
    open: false,
    notify: false,
  })
});

gulp.task("watch", ["jade", "stylus"], () => {
  gulp.watch(config.jade.watch, ["jade"])
  gulp.watch(config.stylus.watch, ["stylus"])
  gulp.watch(config.js.src, ["babel"])
});

gulp.task("default", [
  // "server",
  "watch",
]);
