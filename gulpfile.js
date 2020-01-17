"use strict";
var gulp = require("gulp");
var iconfont = require("gulp-iconfont");
var iconfontCss = require("gulp-iconfont-css");

var fontName = "crypto-icons";

gulp.task("webfont", function() {
  return gulp
    .src("src/svg/*.svg")
    .pipe(
      iconfontCss({
        fontName: fontName,
        path: "src/template.css",
        targetPath: "crypto-icons.css",
        fontPath: "",
        cssClass: "crypto-icon"
      })
    )
    .pipe(
      iconfont({
        fontName: fontName,
        prependUnicode: true,
        formats: ["eot", "ttf", "woff", "woff2"],
        normalize: true,
        fontHeight: 1001,
        descent: 200
      })
    )
    .pipe(gulp.dest("dist/"));
});

gulp.task(
  "default",
  gulp.series(
    "webfont",
    done => {
      done();
    }
  )
);
