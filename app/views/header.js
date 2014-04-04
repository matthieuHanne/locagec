/*global define*/

define(['backbone', 'text!tpl/header.html'], function(Backbone, tpl){
	'use strict';

	return Backbone.View.extend({
        'id'        : 'nav',
		'tagName'	: 'div',
		'className'	: 'navbar-wrapper',
		'initialze'	: function(){
		},
		'render': function(){
			this.$el.html(_.template(tpl));
			return this;
		}
	});
});
