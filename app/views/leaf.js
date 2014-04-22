/*global define Leaf View*/
define(['backbone'],
function(Backbone){
	'use strict';

	var view = Backbone.View.extend({
		'tagName'	: 'section',
		'initialze'	: function(){
		},
		'render'	: function(tpl){
			this.$el.html(_.template(tpl)); 
			return this;
		},
		'events': {
			'click .add-keyword'	: 'addKeywordRow',
			'click .start-search' 	: 'startSearch',
			'click .start-crawl'	: 'startCrawl',
		},
		'addKeywordRow' : function(event){
			$('.col-xs-3:first-child').clone().appendTo('.keywords');
		},
		'startSearch' : function(event){
			//TODO: Alert
			//Request to API
			var requestData;
			$.post(App.config.apiUrl+'/search',requestData)
				.done(function(responseData){
					alert(ResponseData)
					App.Router.navigate('dashboard', {trigger: true})
				})
				.fail(function() {
				    alert( " Post failed" );
					App.Router.navigate('dashboard', {trigger: true})
				});
		},
		'startCrawl' : function(event){
			//TODO: Alert
			//Request to API
			var requestData;
			$.post(App.config.apiUrl+'/crawl',requestData)
				.done(function(responseData){
					alert(ResponseData)
					App.Router.navigate('dashboard', {trigger: true})
				})
				.fail(function() {
				    alert( "Post failed" );
					App.Router.navigate('dashboard', {trigger: true})
				});
		},
	});

	return view;
});
