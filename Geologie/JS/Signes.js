/*var SignesVar = L.geoJSON(Signe,).addTo(carte)*/

var SignesVar = L.geoJSON(Signe , {
    style: function (Feature,) {
    switch (Feature.properties.TYPEALL) {
        
        case "Masquées": return { color: "Black", "weight": "1.5", "opacity":.4,"dashArray": '10',"lineJoin": 'round' };
        case "Failles": return { color: "Black", "weight": "1.5", "dasharray": "10,10","Opacity": .5,  };
        case "Contacts anormaux d'importance indéterminée,chevauchements ou niveaux de décollement": return { color: "black", "weight": "2", "Opacity": .1,"dashArray": '30'};
        case "Contacts anormaux de nappes de charriage": return { color: "black", "weight": "2", "Opacity": .1,"lineJoin": 'round' };
        fillOpacity:.4

    }},
   
    
}).addTo(carteG).bindPopup(function ( layer) { 
    return    layer.feature.properties.TYPEALL })







    