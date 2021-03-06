---
title: "CycloFix: The Story"
draft: false
---

Let us tell you a little story. Imagine a warm summer day with a gentle breeze. You decide to go for a cycling trip and happen to cross the Brussels Capital Region. Suddenly, however, you hear a silent hiss, you look down and notice a flat tire (*starts cursing*). Sounds familiar, right? 

Except if you happen to have a bicycle pump with you, you are stuck. So what do you do? You take out your phone and start looking for an answer on the mental question "Where can I find the nearest pump to get me back on track?". It would surprise you that chances are that the nearest pump Google Maps or any other website gives you isn't the nearest - if you even find one at all.

Especially during the COVID-19 pandemic, the number of people interested in cycling has grown exponentially, making the need for information about where to buy and maintain a bicycle more relevant than ever. And CycloFix is trying to meet that need...

## What was the problem?

The biggest issue at stake here is that there is a great need for (open) data about cycling infrastructure and other points of interest that can be relevant for cyclists. Think about bicycle pumps, repair stations, bike shops, public parkings and so on. 

Especially in a bureaucratic and fragmented area like Brussels, with multiple governments and organisations on different levels, such a data inventory can be a hard nut to crack. Besides, you need to know where to find the data in order to use it. It is to say that a data inventory in general requires a lot of work to collect and validate everything (at least if you want to do it in the right way).

## What is the solution?

The solution is actually quite straightforward and already exists: OpenStreetMap (OSM). The collaborative project to create a free editable map of the world is the perfect way to centralize all this data concerning cycling infrastructure in that global database (with the geodata being the main output). 

The good thing is that a lot of points of interest are already mapped in OSM. The big challenge, however, is to improve the data (both add new and improve existing) and use the crowd to maintain the database. That is, we need people to keep mapping new pumps, repair stations etc. for it to stay up-to-date and relevant. 

As mentioned before, the geodata is the main output of OSM. That's a polite way of saying that the user interface is often lacking. We focused on showing the data in a pretty way, easily consultable and editable. Finally, it is crucial that we help people, governments and organisations re-use the data and keep improving it.

As a result, we developped the CycloFix map/mapping tool that allows us to collect data about the whereabouts of bicycle pumps, repair stations, public racks and other points of interest in Brussels. As a result, cyclists will be able to quickly find the nearest infrastructure for their needs!

## How does it work?

The mapping tool itself works as follows:
* Add a pin to create a new point of interest
* Click on a pin to edit an existing point of interest
* Answer questions to provide more data, depending on the topic (i.e. repair station, shop, parking, ...)

  Example: when adding or editing a public parking spot, we ask for the type (racks, sheds, loops, ...) and the amount of bicycles that fit in.
 
![Adding a pin](/images/add.png)
 
![Editing a pin](/images/edit.png)

As a user, it is also important to understand the dynamics of adding data through our tool/MapComplete. Whenever a pin is added or edited, everything will be saved automatically in the OSM database. That also means that the data is open for everyone to (re-)use; i.e. it is not ours anymore. For example, even Facebook uses OSM data to create maps. In other words, people are not only contributing to our specific project, but are improving the database many others are using as well!

## How did we do it?

Initially, we started talking to all relevant stakeholders: the 19 municipalities in the Brussels Capital Region, cycling organisations/advocacy groups and (for the more technical part) the OSM community. 

We started building on already existing ideas like StreetComplete, MapContrib and Overpass-Turbo. Finally, we decided to use a mixture of StreetComplete and MapContrib called [MapComplete](https://github.com/pietervdvn/MapComplete). Our focus was on simplification: people should be able to contribute without any technical background. Therefore, three design requirements were imposed:
* Topical focus: the OSM data model needs to be refined or simplified to be able to extract subsets of data and to match it to simple multiple choice questions. The
number of topics needs to be limited to make sure our user base is sufficiently interested to make a good effort.
* Easy to validate: it should be simple and smooth to validate the (newly) provided data. After all, the quality is equally (if not more important) than trying to add every single point. You can learn more about data validation [here](https://cyclofix.osm.be/docs/validating-data/).
* No installation: users don't want to download and install a program, but want to be able to use it instantly. A responsive design that fully works on mobile is crucial.

As MapComplete is easy to use, deploy and modify it was the perfect candidate to build upon. During #osoc20 we shaped MapComplete to our needs and were able to test it out during a mapathon that was specifically organized to gather as much of the data needed as possible. You can learn more about such an event [here](https://cyclofix.osm.be/docs/mapathon/).

## What happens to CycloFix after #osoc20?

In the final stage it was essential that we rolled out the tool to both the local and global community. We made sure other parties such as governments or cycling organisations can easily re-use and integrate the map on their websites. We encourage everyone for whom this tool can be an added value to look into that for sure. You can find out more about integration [here](https://cyclofix.osm.be/docs/using-data-map/). From another point of view we ensured that other topics and/or regions can be developped without much effort. 

However, we are aware that volunteers and funding is needed to keep adding more features. After all, the solution we provide is only as good as the people who want to put their weight behind it.


