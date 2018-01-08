const opn = require('opn');

const StaticServer = require('static-server');

const server = new StaticServer({
    rootPath: './dist',
    name: 'static-server',
    port: 3000,
    host: '0.0.0.0',
    cors: '*',
    followSymlink: true,
});

server.start(() => {
    console.log('Server listening to', server.port); // eslint-disable-line no-console
});

opn('http://localhost:3000');