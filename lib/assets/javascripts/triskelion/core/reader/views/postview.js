define(['backbone', 'underscore', 'jquery', 'text!triskelion/core/reader/templates/post-small.html'], function(Backbone, _, $, htmlTemplate) {
	var PostView = Backbone.View.extend({
		options: {
			template: htmlTemplate	,
			el: $('#reader')
		},

		initialize: function() {
			console.log('hey there view')
			this.collection.bind('add', this.render, this);
		},

		render: function(entry) {
			console.log(entry);
			var template = _.template(this.options.template, entry.toJSON());
			this.$el.append($(template));
		}
	});

	return PostView;
});