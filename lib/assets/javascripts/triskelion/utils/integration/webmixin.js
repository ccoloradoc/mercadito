define(function(){
	 var WebMixin = {
	 	toGetParam : function(source) {
			if(arguments.length == 0)
				source = this;
			var str = "";
			//Iterating our properties
			for (var key in source) {
				if(source.hasOwnProperty(key)) {
					//Not an inherited property/prototype
					str += '&' + key + '=' + source[key];
				}
			}
			return str;
		}
	 };

	return WebMixin;
 });