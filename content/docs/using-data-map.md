---
title: "Re-using the data and map"
draft: false
---


## Re-using and integrating the CycloFix map

### Share this map

Share this map by copying the link below and sending it to friends and family. 

https://mapComplete.osm.be/cyclofix.html

When you move the map around, the URL is changed a little bit to reflect where exactly you are looking. So move to the location you want to share, and copy the URL again to share that location:
https://mapComplete.osm.be/cyclofix.html?z=16&lat=50.8465573&lon=4.351697
 
When you change the map background or you hide some of the categories, this is also reflected in the URL, for example:
https://mapComplete.osm.be/cyclofix.html?&z=16&lat=50.734&lon=4.2363&background=aiv-latest&layer-drinkingwater=false&layer-bikeparking=false&layer-bikeOtherShop=false#element

To make sharing even easier, there is a share button on the map itself as well!


### Add to your home screen

You can easily add this website to your home screen for a native feel. Click the 'add to home screen button' in the URL bar to do this.

### Embed on your website

Please, embed this map into your website. We encourage you to do it — you don't even have to ask permission.
It is free, and always will be. The more people using this, the more valuable it becomes.

```html
<iframe src="https://mapComplete.osm.be/cyclofix.html" title="CycloFix with MapComplete"></iframe>;
```

To specify the location where the map should start out, add `&z=16&lat=50.846&lon=4.3516` at the end of the url, like this:

```html
<iframe src="https://mapComplete.osm.be/cyclofix.html&z=16&lat=50.846&lon=4.3516" title="Cyclofix with MapComplete"></iframe>;
```

Remember to fill in your own `lat=` (latitude) and `lon=` (longitude), and to use dots as the decimal seperator (like the example).
If you want the map to be more zoomed in, use a `z=` of more than 16 (up to 19), to make it more zoomed out, choose a smaller number (down to 1).


## Using the CycloFix data in your own tool

There are many ways to use OpenStreetMap data. If you want ALL THE DATA you could [download the entire planet](https://wiki.openstreetmap.org/wiki/Planet.osm), but it's probably more practical to download just Belgium from a service like [the Geofabrik download site](http://download.geofabrik.de/europe/belgium.html). They even offer shapefiles for those that like a more structured dataset.

In this article, we will work with the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) though. This is an API that is specialized in offering extremely fresh small and medium size datasets. If you are interested in some POI data for a specific area, Overpass is your friend.

There is a user interface for using the Overpass API called [Overpass turbo](https://wiki.openstreetmap.org/wiki/Overpass_turbo). [The tool](http://overpass-turbo.eu/) helps you build queries, build links to live data, export data and even make simple webmaps with basic styling. 

To be able to use the data, you need to have some understanding of the data model. A good resource for bicycle related data modeling in OSM is [this wiki page](https://wiki.openstreetmap.org/wiki/Bicycle).



### Example: buying a new bike

- Most places to buy a bicycle are `shop=bicycle`
- However, we need to exclude bicycle repair shops etc. These can be removed: exclude `service:bicycle:retail=no`. [Example](http://overpass-turbo.eu/s/Wvy)
- You can however buy bikes at some other places as well. For example, special concepts like "cycle cafés" (`amenity=cafe`, `amenity=pub`), clubs or non-profits, or general sports shops that also sell bicycles

Combined that gives us [this query](http://overpass-turbo.eu/s/WAE):

```
 [out:json][timeout:25];
 (
   nwr["shop"="bicycle"]["service:bicycle:retail"!="no"]({{bbox}});
   nwr["service:bicycle:retail"="yes"]({{bbox}});
 );
 out center;
 >;
 out body qt;
```

Once we have this, we can use the Export function to download the data, the map or a live link to this query. With such a live link, you can set up a nice little [umap] or [mapcontrib] instance to show the result. To make the first try a bit easier, you can simply clone [this MapContrib theme](https://www.mapcontrib.xyz/t/777329-Places_to_buy_a_biycle) or [this umap](http://umap.openstreetmap.fr/nl/map/places-to-buy-a-bicycle_485217) that already integrate the above layer. And if you spot an error, just head over to the CycloFix map!


