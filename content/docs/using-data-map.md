---
title: "Re-using the data and map"
draft: false
---

## Using the data

TODO: explain our data model on this page and link to the wiki (+ overpass query?)

You are probably  already using OpenStreetMap data! Smartphone apps like [maps.me](http://resultmaps.neis-one.org/osm-changesets?comment=MapComplete%20pomp#9/50.9783/3.8232) are entirely based on OSM. Garmin hiking and biking GPS devices come pre-loaded with OSM. Hiking websites like RouteYou show their routes on top of OpenStreetMap. Every single map you can see on Facebook is made with OSM. And [we even discovered Tesla cars drive autonomously on parking lots with OpenStreetMap](https://teslamotorsclub.com/blog/2019/11/04/tesla-owners-can-edit-maps-to-improve-summon-routes/)!

There are many ways to use OpenStreetMap data. If you want ALL THE DATA you could [download the entire planet](https://wiki.openstreetmap.org/wiki/Planet.osm), but it's probably more practical to download just Belgium from a service like [the Geofabrik download site](http://download.geofabrik.de/europe/belgium.html). They even offer shapefiles for those that like a more structured dataset.

In this article, we will work with the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) though. This is an API that is specialized in offering extremely fresh small and medium size datasets. If you are interested in some POI data for a specific area, Overpass is your friend.

There is a user interface for using the Overpass API called [Overpass turbo](https://wiki.openstreetmap.org/wiki/Overpass_turbo). [The tool](http://overpass-turbo.eu/) helps you build queries, build links to live data, export data and even make simple webmaps with basic styling. 

* integrate in website (link to working umap instance)


**Example: buying a new bike

- most places to buy a bicycle are `shop=bicycle`
- however, we need to exclude bicycle repair shops etc. These can be removed: exclude `service:bicycle:retail=no`
http://overpass-turbo.eu/s/Wvy
- but you can buy bikes at some other places as well. For example, special concepts like "cycle cafés" (`amenity=cafe`, `amenity=pub`), clubs or non-profits, or general sports shops that also sell bicycles
http://overpass-turbo.eu/s/Wt8


## Re-using and integrating the map

### Share this map

Share this map by copying the link below and sending it to friends and family:
 https://pietervdvn.github.io/MapComplete/cyclofix.html?z=16&lat=50.8465573&lon=4.351697

### Add to your home screen

You can easily add this website to your home screen for a native feel. Click the 'add to home screen button' in the URL bar to do this.

### Embed on your website

Please, embed this map into your website. We encourage you to do it - you don't even have to ask permission.
It is free, and always will be. The more people using this, the more valuable it becomes.
* Include current location
* Enable the login-button
* Enable search bar
* Enable the welcome message
* Enable layer control
* Enable the 'add new POI' button

> <iframe src="https://pietervdvn.github.io/MapComplete/cyclofix.html?z=16&lat=50.8465573&lon=4.351697" title="cyclofix with MapComplete"></iframe>
