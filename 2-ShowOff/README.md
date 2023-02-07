The Lyd department wants a prototype of what a Lyd spots list frontpage could look like.

The API endpoint documentation can be found here:
	https://api.dr.dk/radio/swagger/index.html?urls.primaryName=v2#/Pages/Pages_GetPage_WithSpotForLive

https://api.dr.dk/radio/v2/pages/forside will return a list of rows of DR Lyd spots.

You need to add the following HTTP header to use the API:

```
x-apikey: 6Wkh8s98Afx1ZAaTT4FuWODTmvWGDPpR
```

**Assignment:** Create a simple single page application reading the data from the API endpoint above, using React.

There are many ways to solve this assignment — feel free to use your creativity, and feel free to only display a couple of the rows for simplicity.

The solution should be mobile-friendly.

*You're allowed to keep a static copy of the data feed in your solution to avoid cross-domain issues.*

*Assignment Files:* None, add your own.
