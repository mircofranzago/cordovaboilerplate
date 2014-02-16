define(function(require) {

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var StructureView = require("views/StructureView");
  var MyView = require("views/MyView");
  var MapView = require("views/MapView");

  var AppRouter = Backbone.Router.extend({

    routes: {
      "": "showStructure",
      "myview": "myView",
      "map": "map"
    },

    initialize: function(options) {
      this.currentView = undefined;
    },

    myView: function() {
      // create a model with an arbitrary attribute for testing the template engine
      var model = new MyModel({
        key: "testValue"
      });
      // create the view
      var page = new MyView({
        model: model
      });
      // show the view
      this.changePage(page);
    },

    map: function() {
      // create the view and show it
      var page = new MapView();
      this.changePage(page);
    },

    // load the structure view
    showStructure: function() {
      if (!this.structureView) {
        this.structureView = new StructureView();
        // put the el element of the structure view into the DOM
        document.getElementsByTagName('body')[0].appendChild(this.structureView.render().el);
      }
      // go to first view
      this.myView();
    },

  });

  return AppRouter;

});