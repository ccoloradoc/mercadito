define(['backbone', 'underscore', 'jquery', 'text!triskelion/utils/log/templates/log.html'], function(Backbone, _, $, tcode) {
	
	var LogView = Backbone.View.extend({
		options: {
			template: tcode	,
			el: $('#log')
		},

		initialize: function() {
			this.collection.bind('add', this.render, this);
		},

		render: function(entry) {
			console.log(entry);
			var template = _.template(this.options.template, entry.toJSON());
			this.$el.append($(template));
		}
	});

	return LogView;
});