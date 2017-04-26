You and a fellow frontend developer are making a map application together. The application allows calculations based on coordinates. You've both agreed that the following functionality is a requirement:

```
new Coordinate( new Coordinate(30, 90) + new Coordinate(70, 150) ).toString() === '{100,240}';.

new Coordinate( new Coordinate(250, 10) + new Coordinate(60, 430) + new Coordinate(80, 0) ).toString() === '{390,440}';
```

**Assignment:** Implement the ```Coordinate``` class to make the statements above true. The implementation must be generic and able to accept (at least) x and y values from 0 to 50000 (see coordinate.js).

*Assignment Files:* ```coordinate.js```