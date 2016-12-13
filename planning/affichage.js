(function() {
"use-strict"


/*
affichage = function(tab) {
	tab.sort(function(creneau1, creneau2) {
		var date1 = new Date(creneau1.debut);
		var date2 = new Date(creneau2.debut);
		return date1 > date2;
	})
	var container = $("#container");
	var nbRow = 0;
	for (var i = 0; i < tab.length; i++) {
		var creneau = tab[i];
		creneau.date = new Date(creneau.debut);
		var column = creneau.date.getDay();
		createHtmlPanel(creneau).appendTo(row);	
	}
	
};

createHtmlPanel = function(creneau) {
	creneau.dateDeb = new Date(creneau.debut);
	creneau.dateFin = new Date(creneau.fin);

	var cell = $("<div />", {"class" : "creneau col-md-3"});
	var panel = $("<div />", {"class" : "panel panel-danger"});
	panel.appendTo(cell);
	$("<div />", { "class" : "summary panel-heading", text : creneau.resume }).appendTo(panel).appendTo(panel);
	var body = $("<div />", {"class" : "panel-body"});
	$("<div />", { "class" : "date", text : duration(creneau.dateDeb, creneau.dateFin) }).appendTo(body);
	$("<div />", { "class" : "place", text : creneau.lieu }).appendTo(body);
	body.appendTo(panel);
	return cell
}

*/
affichage = function(tab) {
	tab.sort(function(creneau1, creneau2) {
		var date1 = new Date(creneau1.debut);
		var date2 = new Date(creneau2.debut);
		return date1 > date2;
	})
	var container = $("#container");
	var row;
	for (var i = 0; i < tab.length; i++) {
		if (i % 4 == 0) {
			row = $("<div />", {"class" : "row"});
			row.appendTo(container);
		}
		var creneau = tab[i];
		creneau.date = new Date(creneau.debut);

		createHtmlPanel(creneau).appendTo(row);
		
	}
	
};

createHtmlPanel = function(creneau) {
	creneau.dateDeb = new Date(creneau.debut);
	creneau.dateFin = new Date(creneau.fin);

	var col = $("<div />", {"class" : "creneau col-md-3"});
	var panel = $("<div />", {"class" : "panel panel-danger"});
	panel.appendTo(col);
	$("<div />", { "class" : "summary panel-heading", text : creneau.resume }).appendTo(panel).appendTo(panel);
	var body = $("<div />", {"class" : "panel-body"});
	$("<div />", { "class" : "date", text : duration(creneau.dateDeb, creneau.dateFin) }).appendTo(body);
	$("<div />", { "class" : "place", text : creneau.lieu }).appendTo(body);
	body.appendTo(panel);
	return col
}
 
duration = function(dateDeb, dateFin) {
	return dateDeb.getDate() + ", " + dateDeb.getHours() + ":" + dateDeb.getMinutes() + " --- " + dateFin.getHours() + ":" + dateFin.getMinutes();
}

error = function() {
	console.log("ouh, que c'est dommage !!!");
};




// __MAIN__

tab = []
avoirToutLeTableau("tableauZave",function (json) {
	// TO BE REMOVED
	tab = json.donnees.tableau
	affichage(json.donnees.tableau);
});


})();