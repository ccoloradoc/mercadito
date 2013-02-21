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

 define(function(){

	var AdvancedEngineMixin = {
		
		feed: function (service, params, events) {
			events.onCount = events.onCount || this.bind(this.onCount);
			events.onElement = events.onElement || this.bind(this.onElement);
			events.onPaging = events.onPaging || this.bind(this.onPaging);
			
			_this = this;
			
			this.get(service, params, 
			{
				onSuccess: function (response) {
					Log.info('FeedResponse: ',response);
					if(response == null) {
						events.onCount(0);
					} else if(response[_this.element] instanceof Array) {
						events.onCount(response[_this.element].length || 0);
						for(var i in response[_this.element]) {
							var elements = response[_this.element];
							events.onElement(elements[i]);
						}
					} else {
						events.onCount(1);
						events.onElement(response[_this.element]);
					}
					
					if(response != null)
						events.onPaging(response[_this.element]);
				}
			});
		},
		
		feedPost: function (service, params, events) {
			events.onCount = events.onCount || this.bind(this.onCount);
			events.onElement = events.onElement || this.bind(this.onElement);
			events.onPaging = events.onPaging || this.bind(this.onPaging);
			
			_this = this;
			
			this.post(service, params, 
			{
				onSuccess: function (response) {
					Log.info('FeedResponse: ',response);
					if(response == null) {
						events.onCount(0);
					} else if(response[_this.element] instanceof Array) {
						events.onCount(response[_this.element].length || 0);
						for(var i in response[_this.element]) {
							var elements = response[_this.element];
							events.onElement(elements[i]);
						}
					} else {
						events.onCount(1);
						events.onElement(response[_this.element]);
					}
					
					if(response != null)
						events.onPaging(response[_this.element]);
				}
			});
		},
		
		//events
		onCount: function(number) {Log.info('DefaultCount:', {'number' : number});},   /*To be override*/
		
		onElement: function(element) { Log.info('DefaultElement:', element); }, /*To be override*/
		
		onPaging: function(paging) { Log.info('DefaultPagign:', paging); }, /*To be override*/

	};

	return AdvancedEngineMixin;
});