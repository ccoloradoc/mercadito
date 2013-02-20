define(['backbone','logentry', 'logview'], function(Backbone, LogEntry, LogView) {
	var Log = Backbone.Collection.extend({
		model: LogEntry
	});

	return Log;
});