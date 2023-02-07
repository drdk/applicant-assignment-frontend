In one of the administration modules of the DR TV Program Schedule System, you need a method to create a copy of the episode object below:

```
const episode = {
	id: 501,
	published: new Date(2010, 6, 26),
	title: "Kriminalkommissær Barnaby (3)",
	relatedIds: [544, 958],
	cleanName: /[^a-z0-9]+/gi,
	details: {
		description: "Det er meget virkeligt blod, der drypper på scenen i landsbyens amatørteater. En opførelse af Amadeus slutter dramatisk med, at Salieri skærer halsen over på sig selv. Men nogen har udskiftet teaterkniven med en rigtig, så Barnaby hvirvles ind i et nyt, kompliceret mordmysterium.",
		durationMilliseconds: 1800000
	}
};

/**
 * Method for copying object
 */
function copyEpisode(ep) {
	// Return a copy of the episode.
}

// const clonedEpisode = copyEpisode(episode);

// Basic test of functionality
// console.log(clonedEpisode !== episode); // Must return true.
// console.log(clonedEpisode.details !== episode.details); // Must return true.
```

**Assignment:** Write the `copyEpisode` method to copy the `episode` object. Last console logs should return true.

*Assignment Files:* ```copy.js```
