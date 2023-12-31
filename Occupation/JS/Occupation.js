const carteO = L.map('divOccupation').setView([35.18, -3.940274], 11.2);
// Crée une carte Leaflet avec l'identifiant 'divOccupation' et définit la vue initiale aux coordonnées [35.18, -3.940274] avec un niveau de zoom de 11.2

var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carteO);
// Ajoute une couche de tuiles OpenStreetMap à la carte avec une attribution indiquant la source des tuiles

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
// Crée une autre couche de tuiles OpenTopoMap avec une attribution détaillée

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
// Crée une couche de tuiles Esri World Imagery avec une attribution

//.addTo(carte);

// 2 exemple function style Ocupation du sol
function ColorStyle(p) {
    if (p === "Eau") return "#B8E6FF";
    if (p === "Arbres") return "#008000";
    if (p === "Cultures") return "#43BC43";
    if (p === "Zone Batie : (Structures artificielles; grands réseaux routiers et ferroviaires; grandes surfaces imperméables homogènes, y compris les structures de stationnement, les immeubles de bureaux et les logements résidentiels; Exemples: maisons, villages denses / villes / villes, routes pavées, asphalte)") return "#FFA500";
    if (p === "Sol nu") return "#B2B2B2";
    if (p === "Parcours : (Zones ouvertes couvertes d’herbes homogènes avec peu ou pas de végétation plus haute)") return "#D0D0E1";
}

function SoleStyle(Feature) {
    return {
        color: "black",
        weight: 0,
        fillColor: ColorStyle(Feature.properties.Nature),
        fillOpacity: 0.6
    };
};
// Définit une fonction de style pour la couche d'occupation du sol. La couleur de remplissage dépend de la propriété "Nature" de chaque entité.

var SoleJsvar = L.geoJSON(SoleJs, {
    style: SoleStyle,
    onEachFeature: function (feature, layer) {
        layer.bindPopup(layer.feature.properties.Nature);

        layer.on('mouseover', function (e) {
            var layer = e.target;
            layer.setStyle({
                fillOpacity: 0.5,
               
            });
        });

        layer.on('mouseout', function (e) {
            var layer = e.target;
            layer.setStyle({
                fillOpacity: 1
            });
        });
    }
}).addTo(carteO).bindPopup(function (layer) {
    return layer.feature.properties.Nature;
}).addTo(carteO);