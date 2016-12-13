
class Conversion {

	constructor(source, cible) {
		this.source = document.getElementById(source);
		this.cible = document.getElementById(cible);
		this.json = [];
	}



	convert() {
		var icsArray = this.source.value.split("BEGIN:VEVENT");
		icsArray.shift();
		for (var i = 0; i < icsArray.length; i++) {
			var lines = icsArray[i].split("\n");
			lines.shift();
			var creneau = {}
			for (var j = 0; j < lines.length; j++) {
				var line = lines[j].split(':');
				if (line[0] == "DTSTART")
					creneau.debut = line[1];
				else if (line[0] == "DTEND")
					creneau.fin = line[1]
				else if (line[0] == "SUMMARY")
					creneau.resume = line[1];
				else if (line[0] == "LOCATION")
					creneau.location = line[1];

			}
			this.json.push(creneau);
			this.cible.value = JSON.stringify(this.json);
			
		}
	}


	handleEvent() {
		this.convert();
	}

}


document.getElementById("convertir").addEventListener(
	"click", new Conversion("icsData", "jsonData")
);