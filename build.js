var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var less = require('metalsmith-less');
var beautify = require('metalsmith-beautify');
var markdown = require('metalsmith-markdown');

Metalsmith(__dirname)
  .use(templates({
    engine: 'jade',
    directory: 'templates'
  }))
  .use(less({
    pattern: 'src/styles/style.less'
  }))
  .use(markdown())
  .use(beautify())
  .build(function(err) {
    if (err) throw err;
  });
