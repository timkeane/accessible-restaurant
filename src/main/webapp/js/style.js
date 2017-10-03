var finderStyle = function(feature, resolution){
  var zoom = nyc.ol.TILE_GRID.getZForResolution(resolution);
  if (!finderStyle.cache[zoom]){
    var radius = 4;
    if (zoom > 11) radius = 8;
    if (zoom > 14) radius = 12;
    finderStyle.cache[zoom] = new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        fill: new ol.style.Fill({
          color: 'rgba(255,165,0,0.8)'
        }),
        stroke: new ol.style.Stroke({
          color: '#000',
          width: 1
        })
      })
    });
  }
  return finderStyle.cache[zoom];
};

finderStyle.cache = {};
