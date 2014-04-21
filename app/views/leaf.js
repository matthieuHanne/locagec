/*global define*/
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
		/*
		'renderCarousel': function(){
            this.id = 'home';
			this.$el.html(_.template(tplCarousel));
			return this;
		},
		'renderMarket': function(){
            this.$el.addClass('marketing').addClass('container')
			this.$el.html(_.template(tplMarket));
			return this;
		},
		'renderRows': function(){
            this.id = 'rows';
			this.$el.html(_.template(tplRows));
			return this;
		}
		*/
	});

	return new view();
});
