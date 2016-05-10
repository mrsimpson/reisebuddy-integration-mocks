var simpleRestful = require('simple-restful');
var server = new simpleRestful.createServer({port: 8888, debug: true});

server.addResource({
    name: "customersByPhone",
    idField: "phone",
    repository: "File",
    repositoryOptions: {
      folderPath: 'MockData'
    }
});

server.run();
