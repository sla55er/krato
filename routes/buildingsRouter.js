var BuildingModel = require( '../models/BuildingModel');

module.exports = function(app){

    app.get('/buildings', function(req, res)
    {
        BuildingModel.findAll( function(err, books)
        {
            if (err)
            {
                return res.send(err);
            }

            res.send(books);
        });
    });

    app.post( '/buildings', function( req, res )
    {
        var building = {
            name: req.body.name,
            address: req.body.address,
            status: req.body.status,
            description: req.body.description
        };

        BuildingModel.save(building, function (err, book)
        {
            if (err)
            {
                return res.send(err);
            }

            res.send(book);
        });
    });

    app.delete( '/buildings/:id', function( req, res )
    {
        BuildingModel.remove(req.params.id, function(err)
        {
            if (err)
            {
                console.log('err: ',err);
                return res.send({
                    status: "error",
                    error: err
                });
            }

            res.send({status: "ok"});
        });
    });

    //other routes..
};



