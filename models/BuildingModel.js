//var mongoose = require( 'mongoose' );
//
//mongoose.connect( 'mongodb://127.0.0.1:27017/krato_building' );

//Schemas
var Building = new global.db.Schema({
    name: String,
    address: String,
    status: String,
    description: String
});
//Models
var BuildingModel = global.db.model( 'Building', Building );

module.exports = {

    findAll: function( callback )
    {
        BuildingModel.find( function( err, books ) {
            if( err ) {
                callback( err );
            }

            callback( null, books );
        });
    },

    save: function(building, callback)
    {
        BuildingModel.create(building, function(err, data)
        {
            if (err)
            {
                return callback(err);
            }

            callback( null, data );
        });
    },

    remove: function(id, callback)
    {
        BuildingModel.findById( id, function( err, building )
        {
            if (err)
            {
                return callback(err);
            }

            if (building)
            {
                console.log('building: ',building);
                building.remove( function( err )
                {
                    if (err)
                    {
                        return callback(err);
                    }
                    callback(null);
                });
            }
            else
            {
                callback("Cannot find building with id: ", id);
            }
        });
    }
};