You and a fellow frontend developer are making a map application together. The application allows calculations based on coordinates. You've both agreed that the following implementation is a requirement:

```
new Coordinate( new Coordinate(30, 90) + new Coordinate(70, 150) ).toString() === '{100,240}';
```

**Assignment:** Implement ```Coordinate``` utilizing ```valueOf``` and ```toString``` methods to make the statement above true. The implementation must be generic and able to accept x and y numbers from 0 to 50000 (see coordinate.js).

*Assignment Files:* ```coordinate.js```