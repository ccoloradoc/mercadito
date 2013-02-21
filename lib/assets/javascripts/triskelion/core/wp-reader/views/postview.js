define(['backbone', 'underscore', 'jquery', 'text!triskelion/core/wp-reader/templates/post.html'], function(Backbone, _, $, htmlTemplate){

	var PostView = Backbone.View.extend({
		options: {
			template: htmlTemplate,
			el : $('#blog')
		},

		initialize: function() {
			this.collection.bind('add', this.render, this);
		},

		render: function(entry) {
			var template = _.template(this.options.template, entry.toJSON());
			this.$el.append($(template));
		}
	});	

	return PostView;
});