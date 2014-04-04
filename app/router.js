/* Post index*/
define(['app', 'backbone'], function(App, Backbone) {
    'use strict';

	var Router = {
		'initialize': function(){
			var routes = {
				'routes':{ 
					'': 'index',
					'destockage': 'destockage',
					'services': 'services',
					'peinture': 'peinture',
					'electricite': 'electricite',
					'diaspora': 'diaspora',
					'contacts': 'contacts',
				},
				'index': function(){},
				'destockage': function(){ console.log('destokage')},
				'services': function(){},
				'peinture': function(){},
				'electricite': function(){},
				'diaspora': function(){},
				'contacts': function(){},
			};

		    new (Backbone.Router.extend(routes))();
	    }}; 
    return Router;
});


