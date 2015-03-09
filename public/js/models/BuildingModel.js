define([
    'backbone'
],
function(Backbone)
{
    var BuildingModel = Backbone.Model.extend({
        defaults: {
            name: "Fancy building",
            address: "Narodni buditeli 61",
            status: "In Construction",
            description: "Yeaa",
            defaultImage: "images/first.jpg",
            images: [
                "images/second.jpg",
                "images/third.jpg",
                "images/fourth.jpg"
            ],
            apartments: []
        }
        //parse: function( response ) {
        //    response.id = response._id;
        //    return response;
        //}
    });

    return BuildingModel;
});