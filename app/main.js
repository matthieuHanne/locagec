/* require initialisation*/
require.config({
    'baseUrl': require.appConfig.host,
    'paths': {
        'backbone': 'lib/backbone-min',
        'app': 'app/app',
        'views': 'app/views',
        'templates': 'app/templates',
        'underscore': 'lib/lodash',
        'bootstrap': 'lib/bootstrap.min',
    },
    'shim': {
        'backbone': {
            'deps': [
                'lib/lodash',
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
