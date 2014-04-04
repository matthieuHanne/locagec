/* App */

define(['backbone'],function(Backbone) {
	'use strict';

	var App = _.extend({
		'config': require.appConfig,
		'initialize': function(){
			require(
				['router', 'views/base'],
				function(Router, BaseView){

					/*Router initialisation*/
					Router.initialize();

					this.view = new BaseView();

					Backbone.history.start({ pushState: true });
					return this;
				}.bind(this)
			);
		}
	});
	window.App = App;
	return App;

});
