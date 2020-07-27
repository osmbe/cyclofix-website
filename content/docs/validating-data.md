---
title: "Validating data"
draft: false
---

When you edit OpenStreetMap (OSM), all your changes are applied automatically. This makes for a fast mapping environment where you can easily work together.
But of course, there are risks to this approach. The OpenStreetMap community handles those risks by constant validation.

For this tool, we use the OSMCha. The tool was developped by Mapbox, a company that provides basemaps and other services to large corporations. They provide this tool to any mapper free of charge.

### In practice

Every edit you make in OSM is bundled in a little file, a _changeset_ ([example](https://www.openstreetmap.org/changeset/13349393)). 
This file is forever associated with your _username_ ([example](https://www.openstreetmap.org/user/Mdri)) and the object you changed ([example](https://www.openstreetmap.org/relation/2450509/history)).

In OSMCha we filter changesets:
- if they have the _changeset comment_ "pomp" (the name of our instance)
- if they are in Belgium
- if the changeset has NOT been reviewed yet within OSMCha
- if the contributor has NOT been marked as _trusted_ by the current OSMCha user
- if the edit was made with the _Editor_ "MapComplete 0.0.0"

If you first go to OSMCha.org and connect your OpenStreetMap.org, [you can see our filter](https://osmcha.org/filters?filters=%7B%22editor%22%3A%5B%7B%22label%22%3A%22MapComplete%200.0.0%22%2C%22value%22%3A%22MapComplete%200.0.0%22%7D%5D%2C%22geometry%22%3A%5B%7B%22label%22%3A%7B%22coordinates%22%3A%5B%5B%5B2.3746718878202273%2C51.53758926802823%5D%2C%5B5.775754540642026%2C51.616603830376306%5D%2C%5B6.872365302537133%2C50.45740876295116%5D%2C%5B5.934683636572714%2C49.44507309382715%5D%2C%5B4.869858693865012%2C49.414063694114276%5D%2C%5B1.9614562384095393%2C50.98063493933668%5D%2C%5B2.3746718878202273%2C51.53758926802823%5D%5D%5D%2C%22type%22%3A%22Polygon%22%7D%2C%22value%22%3A%7B%22coordinates%22%3A%5B%5B%5B2.3746718878202273%2C51.53758926802823%5D%2C%5B5.775754540642026%2C51.616603830376306%5D%2C%5B6.872365302537133%2C50.45740876295116%5D%2C%5B5.934683636572714%2C49.44507309382715%5D%2C%5B4.869858693865012%2C49.414063694114276%5D%2C%5B1.9614562384095393%2C50.98063493933668%5D%2C%5B2.3746718878202273%2C51.53758926802823%5D%5D%5D%2C%22type%22%3A%22Polygon%22%7D%7D%5D%2C%22comment%22%3A%5B%7B%22label%22%3A%22pomp%22%2C%22value%22%3A%22pomp%22%7D%5D%2C%22checked%22%3A%5B%7B%22label%22%3A%22Not%20Reviewed%22%2C%22value%22%3A%22False%22%7D%5D%2C%22hide_whitelist%22%3A%5B%7B%22label%22%3A%22Yes%22%2C%22value%22%3A%22True%22%7D%5D%7D).
We do not go through all the changes. When we see a new edit, we try to assess if the edit is plausible. We look at the data in the context of other OSM data: maybe it's a duplicate, maybe something that is usually besides a road is mapped in the middle of the road; or inside a building!

Then we cross-reference with aereal imagery, the photos provided by the contributor or on Mapillary (a crowd-sourced street-level imagery datasource).
We make corrections and imporvements if needed, and mark the changeset as "good" or "bad" within OSMCha.

If we have checked a few edits of a new contributor and found them to be in perfect shape, we mark the contributor as a "trusted user". This list is shared within our team.

During this process, we can leave a message on the Changeset for the contributor and the community to see. This creates a public record on any doubts there might be about this particular data-point.
