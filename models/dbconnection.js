'use strict';
var mongoose = require( 'mongoose' );
var connectionString = 'mongodb://localhost:27017/krato_building';

global.db = global.db ? global.db : mongoose.connect( connectionString, function(err)
{
    if (err)
    {
        console.log(err);
    }
});