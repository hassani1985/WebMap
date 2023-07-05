// Création de la légende
function createMapLegend() {
    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function() {
      var div = L.DomUtil.create('div', 'map-legend');
      var labels = ['Route principale', 'Route secondaire', 'Route résidentielle',"Routes rurales"];
      var colors = ["#D90347", "#A8A800", "#b8b100","black" ];

      // Légende pour les linéaires (routes)
      var lineLegend = L.DomUtil.create('div', 'line-legend');
      var lineLegendTitle = L.DomUtil.create('div', 'legend-title');
      lineLegendTitle.innerHTML = 'Routes';
      lineLegend.appendChild(lineLegendTitle);

      for (var i = 0; i < labels.length; i++) {
        var label = labels[i];
        var color = colors[i];

        var legendItem = L.DomUtil.create('div', 'legend-item');
        legendItem.innerHTML = '<span id="i" style="background:' + color + '"></span> ' + label;

        lineLegend.appendChild(legendItem);
      }

      // Légende pour les polygones (zones occupation )

      var occupationLegend = L.DomUtil.create('div', 'occupation-legend');
      var occupationLegendTitle = L.DomUtil.create('div', 'legend-title');
      occupationLegendTitle.innerHTML = 'Occupation Du sols';
      occupationLegend.appendChild(occupationLegendTitle);

      var occupationLabels = ["Eau","Arbres", "Cultures","Zone Batie","Parcours"];
      var occupationColors = ["#005CE6", "#008000", "#43BC43","#FFA500","#B2B2B2","#D0D0E1"];

      for (var u = 0; u < occupationLabels.length; u++) {
        var occupationLabel = occupationLabels[u];
        var occupationColor = occupationColors[u];

        var occupationLegendItem = L.DomUtil.create('div', 'legend-item');
        occupationLegendItem.innerHTML = '<span id="u" style="background:' + occupationColor + '"></span> ' + occupationLabel;

        occupationLegend.appendChild(occupationLegendItem);
      }

      // Légende pour les polygones (zones d'urbanisation)
      /*var polygonLegend = L.DomUtil.create('div', 'polygon-legend');
      var polygonLegendTitle = L.DomUtil.create('div', 'legend-title');
      polygonLegendTitle.innerHTML = 'Zones d\'urbanisation';
      polygonLegend.appendChild(polygonLegendTitle);

      var urbanizationLabels = ['Zone résidentielle',"riseau Hydraulique"];
      var urbanizationColors = ['black',"red"];

      for (var j = 0; j < urbanizationLabels.length; j++) {
        var urbanizationLabel = urbanizationLabels[j];
        var urbanizationColor = urbanizationColors[j];

        var urbanizationLegendItem = L.DomUtil.create('div', 'legend-item');
        urbanizationLegendItem.innerHTML = '<span id="j" style="background:' + urbanizationColor + '"></span> ' + urbanizationLabel;
        
        
        polygonLegend.appendChild(urbanizationLegendItem);
      }*/
      
      // Légende pour les polygones (zones d'urbanisation et riseau hydraulique)

  var polygonLegend = L.DomUtil.create('div', 'polygon-legend');
  var polygonLegendTitle = L.DomUtil.create('div', 'legend-title');
  polygonLegendTitle.innerHTML = 'Zones d\'urbanisation';
  polygonLegend.appendChild(polygonLegendTitle);

  var urbanizationLabels = ['Zone Batie', 'Riseau Hydraulique'];
  var urbanizationColors = ['black', "#005CE6"];

  for (var j = 0; j < urbanizationLabels.length; j++) {
    var urbanizationLabel = urbanizationLabels[j];
    var urbanizationColor = urbanizationColors[j];

    var urbanizationLegendItem = L.DomUtil.create('div', 'legend-item');
    var spanElement = document.createElement('span');
    spanElement.style.background = urbanizationColor;

    if (urbanizationLabel === 'Riseau Hydraulique') {
      spanElement.style.width = '30px';
      spanElement.style.height = '2px';
    }
    urbanizationLegendItem.appendChild(spanElement);
    urbanizationLegendItem.innerHTML += urbanizationLabel;
    
    polygonLegend.appendChild(urbanizationLegendItem);

    // Appliquer une hauteur maximale et activer la barre de défilement
div.style.maxHeight = '100px'; // Définir la hauteur maximale en pixels
div.style.overflowY = 'scroll'; // Activer la barre de défilement verticale
div.style.fontWeight = 'bold';
//div.style.color = 'red'; // Ajouter une couleur de texte rouge
div.style.backgroundColor = 'lightgray'; // Ajouter une couleur de fond gris clair
div.style.scrollbarWidth = 'thin'; // Largeur de la barre de défilement (thin, auto, etc.)
div.style.scrollbarColor = 'red yellow'; // Couleur de la barre de défilement (couleur de fond, couleur de la poignée)
div.style.scrollbarColor = 'lightgray lightgray'; // Couleur de la barre de défilement (couleur de fond, couleur de la poignée)
  }


      // Ajout des légendes à la div principale
      div.appendChild(lineLegend);
      div.appendChild(occupationLegend);
      div.appendChild(polygonLegend);

      return div;
    };

    legend.addTo(carteO);
  }

  // Appel de la fonction pour créer la légende
  createMapLegend();
 