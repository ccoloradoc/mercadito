require.config({
	paths: {
		"logcollection" : "triskelion/utils/log/collections/logcollection",
        "logmodel" : "triskelion/utils/log/models/logmodel",
        "logview" : "triskelion/utils/log/views/logview",
        "logcontroller" : "triskelion/utils/log/controllers/logcontroller"
	},

	shim: {
		'logmodel' : {
            deps: ['backbone'],
            exports: 'LogModel'
        },
        'logview': {
            deps: ['backbone', 'underscore', 'jquery'],
            exports: 'LogView'  
        },
        'logcollection' : {
            deps: ['backbone', 'logmodel'],
            exports: 'LogCollection'
        },
        'logcontroller' : {
            deps: ['logview'],
            exports: 'LogController'
        }
	}
});


define(['logcontroller', 'logcollection'], function(LogController, LogCollection) {
	//Singleton
	if(typeof log == 'undefined')
		var  log = new LogController({'collection': new LogCollection()});
	
	return log;
});