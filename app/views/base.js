/* Default base view*/

define(['backbone', 'bootstrap'], function(Backbone, Bootstrap){
    'use strict';

    return Backbone.View.extend({
        'id': 'wrapper',
        'tagName': 'div',
        'initialize': function() {
            this.$el.append(
                $('<div>').attr('id', 'header'),
                $('<div>').attr('id', 'container'),
                $('<div>').attr('id', 'footer')
            );
            $(document.getElementsByTagName('body')).append(this.$el);
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
        }
    });
});
