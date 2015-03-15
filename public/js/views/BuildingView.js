define([
    'underscore',
    'backbone',
    'text!templates/BuildingView.html',
    'views/PopupHelper'
],
function(_, Backbone, buildingTemplate, PopupHelper)
{
    var BuildingView = Backbone.View.extend({
        tagName: 'li',
        //className: 'bookContainer',
        template: _.template( buildingTemplate ),

        interval: void 0,

        events: {
            'click': 'onBuildingClick',
            'click .delete-building': 'deleteBook'
        },

        render: function() {
            //find better approach for the next line
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

        deleteBook: function(e) {
            e.stopPropagation();

            var self = this;

            PopupHelper.confirmation(function()
            {
                self.model.destroy();
            });
        }
    });

    return BuildingView;
});