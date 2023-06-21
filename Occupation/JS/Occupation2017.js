
// 2 exemple function style Ocupation du sol
function ColorStyle(p,){
    if (p === "Eau") return "#B8E6FF";
    if (p === "Arbres") return "#008000";
    if (p === "Cultures") return "#43BC43";
    if (p === "Zone Batie : (Structures artificielles; grands réseaux routiers et ferroviaires; grandes surfaces imperméables homogènes, y compris les structures de stationnement, les immeubles de bureaux et les logements résidentiels.)") return "#FFA500";
    if (p === "Sol nu") return "#B2B2B2";
    if (p === "Parcours : ( Zones ouvertes couvertes d’herbes homogènes avec peu ou pas de végétation plus haute)") return "#D0D0E1";
  
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

var SoleJsvar2017 = L.geoJSON(SoleJs2017, { style:SoleStyle,
    //popup
   /* onEachFeature:function (feature,layer){
        layer.bindPopup(layer.feature.properties.Nature);
        layer.on("mouseover",function(e){
           // this.openPopup();
        })
    }*/
}).bindPopup(function (layer) {
        return layer.feature.properties.Nature 
    });