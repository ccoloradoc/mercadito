define(['backbone', 'jquery', 'log'], function(Backbone, $, log) {

	var App = Backbone.View.extend({
		initialize: function() {
			
			log.info('header', 'content');

			$('.main.container').append($('<h2>Hey there baby!</h2>'));
		}
	});

	return App;
});