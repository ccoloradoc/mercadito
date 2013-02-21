require.config({
	paths: {
		//Categories
		'categorymodel' : 'triskelion/core/wp-reader/models/categorymodel',
		'categorycollection': 'triskelion/core/wp-reader/collections/categorycollection',
		'categoryview': 'triskelion/core/wp-reader/views/categoryview',
		'categorycontroller': 'triskelion/core/wp-reader/controllers/categorycontroller',
		//Post
		'postmodel' : 'triskelion/core/wp-reader/models/postmodel',
		'postcollection': 'triskelion/core/wp-reader/collections/postcollection',
		'postview': 'triskelion/core/wp-reader/views/postview',
		'postcontroller': 'triskelion/core/wp-reader/controllers/postcontroller',
		'engine': 'triskelion/utils/integration/engine'
	},

	shim: {
		//Category
		'categorymodel' : {
			deps: ['backbone'], exports: 'CategoryModel'
		},
		'categoryview': {
			deps: ['backbone', 'underscore', 'jquery', 'text!triskelion/core/wp-reader/templates/category.html'],
			exports: 'CategoryView'
		},
		'categorycollection': {
			deps: ['backbone', 'categorymodel'], exports: 'CategoryModel'
		},
		'categorycontroller': {
			deps: ['categoryview', 'postcontroller', 'postcollection'], exports: 'CategoryController'
		},
		//Post
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
	}
});

define(['categorycontroller', 'categorycollection', 'engine'], function(CategoryController, CategoryCollection, Engine){
	var content = new CategoryController({
		'collection': new CategoryCollection,
		'engine': new Engine({ url: 'http://blog.triskelion-sys.com/api/core'})
	});

	content.load();
});