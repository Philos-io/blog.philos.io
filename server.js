var express = require('express'),
	app = express();



app.use(express.static(__dirname));


app.listen(process.env.PORT || 9000);