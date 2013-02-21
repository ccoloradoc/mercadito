define(['backbone', 'underscore', 'jquery', 'text!triskelion/core/wp-reader/templates/post.html'], function(Backbone, _, $, htmlTemplate){

	var PostView = Backbone.View.extend({
		template: _.template(htmlTemplate),

		//el: #<category> set on creation

		initialize: function() {
			this.initController();
			this.collection.bind('add', this.render, this);
		},

		render: function(entry) {
			var template = this.template(entry.toJSON());
			this.$el.append($(template));
		}
	});	

	return PostView;
});