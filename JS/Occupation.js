const carte = L.map('mapid').setView([35.18, -3.940274], 11.2);
        var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
           
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        	maxZoom: 17,
	        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        })
        var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

//.addTo(carte);







// 2 exemple function style Ocupation du sol
function ColorStyle(p,){
    if (p === "Eau") return "#B8E6FF";
    if (p === "Arbres") return "#008000";
    if (p === "Cultures") return "#43BC43";
    if (p === "Zone Batie : (Structures artificielles; grands réseaux routiers et ferroviaires; grandes surfaces imperméables homogènes, y compris les structures de stationnement, les immeubles de bureaux et les logements résidentiels; Exemples: maisons, villages denses / villes / villes, routes pavées, asphalte)") return "#FFA500";
    if (p === "Sol nu") return "#B2B2B2";
    if (p === "Parcours : (Zones ouvertes couvertes d’herbes homogènes avec peu ou pas de végétation plus haute)") return "#D0D0E1";
  
}
function SoleStyle(Feature){
    return{
    color:"black",
    weight:0,
    fillColor:ColorStyle(Feature.properties.Nature),
    fillOpacity:0.6

    };
};
// afficier couche Ocupation du Sol Ocupation du sol

var SoleJsvar = L.geoJSON(SoleJs, { style:SoleStyle,
    //popup
   /* onEachFeature:function (feature,layer){
        layer.bindPopup(layer.feature.properties.Nature);
        layer.on("mouseover",function(e){
           // this.openPopup();
        })
    }*/
}).addTo(carte).bindPopup(function (layer) {
        return layer.feature.properties.Nature 
    }).addTo(carte);
    //.openPopup()










    