---
title: "Using data"
date: 2020-07-23T17:00:00+02:00
draft: false
---

Used all over the place; examples.

Downloadable: download.geofabrik

Live data: Overpass
> use in overpass-turbo / export data
> integrate in website (e.g. umap)


## Buying a new bike

- most places to buy a bicycle are `shop=bicycle`
- however, we need to exclude bicycle repair shops etc. These can be removed: exclude `service:bicycle:retail=no`
http://overpass-turbo.eu/s/Wt7
- but you can buy bikes at some other places as well. For example, special concepts like "cycle cafés" (`amenity=cafe`, `amenity=pub`), clubs or non-profits, or general sports shops that also sell bicycles
http://overpass-turbo.eu/s/Wt8
