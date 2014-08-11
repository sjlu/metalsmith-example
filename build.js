var Metalsmith = require('metalsmith');
var jade = require('metalsmith-jade');
var less = require('metalsmith-less');

Metalsmith(__dirname)
  .use(jade({
    pretty: false
  }))
  .use(less({

  }))
  .build(function(err) {
    if (err) throw err;
  });
