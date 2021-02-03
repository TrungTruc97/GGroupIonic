cordova.define("de.sitevertreiber.cordova.NetworkInterfaces.network", function(require, exports, module) {
/*
 * usage:
 *
 * window.network.list(function(data) {
 *     alert(data);
 * });
 */

module.exports = {

    list : function(success, error) {

        cordova.exec(function(json) {

            var data = [];

			var matches = json.match(/([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}):([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/);

			if (!matches) {
	
	            var result = JSON.parse(json);
	
	            for (var key in result) {
	                if (result[key].ip) {
	                    var matches = result[key].ip.match(/([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/);
	
	                    if (matches) {
	                        result[key].ip = matches[1];
	                        data.push(result[key]);
	                    }
	                }
	            }
	            
			} else {
				data.push({id: 'wlan0', ip: matches[1], netmask: matches[2]})
			}

            success(data);
        }, function(err) {
            error(err);
        }, "Network", "list", []);
    }

};
});
