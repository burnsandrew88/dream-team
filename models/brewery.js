var orm = require("../config/orm");

var brewery = {

	selectAll: function(locId, typeId, cb){
		orm.selectAll("beer", "brewery", "brewery_id", "locationId", locId, "type_id", typeId, function(res){
			cb(res);
		});
	}
};

module.exports = brewery;