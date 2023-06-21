function SoleStyle(Feature){
    return{
    color:"black",
    weight:0,
    fillOpacity:1
   

    };
};


var UrbanismeAlHoceima =  L.geoJSON(UrbanismeAlHoceima, { style:SoleStyle,}).addTo(carte);
var UrbanismesAjdir =  L.geoJSON( UrbanismesAjdir,{ style:SoleStyle,}).addTo(carte);
var UrbanismeImzourne =  L.geoJSON( UrbanismeImzourne,{ style:SoleStyle,} ).addTo(carte);
var UrbanismeAitYoussef =  L.geoJSON( UrbanismeAitYoussef,{ style:SoleStyle,} ).addTo(carte);
var UrbanismeBniBouayach =  L.geoJSON(UrbanismeBniBouayach, { style:SoleStyle,}).addTo(carte);
