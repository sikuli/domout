var stream = require("../lib/stream");

describe("domout", function() {
  describe("stream", function() {
    describe("templates", function() {
      describe("log", function() {
        beforeEach(function() {
          var log = require("../templates/log/template");
          spyOn(stream, "rawStream");
          log("test");
        });

        it("calls rawStream", function() {
          expect(stream.rawStream).toHaveBeenCalled();
        });
      });

      describe("console", function() {
        beforeEach(function() {
          var console = require("../templates/console/template");
          spyOn(stream, "rawStream");
          console.write("test");
        });

        it("calls rawStream", function() {
          expect(stream.rawStream).toHaveBeenCalled();
        });
      });
    });
  });
});
