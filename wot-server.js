var httpServer = require('./servers/http'),
	resources = require('./resources/model');

var server = httpServer.listen(resources.pi.port, function () {
	console.info('O teu Pi esta ativo e a correr na porta %s',
	resources.pi.port);
});


