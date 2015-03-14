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
        },

        parse: function( res ) {
            res.id = res._id;
            return res;
        }
    });

    return BuildingModel;
});