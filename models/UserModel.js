//Schemas
var User = new global.db.Schema({
    username: String,
    password: String,
    email: String
});
//Models
var UserModel = global.db.model( 'User', User );

module.exports = {

    findOne: function( query, callback )
    {
        UserModel.findOne(query, function( err, user ) {
            if( err ) {
                callback( err );
            }

            callback( null, user );
        });
    }
};