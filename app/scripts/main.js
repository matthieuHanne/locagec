require.config({
	paths: {
		'jquery': 'vendor/jquery/dist/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone',
		'views': 'views',
		'app': 'app',
		'router': 'router',
		'tpl': 'templates',
		'text': 'vendor/text/text',
		'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
		'sudoslider': 'vendor/sudoslider/sudoslider',
		'superslides': 'vendor/superslides/dist/jquery.superslides',
		'smoothscroll': 'vendor/smoothscroll/dist/smoothscroll'

	}
});

define(['app'],function(App) {
	App.initialize();
});
