module.exports = function(app)
{
    app.get('/logout', function(req, res) {
        req.session.reset();
        res.redirect('/');
    });
}