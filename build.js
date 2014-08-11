var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var less = require('metalsmith-less');
var markdown = require('metalsmith-markdown');
var stylus = require('metalsmith-stylus');

Metalsmith(__dirname)
  .use(templates({
    engine: 'jade',
  }))
  .use(stylus())
  .use(markdown())
  .build(function(err) {
    if (err) throw err;
  });
