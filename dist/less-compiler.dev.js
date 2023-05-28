"use strict";

var less = require('less-compiler');

var opts = {
  sourceMap: true
};
less.fromFile('./main.less', opts, function (err, css) {
  console.log(css);
});