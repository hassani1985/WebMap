
// Création de la légende
function createMapLegend() {
  var legend = L.control({ position: 'bottomleft' });

  legend.onAdd = function() {
    var div = L.DomUtil.create('div', 'map-legend');

     // Titre pour la section la structure geologique
     var faillesTitle = L.DomUtil.create('div', 'legend-title');
     faillesTitle.innerHTML = 'Structure Geologique';
     faillesTitle.style.fontWeight = 'bold'; // Ajout du style CSS pour le titre
     faillesTitle.style.marginBottom = '10px'; // Ajout du style CSS pour le titre
     faillesTitle.style.color = 'red'; // Ajout du style CSS pour le titre
    div.appendChild(faillesTitle);
    



    var labels = ['Failles', 'Masquées', 'Contacts anormaux:chevauchements', 'Contacts anormaux de nappes de charriage'];
    var colors = ['#Black'];
    var icons = [ 'Geologie/JS/icon/minus_747362.png','Geologie/JS/icon/dashed-line_8095927.png', 'Geologie/JS/icon/minus_9919376.png',"Geologie/JS/icon/minus_7131364.png"];
    
    
    

    for (var g = 0; g < labels.length; g++) {
      var label = labels[g];
      var color = colors[g];
      var icon = icons[g];

      var legendItem = L.DomUtil.create('div', 'legend-item');
      legendItem.innerHTML = '<img src="' + icon + '" /> <p  id="g" style="color:' + color + '">' + label + '</p>';

      div.appendChild(legendItem);
    }

// Légende pour les polygones (Géologie)
    var geologyieLegend = L.DomUtil.create('div', 'geologyie-legend');
    var geologyieLegendTitle = L.DomUtil.create('div', 'legend-title');
    geologyieLegendTitle.innerHTML = 'Géologie';
    geologyieLegendTitle.style.fontWeight = 'bold'; // Ajout du style CSS pour le titre
    geologyieLegendTitle.style.marginBottom = '10px'; // Ajout du style CSS pour le titre
    geologyieLegendTitle.style.color = 'red'; // Ajout du style CSS pour le titre
    geologyieLegend.appendChild(geologyieLegendTitle);

var geologyieLabels = [
"A:	Quaternaire ==>	Alluvions modernes",
"g-miS:	Domaine Calcaire <br> ==>Olistostrome (supra-numidien)<br> à conglomérts et blocs de Lias blanc <br>se terminant par les nappes Lias bianc à semelle permo-traisique",
"n5-6K:	Domaine Externe <br> ==>	Shstes sériciteux gris ou noirs <br>contenant des lentilles ou des bancs de grés-quartzite très dilacérés",
"Al:	Quaternaire <br>  ==>	Limons gris de la plaine de l'oued Nekor",
"AlLs:	Quaternaire <br> ==>Limons salé",
"c1-4 TS-OM:	Domaine Flyschs <br> ==>	Flysch marno calcareo gréseux",
"c1-6K:	Domaine Externe <br> ==> shistes marneux, marno-calcaires <br>avec faisceaux calcaires CRETACE MOYEN",
"D:	Quaternaire <br> ==>	Sables dunaires moderes",
"D :	Quaternaire<br> ==>	Sables dunaires moderes",
"d:	Domaine Interne <br>==>	calcaires dévoniens <br>du Tihenimine et de la pointe sud d'Al hoceima",
"dAT:	Domaine Interne <br>==>	schistes, calcschistes et schistes gréseux",
"e-2-5AM:	Domaine Calcaire<br> ==>	calcaires massifs à Nummulites,<br> conglomérets et bréches",
"e-g :	Domaine Calcaire <br> ==>	Flych ou molasse",
"e-gB:	Domaine Calcaire<br>==>	série marno-gréseuse<br> à niveaux microbréchiques",
"e-gMBB:	Domaine Calcaire<br> ==>	série marneuse à blocs",
"GN:	Domaine Calcaire <br>==>	Episode nmidien: grès  faciés numidiens",
"IAM:	Domaine Calcaire<br> ==>	calcaires massifs blancs<br> et dolomies secondaires",
"j-1B:	Domaine Calcaire <br> ==>	niveaux conglomératique",
"j-cB :	Domaine Calcaire<br>==>	radiolarites, marnas et microbréches",
"l1B:	Domaine Calcaire<br> ==>	calcaire massifs ou dolomies massives<br> (calcaire alvéolaires: P.Fallot calcaires gaufrés",
"l2-jB:	Domaine Calcaire<br>==>	calcaire à silex et microbrèches contenat <br>localement des niveaux de calcaires organique, <br>de dolomies et des radiolarites",
"n6-c CH:	Domaine Flyschs<br>==>	flysch bleu surtout schisteux avec<br> quelques minces bencs de quartzites",
"pV:	Quaternaire <br> ==>conglomérats,grès et limons <br>des plateaux de l'oued Rhis et d'Imzourene",
"q :	Quaternaire<br>==>Quaternaire indéterminié",
"q1:	Quaternaire<br> ==>	glacis cotiers limoneux et basse terrasse<br> limoneuse ainsi que les limons des plaines non subdivisés(q1-AL)",
"q1-AL:Quaternaire<br>==>	les limons des plaines non subdivisés",
"q2-3:Quaternaire<br> ==>	Surface ou terrasse encroutées su cailloutis",
"q4-5:Quaternaire <br>==>	Surface sur conglomérats <br>plateaux du bas Oued Rhis Région d'Azhar",
"qA :Quaternaire<br>==>	affaissements, solifluxions",
"qD :Quaternaire<br>==>	Sables dunaires consolidés",
 "qDP :Quaternaire <br> ==>	éboulis de tous les niveaux",
 "qDP :Quaternaire <br> ==>	éboulis de tous les niveaux",
 "r-tiAH :Domaine Interne <br> ==>	grés et conglomérats<br> rouge; gypees et trachy-andésites",
 "r-tiAM :Domaine Calcaire <br> ==>	Grès rouges",
 "sd :Domaine Interne <br> ==>	schistes,grès,flyschs",
 "SpV:Quaternaire <br> ==>	Surface sans doute fini-villafranchienne<br> des hauts plateaux de l'oued Rhis",
 "t-l1B :Domaine Calcaire <br> ==>	comprenant peyt-etre à sa partie <br>superieure le Rhétien sous forme <br>(d'alternances) de dolomie<br> litéo-ailleurs dolomies massives ou en gros bancs",
 "tmAH :Domaine Interne<br> ==>	Dolomis à Myophoria du Muschelkalk de Tala Youssef",
 "tm-sAM :Domaine Calcaire <br> ==>	dolomies massives",
 "tm-sAT :Domaine Calcaire <br>==>	dolomies sombres",
 "tsAH :Domaine Interne <br>==>	grès et conglomérats dolomitiques",
 
  ];
var geologyieColors = [
  "#E5F2EB", 
  "#AC8B8B",
  "#31644A",
  "#F5644A",
  "#4C6B12",
  "#2ADCAB", 
  "#105213",
  "#77A3CE",
  "#C9CE77",
  "#4CE600",
  "#B57B00", 
  "#6A00DE",
  "#00968C",
  "#E5A700",
  "#E1B1BE",
  "#EA00E1", 
  "#E0EB29",
  "#a7e4e9",
  "#3D3F25",
  "#00D4D9",
  "#8DCEE4",
  "#680011",
  "#FF3600",
  "#D6AB81",
  "#844A12",
  "#BB00DB",
  "#134F00",
  "#ED0053",
  "#7C7D00",
  "#7A005F",
  "#F2004A",
  "#A9B200",
  "#E292A4",
  "#FFECD9",
  "#E2F3F6",
  "#EBBBDF",
  "#6CFF77",
  "#ACC0AD",
  "#E3EAE4",
  "#ACC0AD",
  "#E3EAE4",
  
  ];

for (var u = 0; u < geologyieLabels.length; u++) {
  var geologyieLabel = geologyieLabels[u];
  var geologyieColor = geologyieColors[u];

  var geologyieLegendItem = L.DomUtil.create('div', 'legend-item');
  geologyieLegendItem.innerHTML = '<span id="u" style="background:' + geologyieColor + '"></span> ' + geologyieLabel;

  geologyieLegend.appendChild(geologyieLegendItem);
  div.appendChild(geologyieLegend);
  // Appliquer une hauteur maximale et activer la barre de défilement
  div.style.maxHeight = '100px'; // Définir la hauteur maximale en pixels
  div.style.overflowY = 'auto'; // Activer la barre de défilement verticale
  div.style.fontWeight = 'bold';
  div.style.backgroundColor = 'lightgray'; // Ajouter une couleur de fond gris clair
}
    return div;
  };

  legend.addTo(carteG);
}
createMapLegend();