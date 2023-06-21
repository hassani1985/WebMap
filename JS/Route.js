





var Routevar = L.geoJSON(RoutePrincipale, {
    style: function (Feature,) {
    switch (Feature.properties.highway) {
        case 'Routes principales': return { color: "#D90347", "weight": "3", "fillOpacity": 1 };
        case 'Routes secondaires': return { color: "#A8A800", "weight": "3", "fillOpacity": 1 };
        case 'Routes secondaires': return { color: "#A8A800", "weight": "3", "fillOpacity": 1 };
        case 'Routes rurales': return { color: "black", "weight": "0.5", "fillOpacity": 0.9 };
        case 'living_street': return { color: "#B2B2B2", "weight": "0", "fillOpacity": .9 };
        case 'pedestrian': return { color: "#D0D0E1", "weight": "0", "fillOpacity": .9 };
        case 'residential': return { color: "#B2B2B2", "weight": "0", "fillOpacity": .9 };
        case 'secondary': return { color: "#B2B2B2", "weight": "0", "fillOpacity": .9 };
        case 'service': return { color: "#B2B2B2", "weight": "0", "fillOpacity": .9 };
        case 'trunk_link': return { color: "#B2B2B2", "weight": "0", "fillOpacity": .9 };

       

    }},
    onEachFeature:function (feature,layer){
        layer.bindPopup(layer.feature.properties.highway);
        layer.on("mouseover",function(e){
            this.openPopup();
        })
               

    }
    
}).addTo(carte)
    
.bindPopup(function ( layer) { 
   return    layer.feature.properties.highway })
  // return   "<h3>Route </h3>"+ layer.feature.properties.highway })