import App from './App'

import style from './style'
import decorations from './decorations'
import nyc from 'nyc-lib/nyc'
import CsvPoint from 'nyc-lib/nyc/ol/format/CsvPoint'

/**
 * @private
 * @const {string} 
 */ 
const cacheBust = nyc.cacheBust(15)

new App({
  title: '<img src="img/acc.png" alt="whellchair"> friendly restaurant locator',
  splashOptions: {message: $('#splash-message')},
  geoclientUrl: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example',
  facilityTabTitle: 'Restaurants',
  facilityUrl: `data/restaurant.csv?${cacheBust}`,
  facilityFormat: new CsvPoint({
    x: 'X',
    y: 'Y',
    dataProjection: 'EPSG:2263'
  }),
  facilityStyle: style,
  filterChoiceOptions: [],
  filterTabTitle: 'Cuisine',
  facilitySearch: false,
  decorations: decorations,
  directionsUrl: 'https://maps.googleapis.com/maps/api/js?&sensor=false&libraries=visualization'
})

