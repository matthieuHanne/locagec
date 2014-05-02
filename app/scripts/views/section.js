/*global define*/

define(['backbone'],function(Backbone){
	'use strict';

	return Backbone.View.extend({
		'tagName'	: 'section',
		'initialze'	: function(){},
		'renderHome': function(){
			require(['text!tpl/home.html', 'superslides'], function(servicesTpl, Superslides){
				this.$el.attr('id','home');
				this.$el.addClass('home');
				this.$el.html(_.template(servicesTpl));
				/*Set Slider*/
				$('#home-slide').superslides({
			        animation: 'fade', // You can choose either fade or slide
			        play: 6000,
			        pagination: false
			    });
			}.bind(this));
			return this;
		},
		'renderServices': function(){
			require(['text!tpl/services.html','sudoslider'], function(servicesTpl, Sudoslider){
				this.$el.attr('id','services');
				this.$el.addClass('services');
				this.$el.html(_.template(servicesTpl));
				$("#slider-services").sudoSlider({
			        speed: 650,
			        auto: true,
			        pause: 3000,
			        prevNext: false,
			        responsive: true,
			        useCSS: true,
			        continuous: true,
			        effect: "slide",
			        updateBefore: true
			    });

			}.bind(this));
			return this;
		},
		'renderLocations': function(){
			require(['text!tpl/locations.html'], function(locationsTpl){
				this.$el.attr('id','locations');
				this.$el.addClass('locations').addClass('odd');
				this.$el.html(_.template(locationsTpl));
			}.bind(this));
			return this;
		},
		'renderGrues': function(){
			require(['text!tpl/grues.html'], function(gruesTpl){
				this.$el.attr('id','grues');
				this.$el.addClass('grues');
				this.$el.html(_.template(gruesTpl));
			}.bind(this));
			return this;
		},
		'renderConstructions': function(){
			require(['text!tpl/constructions.html'], function(constructionsTpl){
				this.$el.attr('id','constructions');
				this.$el.addClass('constructions').addClass('odd');
				this.$el.html(_.template(constructionsTpl));
			}.bind(this));
			return this;
		},
		'renderRecrutements': function(){
			require(['text!tpl/recrutements.html'], function(recrutementsTpl){
				this.$el.attr('id','recrutements');
				this.$el.addClass('recrutements');
				this.$el.html(_.template(recrutementsTpl));
			}.bind(this));
			return this;
		},
		'renderContact': function(){
			require(['text!tpl/contact.html'], function(contactTpl){
				this.$el.attr('id','contact');
				this.$el.addClass('contact').addClass('odd');
				this.$el.html(_.template(contactTpl));
			}.bind(this));
			return this;
		}

	});
});
