var finderStyle = function(feature, resolution){
  var zoom = nyc.ol.TILE_GRID.getZForResolution(resolution);
  if (!finderStyle.cache[zoom]){
    var radius = 4;
    if (zoom > 11) radius = 6;
    if (zoom > 14) radius = 8;
    finderStyle.cache[zoom] = new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        fill: new ol.style.Fill({
          color: 'rgba(51, 136, 204, 0.5)'
        }),
        stroke: new ol.style.Stroke({
          color: '#38c',
          width: 1
        })
      })
    });
  }
  return finderStyle.cache[zoom];
};

finderStyle.cache = {};
