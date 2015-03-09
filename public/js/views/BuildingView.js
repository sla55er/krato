define([
    'underscore',
    'backbone',
    'text!templates/building.html'
],
function(_, Backbone, buildingTemplate)
{
    var BuildingView = Backbone.View.extend({
        tagName: 'li',
        //className: 'bookContainer',
        template: _.template( buildingTemplate ),

        interval: void 0,

        events: {
            'click': 'onBuildingClick',
            'click .delete': 'deleteBook'
        },

        render: function() {
            //better approach for the next line
            this.$el.css({"background-image": "url(" + this.model.get('defaultImage') + ")"});
            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        },

        onBuildingClick: function()
        {
            if (this.$el.hasClass('active'))
            {
                debugger;
            }
        },

        deleteBook: function() {
            // Delete model
            this.model.destroy();
            // Delete view
            this.remove();
        }
    });

    return BuildingView;
});