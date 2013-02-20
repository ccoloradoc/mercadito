require.config({
	paths: {
		'postmodel' : 'triskelion/core/reader/models/postmodel',
		'postcollection': 'triskelion/core/reader/collections/postcollection',
		'postview': 'triskelion/core/reader/views/postview',
		'postcontroller': 'triskelion/core/reader/controllers/postcontroller'
	},

	shim: {
		'postmodel' : {
			deps: ['backbone'], exports: 'PostModel'
		},
		'postview': {
			deps: ['backbone', 'underscore', 'jquery', 'text!triskelion/core/reader/templates/post.html'],
			exports: 'PostView'
		},
		'postcollection': {
			deps: ['backbone', 'postmodel'], exports: 'PostModel'
		},
		'postcontroller': {
			deps: ['postview'], exports: 'PostController'
		}
	},

	waitSeconds: 15
});


require(['postcontroller', 'postcollection'], function(PostController, PostCollection) {
	var collection = new PostCollection();

	var reader = new PostController({
		'collection': collection
	});


	collection.add([
		{
			id: 1,
			fb_id: 'fb_id',
			post_user_fbid: 'post_user_fbid',
			post_user_picture: 'http://placekitten.com/50/50',
			post_type: 'post_type',
			post_title: 'Title 1',
			post_user_name: 'Cristian Colorado',
			post_description: 'The description 1',
			fb_link: 'fb_link',
			fb_img_link: 'http://placekitten.com/400/400',
			post_shipping: 'post_shipping',
			post_cost: 'post_cost',
			post_keyword : 'post_keyword',
			post_ext_ref: 'post_ext_ref',
			like_count: 'like_count',
			user_likes: 'user_likes'
		},

		{
			id: 2,
			fb_id: 'fb_id',
			post_user_fbid: 'post_user_fbid',
			post_user_picture: 'http://placekitten.com/50/50',
			post_type: 'post_type',
			post_title: 'Title 1',
			post_user_name: 'Cristian Colorado',
			post_description: 'The description 1',
			fb_link: 'fb_link',
			fb_img_link: 'http://placekitten.com/400/400',
			post_shipping: 'post_shipping',
			post_cost: 'post_cost',
			post_keyword : 'post_keyword',
			post_ext_ref: 'post_ext_ref',
			like_count: 'like_count',
			user_likes: 'user_likes'
		},

		{
			id: 3,
			fb_id: 'fb_id',
			post_user_fbid: 'post_user_fbid',
			post_user_picture: 'http://placekitten.com/50/50',
			post_type: 'post_type',
			post_title: 'Title 1',
			post_user_name: 'Cristian Colorado',
			post_description: 'The description 1',
			fb_link: 'fb_link',
			fb_img_link: 'http://placekitten.com/400/400',
			post_shipping: 'post_shipping',
			post_cost: 'post_cost',
			post_keyword : 'post_keyword',
			post_ext_ref: 'post_ext_ref',
			like_count: 'like_count',
			user_likes: 'user_likes'
		}
	]);

	return reader;

});