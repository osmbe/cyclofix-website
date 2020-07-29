---
title: "Mapathons and more"
draft: false
---

A mapathon is a coordinated mapping event where the public is invited to make online map improvements in their local area to improve coverage, basically a kind of crowdsourcing. During #osoc20, we organized a mapathon to boost the CycloFix project. It is important to have the right goals in mind when organizing such an event. Our goal was two-sided: increase the coverage of mapped cycling infrastructure in the Brussels Capital Region (collect as much data as possible) AND build a community to keep the map updated (introducing others to OSM).

The MapComplete app is ideal to get new people out on the street to add or check original data! Don't plan for a bring-your-computer event, but make it clear to everyone that this is an outdour thing!

But how do you set up a mapathon to speed up the data inventory? Below you can find some helpful tips, based on our experience, to get started.

### Decide on an event model

We chose this model:
* Online introduction (with an optional meeting point)
* On the street mapping
* Post-event socializing

This allowed for some social distancing while still having some interaction. It would have been possible to do this entirely digital, but the human interaction at the start and end did provide some very valuable input.

### Before the event

- Decide on event model
- Get a location if needed. You don't need anything fancy - though a projector is handy
- Decide on registrations. We used [Eventbrite](https://cyclofix) and sent a follow-up mail to give a lot of detail about how things would go.
- Decide on an area of focus
- How to devide the work?
-- We created [a simple map](https://cyclofix.osm.be/signup-map/index.html) to say "I will map here", then pushed people to go somewhere where no-one else was going
-- More structural approaches are possible, for example with [a tasking manager](https://wiki.openstreetmap.org/wiki/Tasking_Manager)
- Create a video introduction
- Set up a live video channel for help. We used Jitsi. There was only one person who used this. You need to assign someone to keep an eye on the channel.
- Create some buzz! Use social media, contact organizations who work around the topic etc
- Finish the app at least 15 minutes before the event :)


### During the event
- Make sure people have a help-line (this was not really used in our case)
- Make sure you can start collecting feedback
- Be prepared for live data analysis (because that makes it FUN). We used:
* [Show me the way](https://osmlab.github.io/show-me-the-way/#comment=MapComplete) with the hashtag "Mapcomplete"
* Pascal Neis's [OSM Changesets](http://resultmaps.neis-one.org/osm-changesets?comment=MapComplete%20pomp#9/50.9783/3.8232) filtered by the same
* An Overpass-Turbo query with the "newer" filter to return just data that was touched since the event started


### After the event
- Be prepared for [data clean-up](https://cyclofix.osm.be/docs/validating-data/)
- Send a thank you email
- Send a follow-up email with project status after a little while

### Make pretty maps

During our event 24 people mapped 498 objects. The most productive mappers added 70-100 objects! The map below shows all the added or edited data from the event, coloured by the unique contributor.

![mapathon map](../../static/images/mapathon_map.jpg)

