define(['logview'], function(LogView) {
	var LogController = LogView.extend({
		info: function(hdr, cnt) {
			this.collection.add({
				header: hdr,
				content: cnt
			});
		}
	});

	return LogController;
});