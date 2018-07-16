/**
 * @module accessible-restaurant/style
 */

import OlStyleStyle from 'ol/style/style' 
import OlStyleFill from 'ol/style/fill' 
import OlStyleStroke from 'ol/style/stroke' 
import OlStyleCircle from 'ol/style/circle' 
import nycOl from 'nyc-lib/nyc/ol' 

const style = function(feature, resolution){
  var zoom = nycOl.TILE_GRID.getZForResolution(resolution)
  if (!style.cache[zoom]){
    var radius = zoom * .75, stroke = 1;
    style.cache[zoom] = new OlStyleStyle({
      image: new OlStyleCircle({
        radius: radius,
        fill: new OlStyleFill({
          color: '#1259a7'
        }),
        stroke: new OlStyleStroke({
          color: '#fff',
          width: stroke
        })
      })
    })
  }
  return style.cache[zoom]
};

style.cache = {}

export default style