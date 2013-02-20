/*
*	Author> Cristian Colorado
*	Copyright 2012 - Triskelion Sys
*
*/

/*Snippet for log object*/

define(function(){

	/*Defining Log*/
	var Log = {
		$output: null,
		
		enabled: true,
		
		boxCount: 1,
		
		setup: function (output) {
			this.$output = $(output);
			this.off();
		},
		
		info: function(title, object) {
			if(this.enabled) {
				var box = $('<div class="log"><div class="logHdr"></div><div class="logCnt"></div></div>');
				box.find('.logHdr').text(this.boxCount + ')' + title);
				box.find('.logCnt').append($(this.jBeautifier(object, 2)));
				this.$output.prepend(box);
				this.boxCount++;
			}
		},
		
		error: function(title, responseText) {
			if(this.enabled) {
				var box = $('<div class="log"><div class="logHdr"></div><div class="logResTxt"></div></div>');
				box.find('.logHdr').text(title);
				box.find('.logResTxt').append($(responseText));
				this.$output.prepend(box);
			}
		},
		
		jBeautifier: function(obj, tab) {
			var str = '<p style="padding-left:' + tab + 'em">{</p>';
			//Iterating our properties
			for (var key in obj) {
				if(obj.hasOwnProperty(key)) {
					if(typeof obj[key] == 'object') {
						str += '<p style="padding-left:' + (tab + 1) + 'em" >' + key + ' : ' + this.jBeautifier(obj[key], tab + 2) + '</p>' ;
					} else {
						str += '<p style="padding-left:' + (tab + 1) + 'em" >' + key + ' : ' + obj[key] + ',</p>';
					}
				}
			}
			return str + '<p style="padding-left:' + tab + 'em">},</p>';
		},
		
		clean: function() {
			this.$output.empty();
		},
		
		on: function() {
			this.$output.show();
		},
		
		off: function() {
			this.$output.hide();
		}
	};

	Log.setup('#log');
	Log.on();

	return Log;
});
