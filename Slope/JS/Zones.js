function zoneStyle(Feature){
    return{
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
 
    };
}

var Zones =  L.geoJSON(Zones,{ 
    style:zoneStyle,
    
    
} ).addTo(carteS);

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
}).addTo(carteS)