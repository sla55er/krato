var UserModel = require( '../models/UserModel');

function invalidateUser(req, res)
{
    if (req.session)
    {
        req.session.reset();
    }

    res.send({
        status: "error",
        msg: "Invalid User"
    });
}

module.exports = function(app)
{
    app.post('/login', function(req, res)
    {
        UserModel.findOne({ email: req.body.email }, function(err, user)
        {
            if (!user)
            {
                invalidateUser(req, res);
                //res.render('login.jade', { error: 'Invalid email or password.' });
            }
            else
            {
                if (req.body.password === user.password)
                {
                    console.log('logged in');
                    // sets a cookie with the user's info
                    req.session.user = user;
                    res.send({
                        status: "ok",
                        msg: "Logged In",
                        data: "admin"
                    });
                }
                else
                {
                    invalidateUser(req, res);
                }
            }
        });
    });
};