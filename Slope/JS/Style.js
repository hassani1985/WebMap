
var listeMap ={
    "Open TopoMap" :OpenTopoMap,
    
   /* "Esri WorldImagery" :Esri_WorldImagery,*/
    "OSM":OSM,
    
    

   };
var coucheMaps={
    "Pente": SlopVar,
    "Zones Etude": Zones,
    "Riseau Hydraulique": riseauxvar,

    
                   };
                   
                   
var legend=L.control.layers(listeMap ,coucheMaps,{hideSingleBase:true}).addTo(carteS).false;
/*collapsed:false,*/ 

L.control.scale({imperial:false,maxWidth:250,updateWhenIdle:true,sortLayers:true}).addTo(carteS)



//,