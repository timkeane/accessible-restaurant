/**
 * @module accessible-restaurant/decorations
 */

import $ from 'jquery'

const decorations = {
  extendFeature() {
    decorations.cuisineTypes[this.get('CUISINE')] = true
  },
  html() {
    return $('<div class="facility"></div>')
      .addClass(this.cssClass())
      .append(this.distanceHtml())
      .append(this.nameHtml())
      .append(this.distanceHtml(true))
      .append(this.addressHtml())
      .append(this.cuisineHtml())
      .append(this.phoneButton())
      .append(this.mapButton())
      .append(this.directionsButton())
      .data('feature', this)
      .mouseover($.proxy(this.handleOver, this))
      .mouseout($.proxy(this.handleOut, this))
  }, 
  cuisineHtml() {
    var div = $('<div class="cuisine"></div>')
    return div.append('<span class="name">Cuisine: </span>')
      .append(`<span class="value">${this.get('CUISINE')}</span>`)
  },
  getPhone() {
    return this.get('PHONE')
  },
  getAddress1() {
    return this.get('ADDRESS_1')
  },
  getCityStateZip() {
    return this.get('ADDRESS_2')
  },
  getName() {
    return this.get('NAME').toUpperCase()
  },
  cuisineTypes: {}
}

export default decorations
