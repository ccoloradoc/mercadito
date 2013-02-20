define(['backbone','logmodel'], function(Backbone, LogModel) {
	var LogCollection = Backbone.Collection.extend({
		model: LogModel
	});

	return LogCollection;
});