require.config({
    baseUrl: "js",

    paths: {
        "text": "vendors/require/text",
        "jquery": "vendors/jquery/jquery-1.11.2",
        "underscore": "vendors/underscore/underscore",
        "backbone": "vendors/backbone/backbone",
        "Sly": "vendors/sly/sly.min"
    },

    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "Sly": {
            deps: ["jquery"],
            exports: "Sly"
        }
    }
});

require([
    'views/MainMenuView',
    'models/BuildingModel',
    'views/BuildingsListView'
],
function(MainMenuView, BuildingModel, BuildingsListView)
{
    new MainMenuView();
    window.exposed = new BuildingsListView();
});
