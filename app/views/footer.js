/*global define*/

define(['backbone', 'text!templates/footer.html'], function(Backbone, tpl){
	'use strict';

	return Backbone.View.extend({
        'id'        : 'footer',
		'tagName'	: 'footer',
		'initialze'	: function(){
		},
		'render': function(){
			this.$el.html(_.template(tpl));
			return this;
		}
	});
});
