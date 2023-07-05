
var listeMap ={
    "Open TopoMap" :OpenTopoMap,
    
   /* "Esri WorldImagery" :Esri_WorldImagery,*/
    "OSM":OSM,
    
    

   };
var coucheMaps={
    "GEOLOGIE": GeologieVar,
    "ELEMENTS STRUCTUREAUX": SignesVar,
    "Zones Etude": Zones,
    
                   };
                   
                   
var legend=L.control.layers(listeMap ,coucheMaps,{hideSingleBase:true}).addTo(carteG).false;
/*collapsed:false,*/ 

L.control.scale({imperial:false,maxWidth:100,updateWhenIdle:true,sortLayers:true,position: "bottomright"}).addTo(carteG)



//,