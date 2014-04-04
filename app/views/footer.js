/*global define*/

define(['backbone', 'text!tpl/footer.html'], function(Backbone, tpl){
	'use strict';

	return Backbone.View.extend({
        'id'        : 'footer',
		'tagName'	: 'footer',
        'className': 'container',
		'initialze'	: function(){
		},
		'render': function(){
			this.$el.html(_.template(tpl));
			return this;
		}
	});
});
