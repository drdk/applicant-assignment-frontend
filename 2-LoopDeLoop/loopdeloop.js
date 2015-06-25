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