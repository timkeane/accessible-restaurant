/**
 * @module accessible-restaurant/decorations
 */

import $ from 'jquery'

const decorations = {
  extendFeature() {
    decorations.cuisineTypes[this.get('Cuisine')] = true
    this.setId(this.get('RecordID'))
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
      .append(`<span class="value">${this.get('Cuisine')}</span>`)
  },
  getPhone() {
    return this.get('Phone')
  },
  getAddress1() {
    return this.get('Address_Line_1')
  },
  getCityStateZip() {
    return this.get('Address_Line_2')
  },
  getName() {
    return this.get('Name').toUpperCase()
  },
  cuisineTypes: {}
}

export default decorations
