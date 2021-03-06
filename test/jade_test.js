var grunt = require("grunt");

exports.jade = {

  setUp: function(done) {
    grunt.helper("testContribTask", "jade", done);
  },

  helper: function(test) {
    
     var expectSimple = '<div id="test" class="test"><span id="data">data</span><div>testing</div></div>'
       , resultSimple = grunt.file.read("test/fixtures/output/jade.html")
       , expectInclude = '<html><head><title>TEST</title></head><body></body></html><p>hello jade test</p>'
       , resultInclude = grunt.file.read("test/fixtures/output/jadeInclude.html")

     test.expect(2);
     test.equal(expectSimple, resultSimple, "should compile jade templates to html");
     test.equal(expectInclude, resultInclude, "should compile jade templates to html with an include");
     test.done();
  }

};
