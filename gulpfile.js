var gulp = require('gulp'),
    clean = require('gulp-clean'),
    iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),

    runTimestamp = Math.round(Date.now() / 1000),
    fontPath = '/static/fonts/',
    fontName = 'pictrip_font', // font-family name
    className = 'iconfont', // class name
    template = 'fontawesome-style'; // tpl name;

var createFontDemo = function (glyphs){
    // 设置demo模版需要的参数
    var options = {
        glyphs: glyphs.map(function(glyph) {
            // 字体信息
            return {
                name: glyph.name,
                codepoint: glyph.unicode[0].charCodeAt(0)
            }
        }),
        fontName: fontName, // 字体名字
        timer: Date.now(), // 时间戳，编译的时候会放到引用后面
        fontPath: fontPath, // css 引用的路径
        className: className
    };

    // 字体图标样式
    gulp.src('./static/templates/iconfont.css')
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest('./static/fonts/css/'));

    // 字体图标演示
    gulp.src('./static/templates/demo.html')
        .pipe(consolidate('lodash', options))
        .pipe(gulp.dest('./static/fonts/'));

    // .htaccess文件 解决跨域问题
    gulp.src('./static/templates/.htaccess')
        .pipe(gulp.dest('./static/fonts/'));

    // demo样式，实际项目中不需要
    gulp.src('./static/templates/demo.css')
        .pipe(gulp.dest('./static/fonts/css/'));
}

gulp.task('iconfont', ['cleanFonts'], function(cb) {
    gulp.src('./static/svg/*.svg')
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true, // svg文件前自动加上Unicode
            normalize: true, //如果编译后的字体出现了变形，就要加上normalize、fontHeight选项
            fontHeight: 1001,
            formats: ['ttf', 'eot', 'woff'], // 默认：['ttf', 'eot', 'woff'], 还可以加'woff2', 'svg'
            timestamp: runTimestamp // recommended to get consistent builds when watching files
        }))
        .on('glyphs', function(glyphs) {
            createFontDemo(glyphs);
        })
        .pipe(gulp.dest('./static/fonts/'));
    cb();
});

gulp.task('cleanFonts', function(cb) {
    return gulp.src('./static/fonts').pipe(clean());
});
