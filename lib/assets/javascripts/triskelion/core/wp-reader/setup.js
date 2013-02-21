require.config({
	paths: {
		'postmodel' : 'triskelion/core/wp-reader/models/postmodel',
		'postcollection': 'triskelion/core/wp-reader/collections/postcollection',
		'postview': 'triskelion/core/wp-reader/views/postview',
		'postcontroller': 'triskelion/core/wp-reader/controllers/postcontroller'
	},

	shim: {
		'postmodel' : {
			deps: ['backbone'], exports: 'PostModel'
		},
		'postview': {
			deps: ['backbone', 'underscore', 'jquery', 'text!triskelion/core/wp-reader/templates/post.html'],
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

define(['postcontroller', 'postcollection'], function(PostController, PostCollection){
	var collection = new PostCollection;

	var cnt = new PostController({
		'collection': collection
	});

	collection.add([
	    {
	      "id": 1,
	      "type": "post",
	      "slug": "hello-world",
	      "url": "http:\/\/localhost\/wordpress\/?p=1",
	      "title": "Hello world!",
	      "title_plain": "Hello world!",
	      "content": "<p>Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!<\/p>\n",
	      "excerpt": "Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!\n",
	      "date": "2009-11-11 12:50:19",
	      "modified": "2009-11-11 12:50:19",
	      "categories": [],
	      "tags": [],
	      "author": {
	        "id": 1,
	        "slug": "admin",
	        "name": "admin",
	        "first_name": "",
	        "last_name": "",
	        "nickname": "",
	        "url": "",
	        "description": ""
	      },
	      "comments": [
	        {
	          "id": 1,
	          "name": "Mr WordPress",
	          "url": "http:\/\/wordpress.org\/",
	          "date": "2009-11-11 12:50:19",
	          "content": "<p>Hi, this is a comment.<br \/>To delete a comment, just log in and view the post's comments. There you will have the option to edit or delete them.<\/p>\n",
	          "parent": 0
	        }
	      ],
	      "comment_count": 1,
	      "comment_status": "open"
	    },
	    {
	      "id": 2,
	      "type": "post",
	      "slug": "hello-world",
	      "url": "http:\/\/localhost\/wordpress\/?p=1",
	      "title": "Hello world!",
	      "title_plain": "Hello world!",
	      "content": "<p>Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!<\/p>\n",
	      "excerpt": "Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!\n",
	      "date": "2009-11-11 12:50:19",
	      "modified": "2009-11-11 12:50:19",
	      "categories": [],
	      "tags": [],
	      "author": {
	        "id": 1,
	        "slug": "admin",
	        "name": "admin",
	        "first_name": "",
	        "last_name": "",
	        "nickname": "",
	        "url": "",
	        "description": ""
	      },
	      "comments": [
	        {
	          "id": 1,
	          "name": "Mr WordPress",
	          "url": "http:\/\/wordpress.org\/",
	          "date": "2009-11-11 12:50:19",
	          "content": "<p>Hi, this is a comment.<br \/>To delete a comment, just log in and view the post's comments. There you will have the option to edit or delete them.<\/p>\n",
	          "parent": 0
	        }
	      ],
	      "comment_count": 1,
	      "comment_status": "open"
	    }
  	]);

	return cnt;
});