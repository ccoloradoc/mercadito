define(['backbone', 'postmodel'], function(Backbone, PostModel){
	var PostCollection = Backbone.Collection.extend({
		model: PostModel
	});

	return PostCollection;
});