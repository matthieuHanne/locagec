/*global define*/

define(['backbone', 'text!tpl/root.html'], function(Backbone, tpl){
	'use strict';

	var view = Backbone.View.extend({
        'id'        : 'root-menu',
		'tagName'	: 'div',
		'className'	: 'navbar-wrapper',
		'initialze'	: function(){
	},
		'render': function(){
			this.$el.html(_.template(tpl));
			return this;
		}
	});

	return new view().render();
});
