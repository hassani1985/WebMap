

function zoneStyle(Feature){
    return{
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3 3',
        fillOpacity: 0.7
 
    };
}

var Zones =  L.geoJSON(Zones,{ 
    style:zoneStyle,
    
    
    
} ).addTo(carteO);

/*var Name = L.geoJSON(NameZone,).bindPopup(function(layer){
    return layer.feature.properties.Name; 
}).addTo(carte).openPopup()*/

/*var Name = L.geoJSON(NameZone,{
    onEachFeature:function (feature,layer){
        layer.bindPopup(layer.feature.properties.Name);
        layer.on("mouseover",function(e){
            this.openPopup();
        })
               

    }
}).addTo(carteO)*/

var Name= L.geoJSON(NameZone,{ 
    onEachFeature: function(feature,layer){
        layer.bindTooltip(feature.properties.Name,{permanent:true,direction:'center'});
        
    }
}).addTo(carteO).bindPopup(function (layer) {
    return layer.feature.properties.Name
})