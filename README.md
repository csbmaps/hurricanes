# Hurricanes Story Map

This is a story map showing two hurricanes in the Atlantic United States.

I pulled the hurricane data from the NOAA stie as a shapefile (see sources below). This loaded well in Arc, but I had trouble getting the ArcGIS tool Feature Class to JSON to work well. The tool was very very slow to do 27,000 line segments with 100 attrbutes each, understandably. When I selected 33 line segments (hurricane Katrina) by attribute and bounced them to a new layer, it was still slow! I eventually moved this new layer to a new GDB, and the tool works jsut fine. Arc must leave some traces of the previous layer on a new layer that process with it, making things move slowly. Potentially useful, but a royal pain in the butt here! Lesson learned!

Basemaps were pulled from a variety of sources including ESRI, Mapbox, and CartoDB.



**Content Sources**

Hurricane track GIS data: https://www.ncdc.noaa.gov/ibtracs/index.php?name=ibtracs-data

Font: https://fonts.google.com/specimen/BioRhyme

All text content from Wikipedia

https://en.wikipedia.org/wiki/Tropical_cyclone
https://en.wikipedia.org/wiki/Saffir%E2%80%93Simpson_scale
https://en.wikipedia.org/wiki/Hurricane_Sandy
https://en.wikipedia.org/wiki/Hurricane_Katrina

Saffir-Simpson graphic: http://disasterpreparednesscourse.com/disaster-hazards/cyclones-tropical/saffir-simpson-hurricane-wind-scale/
