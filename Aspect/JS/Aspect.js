const carteA = L.map('divAspect').setView([35.18, -3.940274], 11);
        var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
           
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(carteA);

        var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        	maxZoom: 17,
	        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        })

/*  Coule la couche d Aspect*/
function AspectColor(value,){
    if( value === "Plat") {return "#FFFFFF"} 
    if (value==="Nord" ){return " #0080FF"} 
    if( value === "Est") {return "#FFCC00"} 
    if (value==="Sud" ){return "#00FF00"} 
    if( value === "Ouest") {return "#FF0000"} 

}

function styleAspect(feature) {
    return {
        fillColor: AspectColor(feature.properties.Aspect),
        weight: 0,
        opacity: 1,
        color: 'white',
        fillOpacity:0.9
       
    };
}

var AspectVar =L.geoJson(Aspect,{style:styleAspect}).addTo(carteA)

/*  code ajoter une legend des carte des donne alphapitique  */     

function createLegend() {
    const legend = L.control({ position: 'bottomleft' });
  
    legend.onAdd = function (carteA) {
      const div = L.DomUtil.create('div', 'info legend');
      var title = "Légende de la carte"; // Titre de la légende
       
         // Ajouter le titre de la légende
         div.innerHTML += '<div class="legend-title">' + title + '</div>';
      const aspects = ["Plat", "Nord", "Est", "Sud", "Ouest"];
  
      for (let i = 0; i < aspects.length; i++) {
        const aspect = aspects[i];
        const backgroundColor = AspectColor(aspect); // Assuming AspectColor() function returns the background color for the aspect
  
        const squareHTML = `<i style="background:${backgroundColor}"></i>`;
        const labelHTML = aspect;
  
        div.innerHTML += squareHTML + ' ' + labelHTML + '<br>';
      }
  
      return div;
    };
  
    return legend;
  }
  
  const legendControl = createLegend();
  legendControl.addTo(carteA); // Assuming `map` is your Leaflet map object
  

/*function createLegend() {
  const legend = L.control({ position: 'bottomleft' });

  legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info legend');
    const aspects = ["Plat", "Nord", "Est", "Sud", "Ouest"];
    let legendVisible = true; // Track the visibility state of the legend

    for (let i = 0; i < aspects.length; i++) {
      const aspect = aspects[i];
      const backgroundColor = AspectColor(aspect); // Assuming AspectColor() function returns the background color for the aspect

      const squareHTML = `<i style="background:${backgroundColor}"></i>`;
      const labelHTML = aspect;

      div.innerHTML += squareHTML + ' ' + labelHTML + '<br>';
    }

    // Create a "Masquer" button to hide the legend
    const hideButton = L.DomUtil.create('button', 'hide-button');
    hideButton.innerHTML = 'Masquer';

    hideButton.addEventListener('click', function () {
      div.style.display = 'none'; // Hide the legend div
      legendVisible = false;
    });

    div.appendChild(hideButton); // Append the "Masquer" button to the legend div

    // Create a button on the map to show the hidden legend
    const showButton = L.DomUtil.create('button', 'show-button');
    showButton.innerHTML = 'Afficher';

    showButton.addEventListener('click', function () {
      div.style.display = 'block'; // Show the legend div
      legendVisible = true;
    });

    // Create a control button and add it to the map
    const controlContainer = L.DomUtil.create('div', 'control-container');
    controlContainer.appendChild(showButton);

    const controlButton = L.control({ position: 'topleft' });
    controlButton.onAdd = function () {
      return controlContainer;
    };

    controlButton.addTo(map);

    return div;
  };

  return legend;
}

const legendControl = createLegend();
legendControl.addTo(carteA); // Assuming `carteA` is your Leaflet map object
*/


/*   Riseau hydraulique */
var riseauxvar =  L.geoJSON(riseaux, {style:{fillOpacity:1,weight:1}}).addTo(carteA).bindPopup(function (layer) { 
  return layer.feature.properties.arcid; 
})


/** Zoune etude */
function zoneStyle(Feature){
  return{
      weight: 2,
      opacity: 1,
      color: 'red',
      dashArray: '3',
      fillOpacity: 0.7

  };
}

var ZonesAspect =  L.geoJSON(ZonesA,{ 
  style:zoneStyle,
  
  
} ).addTo(carteA);

/*var Name = L.geoJSON(NameZone,).bindPopup(function(layer){
  return layer.feature.properties.Name; 
}).addTo(carte).openPopup()*/


/**  Control */
var listeMap ={
  "Open TopoMap" :OpenTopoMap,
 /* "Esri WorldImagery" :Esri_WorldImagery,*/
  "OSM":OSM,
  
 };
var coucheMaps={
"Riseau Hydraulique":riseauxvar,
"Aspect":AspectVar,
"Zones Etude":ZonesAspect,
};
                 
                 
var legendd=L.control.layers(listeMap ,coucheMaps,{hideSingleBase:true}).addTo(carteA).false;
/*collapsed:false,*/ 

L.control.scale({imperial:false,maxWidth:100,updateWhenIdle:true,sortLayers:true,position: "bottomright"}).addTo(carteA)
