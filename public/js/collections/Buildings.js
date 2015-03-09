define([
    'backbone',
    'models/BuildingModel'
],
function(Backbone, BuildingModel)
{
    var Buildings = Backbone.Collection.extend({
        model: BuildingModel,
        url: '/buildings'
    });

    return Buildings;
});