define(['backbone', 'jquery', 'logview', 'log'], function(Backbone, $, LogView, Log) {

	var App = Backbone.View.extend({
		initialize: function() {
			
			var collection = new Log();
			var  view = new LogView({'collection': collection});
			view.info('header', 'content');

			$('.main.container').append($('<h2>Hey there baby!</h2>'));
		}
	});

	return App;
});