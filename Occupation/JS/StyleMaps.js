


var listeMap ={
    "Esri WorldImagery" :Esri_WorldImagery,
    "OSM": OSM,
   "OpenTopoMap" :OpenTopoMap,
   
   
   

   };
var coucheMaps={
    
    "Urbanisation 2015": SoleJsvar2017,
    "Urbanisation 2022": SoleJsvar,
    "Route": Routevar,
    "Riseaux hydraulique": riseauxvar,
    "Bati AlHoceima": UrbanismeAlHoceima,
    "Bati Ajdir": UrbanismesAjdir,
    "Bati Imzourne": UrbanismeImzourne,
    "Bati AitYoussef": UrbanismeAitYoussef, 
    "Bati BniBouayach": UrbanismeBniBouayach,
    "Zones Etude": Zones,
    " Point ": Name

                   };
                   
                   
var legend=L.control.layers(listeMap,coucheMaps,{hideSingleBase:true}).addTo(carteO).false;


L.control.scale({imperial:false,maxWidth:100,updateWhenIdle:true,sortLayers:true,position: "bottomright"}).addTo(carteO)



//,