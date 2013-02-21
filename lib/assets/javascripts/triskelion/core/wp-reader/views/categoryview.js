define(['backbone', 'underscore', 'jquery', 'text!triskelion/core/wp-reader/templates/category.html'], function(Backbone, _, $, htmlTemplate){
	var CategoryView = Backbone.View.extend({
		template: _.template(htmlTemplate),
		
		el: '#blog',

		events: {
			'click a.close' : 'close'
		},

		initialize: function() {
			this.collection.bind('add', this.render, this);
			this.initController();
		},

		render: function(entry) {
			var template = this.template(entry.toJSON());
			this.$el.append($(template));
		},

		close: function() {
			event.preventDefault();
			$(event.target).closest('.category').find('.content').toggle();
		}
	});

	return CategoryView;
});