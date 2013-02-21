define(['backbone', 'categorymodel'], function(Backbone, CategoryModel) {
	var CategoryCollection = Backbone.Collection.extend({
		model: CategoryModel
	});

	return CategoryCollection;
});