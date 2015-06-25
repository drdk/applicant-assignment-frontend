You are browsing the Stack Overflow website for a solution to a problem you've been working on. You stumble upon a thread, where someone asks how to stop a nested loop and added the following snippet:

```
var loopIndex, loopTimes = 1000, i, innerTimes = 100; // Do not edit this line

for (loopIndex = 0; loopIndex < loopTimes; loopIndex++)
{
     for (i = 0; i < innerTimes; i++)
     {
		if (i === 10)
		{
			console.log( 'I HIT THE GOAL!' );
			break;
		}
	 }
}
```

**Assignment:** Help him out by making both loops stop when ```i``` hits 10.

*Assignment Files:* ```loopdeloop.js```