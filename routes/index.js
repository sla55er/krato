var fs = require('fs');
var escapedFiles = ["index.js", "requireLogin.js", "session.js"];

module.exports = function(app) {
    //first we require the session route in order to trigger the session
    require('./session.js')(app);
    fs.readdirSync(__dirname).forEach(function(file) {
        if (escapedFiles.indexOf(file) != -1 || file.substr(file.lastIndexOf('.') + 1) !== 'js')
        {
            return;
        }
        var name = file.substr(0, file.lastIndexOf('.'));
        console.log(name);

        require('./' + name)(app);
    });
};