/* Appication module */

define(['backbone'],function(Backbone) {
	'use strict';

	var App = _.extend({
		'config': require.appConfig,
		'initialize': function(){
			require(
				['router','views/app', 'views/section'],
				function(Router, AppView, SectionView){

					this.Router = Router;
					this.view = new AppView();
					this.view.render(new SectionView().renderHome(), '#container')
					this.view.render(new SectionView().renderServices(), '#container')
					this.view.render(new SectionView().renderLocations(), '#container')
					this.view.render(new SectionView().renderGrues(), '#container')
					this.view.render(new SectionView().renderConstructions(), '#container')
					this.view.render(new SectionView().renderRecrutements(), '#container')
					this.view.render(new SectionView().renderContact(), '#container')
					Backbone.history.start({ pushState: true });
					return this;
				}.bind(this)
				);
		}
	});
	window.App = App;
	return App;

});

