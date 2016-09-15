

Conversion = {

	_json : "",


	convertLine : function(line) {
		if (line.indexOf(":") != -1) {
			champs = line.split(":");
			this._json += '\t"'+ champs[0] + '" : "' + champs[1] + (line.includes("END:VEVENT") ? '"\n' : '",\n');
		}
	},

	convert : function() {
		var icsData = document.getElementById("icsData").value;
		this._json = "[";
		icsArray = icsData.split("BEGIN:VEVENT");
		icsArray.shift();
		for (var i = 0; i < icsArray.length; i++) {
			var lines = icsArray[i].split("\n");
			lines.shift();
			this._json += "{\n";
			for (var j = 0; j < lines.length; j ++) {
				this.convertLine(lines[j])
			}
			this._json += "},\n"
		}
		this._json += "]";
		document.getElementById("jsonData").value = this._json;
	},


	handleEvent : function() {
		this.convert();
	}

}

document.getElementById("convertir").addEventListener(
	"click", Conversion
);