import gulp from "gulp";
import plumber from "gulp-plumber";
import browser from "browser-sync"
// import configJSON from "./es/config.dev"

const config = {
  jade: {
    src: "./jade/*.jade",
    dest: ".",
    watch: "./jade/**/*.jade",
  },
  stylus: {
    src: "./stylus/!(_)*.styl",
    dest: "./css",
    watch: "./stylus/**/*.styl",
  },
  es: {
    src: ["./es/**/*.js", "./es/**/*.js"],
    dest: "./js",
    // watchはwebpackの機能を使う。
  },
};

// ----
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

// ----
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

// ----
import webpack from "webpack";
import webpackStream from "webpack-stream";
import webpackConfig from "./webpack.babel";
gulp.task("es", () => {
  const {src, dest} = config.es;
  return gulp.src(src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(dest))
    .pipe(browser.stream())
});

// ----
gulp.task("server", () => {
  browser({
    server: __dirname,
    port: 8000,
    open: false,
    notify: false,
  })
});

// ----
gulp.task("watch", ["jade", "stylus"], () => {
  gulp.watch(config.jade.watch, ["jade"])
  gulp.watch(config.stylus.watch, ["stylus"])
});

gulp.task("default", [
  "server",
  "es",
  "watch",
]);
