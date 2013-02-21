define(['postview'], function(PostView) {
	var PostController = PostView.extend({
		initController: function() {
			_.bindAll(this);
		},

		load: function() {
			this.options.engine.get('/get_category_posts', {callback : '?', slug: this.options.slug}, { onSuccess: this.push })
		},

		push: function(data) {
			Log.info('get_category_posts', data);
			this.collection.add(data.posts);
		}
	});

	return PostController;
});