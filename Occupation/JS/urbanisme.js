function SoleStyle(Feature){
    return{
    color:"black",
    weight:0,
    fillOpacity:1
   

    };
};


var UrbanismeAlHoceima =  L.geoJSON(UrbanismeAlHoceima, { style:SoleStyle,}).addTo(carteO);
var UrbanismesAjdir =  L.geoJSON( UrbanismesAjdir,{ style:SoleStyle,}).addTo(carteO);
var UrbanismeImzourne =  L.geoJSON( UrbanismeImzourne,{ style:SoleStyle,} ).addTo(carteO);
var UrbanismeAitYoussef =  L.geoJSON( UrbanismeAitYoussef,{ style:SoleStyle,} ).addTo(carteO);
var UrbanismeBniBouayach =  L.geoJSON(UrbanismeBniBouayach, { style:SoleStyle,}).addTo(carteO);
