define([
    'backbone',
],
function( Backbone )
{
    var BaseView = Backbone.View.extend({
        logger: function () {
            console.log(1);
        }
    });

    return BaseView;
});