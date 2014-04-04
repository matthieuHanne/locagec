/*global define*/

define(['backbone', 'holder', 'text!tpl/home/carousel.html', 'text!tpl/home/market.html', 'text!tpl/home/rows.html'],
function(Backbone, Holder, tplCarousel, tplMarket, tplRows){
	'use strict';

	return Backbone.View.extend({
		'tagName'	: 'section',
		'initialze'	: function(){
		},
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
	});
});
