define([
    'jquery',
    'Sly',
    'backbone',
    'models/BuildingModel',
    'collections/Buildings',
    'views/BuildingView'
],
function($, Sly, Backbone, BuildingModel, Buildings, BuildingView)
{
    var BuildingsListView = Backbone.View.extend({

        subViews: [],

        el: '#buildings',

        events:{
            'click #add':'addBuilding'
        },

        activeView: void 0,

        initialize: function( )
        {
            //move this somewhere else
            this.initializeSly();

            this.collection = new Buildings( );
            this.collection.fetch({reset: true});
            this.listenTo( this.collection, 'add', this.renderBuilding );
            this.listenTo( this.collection, 'reset', this.render );
            this.listenTo( this.collection, 'remove', this.removeBuilding );
        },

        // render library by rendering each book in its collection
        render: function()
        {
            this.collection.each(function( item ) {
                this.renderBuilding( item );
            }, this );
        },

        initializeSly: function()
        {
            var self = this;
            var $frame = $('#effects');
            var $wrap  = $frame.parent();
            var options = {
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                activateMiddle: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 3,
                scrollBar: $wrap.find('.scrollbar'),
                scrollBy: 1,
                speed: 300,
                elasticBounds: 1,
                easing: 'swing',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1
            };

            this.sly = new Sly($frame, options).init();

            this.sly.on('active', function (eventName, itemIndex) {
                self.activeView = self.subViews[itemIndex];
            });

            $('body').on('keydown', function(ev)
            {
                if (ev.keyCode == 37)
                {
                    self.sly.prev();
                }
                else if (ev.keyCode == 39)
                {
                    self.sly.next();
                }
            })
        },

        // render a book by creating a BookView and appending the
        // element it renders to the library's element
        renderBuilding: function( item ) {
            //debugger;
            var buildingView = new BuildingView({
                model: item
            });

            this.subViews.push(buildingView);

            this.sly.add( buildingView.render().el );
            //this.$el.append( buildingView.render().el );
        },

        addBuilding: function( e ) {
            //e.preventDefault();
            var formData = {
                name: "Krali Marko",
                address: "ul.'Hristo Danov' 18",
                status: "Finished",
                description: "nice building"
            };

            this.collection.create( formData );
        },

        removeBuilding: function(model)
        {
            for (var i = 0; i < this.subViews.length; i++)
            {
                var currentView = this.subViews[i];
                if (currentView.model.id == model.id)
                {
                    this.sly.remove(currentView.$el);
                    this.subViews.splice(i, 1);
                    break;
                }
            }
        }
    });

    return BuildingsListView;
});