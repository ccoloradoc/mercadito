// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
// TKS: JS loaded using require.js & requirejs-rails plugin
// https://github.com/jwhitley/requirejs-rails/
//


require.config({
	paths: {
        /*Defining Vendor Code*/
		"jquery" : "jquery/jquery",
		"underscore" : "underscore-amd/underscore",
		"backbone" : "backbone-amd/backbone",
		"bootstrap" : "bootstrap.css/js/bootstrap",
        "text" : "requirejs-text/text",
        /*Defininf Triskelion code*/
        "class" : "triskelion/core/class",
        "log" : "triskelion/utils/log/setup",
        "reader" : "triskelion/core/reader/setup"
	},

	shim: {
        /*Vendor*/
		'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
        	deps: ['jquery']
        },
        'jquery': {
        	exports: '$'
        },
        /*Triskelion*/
        'class' : {
            exports: 'Class'
        },

        'reader': {
            deps: ['backbone', 'underscore', 'jquery']
        }
	}
});

require(['bootstrap', 'text'], function(bootstrap) {
	//Just load the damn thing!
});

require(['views/app', 'reader'], function(AppView, reader) {
	new AppView;
});