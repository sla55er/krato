module.exports = function (req, res, next)
{
    if (!req.user)
    {
        res.send({
            status: "error",
            msg: "Authentication required!"
        });
    }
    else
    {
        next();
    }
};