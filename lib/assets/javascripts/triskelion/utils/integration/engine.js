/* Market Manager
 * By Cristian Colorado
 * Copyright Triskelion Sys 2012.
 * Any usage without write permision from author or company will be subject of legal actions
 */

/* Market Manager
 * By Cristian Colorado
 * Copyright Triskelion Sys 2012.
 * Any usage without write permision from author or company will be subject of legal actions
 */

define(['class', 'jquery', 'advancedenginemixin', 'webmixin'], function(Class, $, AdvancedEngineMixin, WebMixin) {

	var Engine = Class.extend({
		url: 'https://mercadito.herokuapp.com/services',
		
		init: function(options) {
			for(var key in options){
				this[key] = options[key];
			}
		},
		
		handleForm: function(form_id, service, events) {
			events.onSuccess = events.onSuccess || this.bind(this.genericOutput);
			events.onError = events.onError || this.bind(this.genericOutput);
			
			var options = {
					dataType: 'json',
					contentType: 'application/json',
					url: this.url + service,
					type: 'POST',
					error: events.onError,
					success: events.onSuccess
				};
			
			$(form_id).ajaxForm(options);
		},
		
		submitForm: function(form_id, service, events) {		
			var json = JSON.stringify($(form_id).serializeObject()); //Dependency
			
			events.onSuccess = events.onSuccess || this.bind(this.genericOutput);
			events.onError = events.onError || this.bind(this.genericOutput);
			
			var options = {
					type: 'POST',
					url: this.url + service,
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					data: json,
					success: events.onSuccess,
					error: events.onError
				};
			Log.info('MarketManager - Submit Form', options);
			$.ajax(options);
		},
		
		post: function(service, data, events) {
			events.onSuccess = events.onSuccess || this.bind(this.genericOutput);
			events.onError = events.onError || this.bind(this.genericOutput);
			
			var options = {
					type: 'POST',
					url: this.url + service,
					dataType: 'json',
					contentType: 'application/json',
					data: JSON.stringify(data),
					success: events.onSuccess,
					error: events.onError
				};
			Log.info('MarketManager - Submit Form', options);
			$.ajax(options);
		},
		
		get: function(service, params, events) {
			events.onSuccess = events.onSuccess || this.bind(this.genericOutput);
			events.onError = events.onError || this.bind(this.genericOutput);
			
			var options = {
					type: 'GET',
					url: this.url + service + '?' +this.toGetParam(params),
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					success: events.onSuccess,
					error: events.onError
				};
			
			$.ajax(options);
		},
		
		genericOutput: function() { Log.info('Default:', arguments); return true; } /*To be override*/
	});

	Engine.mixin(AdvancedEngineMixin, WebMixin);


	/*
	 *  Adding function to JQuery to serialize a form
	 * */
	$.fn.serializeObject = function() {
		   var o = {};
		   var a = this.serializeArray();
		   $.each(a, function() {
		       if (o[this.name]) {
		           if (!o[this.name].push) {
		               o[this.name] = [o[this.name]];
		           }
		           o[this.name].push(this.value || '');
		       } else {
		           o[this.name] = this.value || '';
		       }
		   });
		   return o;
		};

	return Engine;
});
