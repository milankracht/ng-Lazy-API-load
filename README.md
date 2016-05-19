# ng-Lazy-API-load
If you want to load huge amounts of api data into your web app, it may suffer from long loading times. It's better to do it the 'lazy way': load the data piece by piece when you scroll downwards a page. 
In this example I used the OMDB api to load movies containing the keyword 'Star'. In this app, the movies are loaded in chunks of 10. If you scroll down the page, the app starts loading another 10 automatically. Pressing the 'load more' button has the same effect.
The counter top right shows you the amount of loaded movies. To see the app loading the movies, I inserted a 'throttling emulation', which delays the loading of the movie titles. 

