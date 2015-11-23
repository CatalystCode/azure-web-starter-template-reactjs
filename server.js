var http = require('http');
var express = require('express');
var server = express();
var configFile = './config.json';
var fs = require('fs');
var AZURE_CONFIG_PROPS = ['APPINSIGHTS_INSTRUMENTATIONKEY', 'AAD_AUTH_CLIENTID'];

var configuration = {
  load: function (envProps) {
      var defaultConfig = {};
	  var logStr = '';
  
	  if(envProps && envProps.length > 0){
	  	 	  envProps.forEach(function (item) {
			    if (process.env[item])
					    defaultConfig[item] = process.env[item];
			  });
	    this.save(JSON.stringify(defaultConfig), configFile);
	  }
	},
	save: function(config, file){
		fs.writeFile(file, config, function (err) {
		        if (err) {
		            return console.log('Err: ' + err);
		        }

		        console.log("The config file was saved to !" + file);
		});
	}
};

server.use(express.static(__dirname));

var port = process.env.PORT || 1337;
server.listen(port, function() {
    console.log('listening on port ' + port);
});

if(!process.env.configLoaded){
  configuration.load(AZURE_CONFIG_PROPS);
  process.env.configLoaded = true;
}
