/*
*	Author> Cristian Colorado
*	Copyright 2012 - Triskelion Sys
*
*/

/*Snippet for log object*/
define(['backbone'], function(Backbone){

	var LogEntry = Backbone.Model.extend({
		defaults: {
			header: 'Header',
			content: 'Output Content',
			clazz: 'info'
		},

		initialize: function() {

		}

	});
	
	return LogEntry;
});
