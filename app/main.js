/* require initialisation*/
require.config({
    'baseUrl': require.appConfig.host,
    'paths': {
        'backbone': 'lib/backbone-min',
        'app': 'app/app',
        'router': 'app/router',
        'views': 'app/views',
        'templates': 'app/templates',
        'underscore': 'lib/lodash',
        'bootstrap': 'lib/bootstrap.min',
    },
    'shim': {
        'backbone': {
            'deps': [
                'underscore',
                'lib/jquery.min',
            ],
            'exports': 'Backbone'
        },
    }
});

define(['app'],
    function(App) {
    App.initialize();
});
