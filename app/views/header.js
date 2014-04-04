/*global define*/

define(['backbone', 'text!templates/header.tpl'], function(Backbone, tpl){
	'use strict';

	return Backbone.View.extend({
        'id'        : 'header'
		'tagName'	: 'header',
		'className'	: 'navbar-wrapper',
		'id': 'section1',
		'initialze'	: function(){
		},
		'render': function(){
			this.$el.html(_.template(tpl));
			return this;
		}
	});
});
