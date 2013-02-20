define(['backbone', 'underscore', 'jquery', 'text!triskelion/utils/log/templates/log_entry.html'], function(Backbone, _, $, tcode) {
	
	var LogView = Backbone.View.extend({
		options: {
			template: tcode	,
			el: $('#log')
		},

		initialize: function() {
			//_.bindAll(this, this.render);
			this.collection.bind('add', this.render, this);
		},

		render: function(entry) {
			console.log(entry);
			var template = _.template(this.options.template, entry.toJSON());
			this.$el.append($(template));
		},

		info: function(hdr, cnt) {
			this.collection.add({
				header: hdr,
				content: cnt
			});
		}
	});

	return LogView;
});