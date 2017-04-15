var express = require('express'),
	actuatorsRoutes = require('./../routes/actuators'),
	sersorRoutes = require('./../routes/sensors'),
	rsources = require('./../resources/model'),
	cors = requary('cors');

var app = express();

app.use(cors());

app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorRoutes);

app.get('/pi', function (req, res) {
	res.send('Isto e o WoT-Pi!')
});

module.exports = app;

