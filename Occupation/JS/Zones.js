

function zoneStyle(Feature){
    return{
    color:"black",
    weight:3,
    fillOpacity:0.4,
 
    };
}

var Zones =  L.geoJSON(Zones,{ 
    style:zoneStyle,
    dashArray: "10 10",
    
    
} ).addTo(carte);

/*var Name = L.geoJSON(NameZone,).bindPopup(function(layer){
    return layer.feature.properties.Name; 
}).addTo(carte).openPopup()*/

var Name = L.geoJSON(NameZone,{
    onEachFeature:function (feature,layer){
        layer.bindPopup(layer.feature.properties.Name);
        layer.on("mouseover",function(e){
            this.openPopup();
        })
               

    }
}).addTo(carte)