/* Default base view*/

define(['backbone', 'bootstrap', 'text!tpl/root.html'], function(Backbone, Bootstrap, rootTpl){
    'use strict';

    return Backbone.View.extend({
        'id': 'wrapper',
        'tagName': 'div',
		//TODO: Export squeleton to a template
        'initialize': function() {
            this.$el.append(
                $('<div>').attr('id', 'depth-1').attr('class', 'col-md-4'),
                $('<div>').attr('id', 'depth-2').attr('class', 'col-md-4'),
                $('<div>').attr('id', 'depth-3').attr('class', 'col-md-4')
            );
            this.$el.children('#depth-2').hide();
            this.$el.children('#depth-3').hide();
            $(document.getElementsByTagName('body')).append(this.$el);
            this.$el.children('#depth-1').html(_.template(rootTpl)); 
        },

        'render': function(el, target, option){
            if(el instanceof Backbone.View)
                el = el.$el;

            target = target ? this.$el.find(target) : this.$el;
			var effect = 'slide';
			var options = { direction: 'right' };
			var duration = 700;
			//TODO: Refactor need
            if( option === 'overwrite'){
                $('#depth-3').empty().hide();
                target.hide().empty().append(el).slideToggle( "slow" );
			}
            else
                target.hide().empty().append(el).slideToggle( "slow" );

            return this;
        },
		'events': {
			'click .btn' : 'toggleDepth2',
			'click .navigation li' : 'goTo'
		},
		'toggleDepth2': function(event){
			event.preventDefault();
			App.Router.navigate(event.currentTarget.getAttribute("route"), {trigger: true})
			/* Load the required template from http attribute 
			 * Allow to generalized the template selection
			 * */
		},
    });
});
