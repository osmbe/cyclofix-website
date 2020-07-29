---
title: "Re-using the data and map"
draft: false
---

## Using the data

TODO: explain our data model on this page and link to the wiki

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

lorem ipsum

TO DO: write about iframe + content
