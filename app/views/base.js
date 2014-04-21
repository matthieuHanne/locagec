/* Default base view*/

define(['backbone', 'bootstrap', 'text!tpl/root.html'], function(Backbone, Bootstrap, rootTpl){
    'use strict';

    return Backbone.View.extend({
        'id': 'wrapper',
        'tagName': 'div',
        'initialize': function() {
            this.$el.append(
                $('<div>').attr('id', 'depth-1'),
                $('<div>').attr('id', 'depth-2'),
                $('<div>').attr('id', 'depth-3')
            );
            this.$el.children('#depth-2').hide();
            $(document.getElementsByTagName('body')).append(this.$el);
            this.$el.children('#depth-1').html(_.template(rootTpl)); 
        },
        'render': function(el, target, option){
            if(el instanceof Backbone.View)
                el = el.$el;

            target = target ? this.$el.find(target) : this.$el;
            if( option === 'overwrite')
                target.empty().append(el);
            else
                target.append(el);

            return this;
        },
		'events': {
			'click .btn-default' : 'toggleDepth2',
			'click .navigation li' : 'goTo'
		},
		'toggleDepth2': function(event){
			var d2 = this.$el.children('#depth-2');
			event.preventDefault();

			/* Load the required template from http attribute 
			 * Allow to generalized the template selection
			 * */
			require(['views/leaf','text!tpl/'+ event.currentTarget.getAttribute("template")+'.html'],function(leaf, tpl){
				
				this.render(leaf.render(tpl), '#depth-2');
                        /*
                        App.view.render((new HomeView()).renderCarousel(), '#container');
                        App.view.render((new HomeView()).renderMarket(), '#container');
                        */
			d2.show();
			}.bind(this));
		},
    });
});
