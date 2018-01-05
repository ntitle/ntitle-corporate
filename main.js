var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './dist',            // required, the root of the server file tree
    name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
    port: 3000,               // optional, defaults to a random port
    host: '0.0.0.0',       // optional, defaults to any interface
    cors: '*',                // optional, defaults to undefined
    followSymlink: true,      // optional, defaults to a 404 error
    templates: {
        index: 'index.html',
        privacy: 'privacy.html',
        terms: 'terms.html'
    }
});

server.start(function () {
    console.log('Server listening to', server.port);
});