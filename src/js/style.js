/**
 * @module accessible-restaurant/style
 */

import OlStyleStyle from 'ol/style/Style' 
import OlStyleFill from 'ol/style/Fill' 
import OlStyleStroke from 'ol/style/Stroke' 
import OlStyleCircle from 'ol/style/Circle' 
import nycOl from 'nyc-lib/nyc/ol' 

const style = function(feature, resolution){
  const zoom = nycOl.TILE_GRID.getZForResolution(resolution)
  if (!style.cache[zoom]){
    const radius = zoom * .75
    style.cache[zoom] = new OlStyleStyle({
      image: new OlStyleCircle({
        radius: radius,
        fill: new OlStyleFill({
          color: '#1259a7'
        }),
        stroke: new OlStyleStroke({
          color: '#fff',
          width: 1
        })
      })
    })
  }
  return style.cache[zoom]
};

style.cache = {}

export default style