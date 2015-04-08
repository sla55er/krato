//Schemas
var User = new global.db.Schema({
    username: String,
    password: String,
    email: String
});
//Models
var UserModel = global.db.model( 'User', User );

/*UserModel.create({
    email: "krato@admin.com",
    password: "pass"
}, function(err, data)
{
    if (err)
    {
        console.log(err);
    }

});*/

module.exports = {

    findOne: function( query, callback )
    {
        UserModel.findOne(query, function( err, user )
        {
            if( err )
            {
                callback( err );
            }

            callback( null, user );
        });
    }
};