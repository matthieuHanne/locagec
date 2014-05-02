/* Application router*/

define(['app', 'backbone'], function(App, Backbone) {
    'use strict';

			var routes = {
				'routes':{ 
					'': 'index',
					'location': 'locations',
					'grue': 'grues',
					'service': 'services',
					'recrutement': 'recrutement',
					'contact': 'contact',
					'construction': 'construction',
				},
				'index': function(){
					console.log('index')
                        /*
                        App.view.render((new HomeView()).renderCarousel(), '#container');
                        App.view.render((new HomeView()).renderMarket(), '#container');
                        */
                },
				'grues': function(){ 
					console.log('grues')
					//require(['views/leaf','text!tpl/grues.html'],function(leaf, tpl){
					//	App.view.render(new leaf().render(tpl), '#depth-2', 'overwrite');
					//});
				},
				'locations': function(){ 
					//require(['views/leaf','text!tpl/locations.html'],function(leaf, tpl){
					//	App.view.render(new leaf().render(tpl), '#depth-2', 'overwrite');
					//});
				},
				'services': function(){
					//require(['views/leaf','text!tpl/services.html'],function(leaf, tpl){
					//	App.view.render(new leaf().render(tpl), '#depth-3');
					//});
				}
			};

		return new (Backbone.Router.extend(routes))();
});


