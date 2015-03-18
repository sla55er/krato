var UserModel = require( '../models/UserModel');

module.exports = function(app)
{
    app.use(function (req, res, next)
    {
        if (req.session && req.session.user)
        {
            UserModel.findOne({email: req.session.user.email}, function (err, user)
            {
                if (err)
                {
                    res.send({
                        status: "error",
                        msg: err
                    })
                }

                if (user)
                {
                    req.user = user;
                    delete req.user.password; // delete the password from the session
                    req.session.user = user;  //refresh the session value
                }
                // finishing processing the middleware and run the route
                next();
            });
        }
        else
        {
            next();
        }
    });
};