/* Application based view*/

define(['backbone', 'bootstrap', 'smoothscroll', 'text!tpl/app.html', 'text!tpl/sidebar.html'],
function(Backbone, Bootstrap, Smoothscroll, appTpl, sidebarTpl){
    'use strict';

    return Backbone.View.extend({
        'id': 'wrapper',
        'tagName': 'div',

        'initialize': function() {
        	this.$el.html(_.template(appTpl));
            $(document.getElementsByTagName('body')).append(this.$el);
            this.$el.find('#sidebar').html(_.template(sidebarTpl));
        },

		'events': {
			'click .sscroll' : 'slide',
		},
		'slide': function(event){
	        event.preventDefault();
            $('html,body').animate({
                scrollTop: $(event.currentTarget.hash).offset().top
            }, 1200);
		},
        'render': function(el, target, option){
            if(el instanceof Backbone.View)
                el = el.$el;

            target = target ? this.$el.find(target) : this.$el;
	
			//TODO: Refactor need
            if( option === 'overwrite')
                target.empty().append(el);
            else
                 target.append(el);

            return this;
        },
    });
});
