In one of the administration modules of the DR TV Program Schedule System, you need a method to create a copy of the program card object below:

```
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
		durationMiliseconds: "1800000"
	}
};

/**
 * Method for copying object
 *
 * @method copyCard
 * @public
 */
DR.TV.copyCard = function(card) {
	// Return copied card.
};

var clonedProgramCard = DR.TV.copyCard(programCard);

console.log(clonedProgramCard !== programCard); // Must return true.
console.log(clonedProgramCard.details !== programCard.details); // Must return true.
```

**Assignment:** Write the copyCard method to copy the programCard object. Last console log should return true.

*Assignment Files:* ```copy.js```