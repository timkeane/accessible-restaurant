/**
 * @module hurricane/App
 */

import FinderApp from 'nyc-lib/nyc/ol/FinderApp'
import decorations from './decorations'

class App extends FinderApp {
  ready(features) {
    super.ready(features)
    const cuisineTypes = Object.keys(decorations.cuisineTypes).sort()
    const choices = []
    cuisineTypes.forEach(cuisine => {
      choices.push({
        name: 'Cuisine',
        values: [cuisine],
        label: cuisine,
        checked: false
      })
    })
    this.createFilters([{title: 'Cuisine', choices: choices}])
    $('#filters').prepend(this.filters.find('.chc'))
    this.filters.find('.clps').hide()
  }
}

export default App