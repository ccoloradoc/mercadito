define(['categoryview', 'underscore', 'postcontroller', 'postcollection'], function(CategoryView, _, PostController, PostCollection) {
	var CategoryController = CategoryView.extend({
		initController: function() {
			_.bindAll(this);
			this.collection.bind('add', this.newCategory);
		},

		load: function() {
			this.options.engine.get('/get_category_index', {callback : '?'}, { onSuccess: this.push })
		},

		push: function(data) {
			Log.info('get_category_index', data);
			this.collection.add(data.categories);
		},
		
		newCategory: function(category) {
			var cnt = new PostController({
				'collection': new PostCollection,
				el: '#' + category.get('slug'),
				slug: category.get('slug'),
				engine: this.options.engine
			});

			cnt.load();
		}

	});

	return CategoryController;
});


