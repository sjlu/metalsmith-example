var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var markdown = require('metalsmith-markdown');
var stylus = require('metalsmith-stylus');
var permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .use(templates({
    engine: 'jade',
  }))
  .use(stylus())
  .use(markdown())
  .use(permalinks())
  .build(function(err) {
    if (err) throw err;
  });
