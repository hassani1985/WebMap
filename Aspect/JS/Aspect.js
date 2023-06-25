const carteA = L.map('divAspect').setView([35.18, -3.940274], 11);
        var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
           
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

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

/*  code ajoter une legend des carte des donne alphapitique      */ 

function createLegend() {
    const legend = L.control({ position: 'bottomright' });
  
    legend.onAdd = function (carteA) {
      const div = L.DomUtil.create('div', 'info legend');
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
  





