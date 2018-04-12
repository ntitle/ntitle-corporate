const opn = require('opn');
const server = require('node-static');
const path = require('path');

const dir = new server.Server(path.join(process.cwd(), 'dist'), {
    cache: false,
});


require('http').createServer((request, response) => {
    request.addListener('end', () => {
        //
        // Serve files!
        //
        dir.serve(request, response);
    }).resume();
}).listen(3000);

opn('http://localhost:3000');