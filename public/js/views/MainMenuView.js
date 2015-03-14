define(
[
    'underscore',
    'backbone',
    'text!templates/MainMenuView.html'
],
function (_, Backbone, template)
{
    var MainMenuView = Backbone.View.extend({

        el: '#main-menu',

        template: _.template(template),

        initialize: function()
        {
            this.render();
            this.mainMenuResponsiveHook();
        },

        render: function()
        {
            this.$el.html(this.template());
        },

        mainMenuResponsiveHook: function()
        {
            var pull 		= $('#pull');
            var menu 		= this.$('ul');
            //var menuHeight	= menu.height();

            $(pull).on('click', function() {
                menu.slideToggle();
            });

            $(window).resize(function(){
                var w = $(window).width();
                if(w > 320 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        }
    });

    return MainMenuView;
});