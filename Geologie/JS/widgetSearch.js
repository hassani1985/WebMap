// Création du widget de recherche
var searchControl = new L.Control.Search({
  layer: GeologieVar,
  propertyName: 'SymboleA',
  position: 'topright',
  zoom: 15,
  marker: false
});

// Récupération du div pour afficher les résultats de recherche
var searchResultsDiv = document.getElementById('searchResults');

// Fonction pour afficher les résultats de recherche dans le div
searchControl.on('search:locationfound', function (e) {
  var symbol = e.layer.feature.properties.Symbole; // Récupère le symbole géologique du résultat de recherche
  var resultDiv = document.createElement('div'); // Crée un élément div pour afficher le résultat
  resultDiv.textContent = symbol; // Ajoute le symbole géologique au contenu du div
  // Appliquer le style au div des résultats de recherche
  // resultDiv.style.fontFamily = 'Arial';
  // resultDiv.style.color = 'black';
  // resultDiv.style.backgroundColor = 'lightgray';
  // resultDiv.style.padding = '10px';
  // resultDiv.style.marginBottom = '5px';
  // resultDiv.style.border = '10px ridge #f00';
  // resultDiv.style.backgroundColor = '#ff0';
  // resultDiv.style.padding = '0.5rem';
  // resultDiv.style.display = 'flex';
  // resultDiv.style.flexDirection = 'column';
  resultDiv.style.width = '15em';
  resultDiv.style.border = '1px solid #333';
  resultDiv.style.boxShadow = '8px 8px 5px #444';
  resultDiv.style.padding = '8px 12px';
  resultDiv.style.backgroundImage = 'linear-gradient(180deg, #fff, #ddd 40%, #ccc)';
 
  // Vide le contenu précédent du div des résultats de recherche
  searchResultsDiv.innerHTML = '';

  searchResultsDiv.appendChild(resultDiv); // Ajoute le div au div des résultats de recherche
});

// Ajout du widget de recherche à la carte
carteG.addControl(searchControl);