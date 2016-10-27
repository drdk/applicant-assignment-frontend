var DR = {
	TV: {}
};

var programCard = {
	id: 501,
	published: new Date(2010, 6, 26),
	getNextLiveInfo: function(id) {
		return "http://www.dr.dk/mu-online/api/1.0/programcard/" + id;
	},
	title: "Kriminalkommissær Barnaby (3)",
	relatedIds: [544, 958],
	cleanName: new RegExp(/[^a-z0-9]+/gi),
	details: {
		description: "Det er meget virkeligt blod, der drypper på scenen i landsbyens amatørteater. En opførelse af Amadeus slutter dramatisk med, at Salieri skærer halsen over på sig selv. Men nogen har udskiftet teaterkniven med en rigtig, så Barnaby hvirvles ind i et nyt, kompliceret mordmysterium.",
		durationMiliseconds: 1800000
	}
};

/**
 * Method for any copying object
 *
 * @method copyCard
 * @public
 */
DR.TV.copyCard = function(card) {
	// Return a copy of the card.
};

var clonedProgramCard = DR.TV.copyCard(programCard);

console.log(clonedProgramCard !== programCard); // Must return true.