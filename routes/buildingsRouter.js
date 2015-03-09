var mongoose = require( 'mongoose' );


module.exports = function(app){

    mongoose.connect( 'mongodb://127.0.0.1:27017/krato_building' );

    //Schemas
    var Building = new mongoose.Schema({
        name: String
    });
    //Models
    var BuildingModel = mongoose.model( 'Building', Building );

    app.get('/buildings', function(req, res){
        return BuildingModel.find( function( err, books ) {
            if( !err ) {
                return res.send( books );
            } else {
                return console.log( err );
            }
        });
        //res.json({some: 3});
    });

    app.post( '/buildings', function( request, response ) {
        var building = new BuildingModel({
            name: request.body.name,
            address: request.body.address
        });
        building.save( function( err ) {
            if( !err ) {
                return console.log( 'created' );
            } else {
                return console.log( err );
            }
        });
        return response.send( building );
    });

    //other routes..
};



