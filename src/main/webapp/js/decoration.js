var finderDecorations = {
  extendFeature: function(){
    finderDecorations.cuisineTypes[this.get('CUISINE')] = true;
  },
  html: function(){
    return $('<div class="info"></div>')
      .append(this.distanceHtml())
      .append(this.nameHtml())
      .append(this.addressHtml())
      .append(this.cuisineHtml())
      .append(this.mapHtml())
      .append(this.directionsHtml());
  },
  distanceHtml: function(){
    var distance = this.get('distance');
    if (!(distance === undefined)){
      var div = $('<div class="distance"></div>');
      return div.html('&bull;<span> ' + (distance / 5280).toFixed(2) + ' mi </span>&bull;');
    }
  },
  nameHtml: function(){
    var div = $('<div class="name notranslate"></div>');
    return div.html(this.getName());
  },
  addressHtml: function(){
    var div = $('<div class="address notranslate"></div>');
    return div.append('<div>' + this.get('ADDRESS_1') + '</div>')
      .append('<div>' + this.get('ADDRESS_2') + '</div>');
  },
  cuisineHtml: function(){
    var div = $('<div class="cuisine"></div>');
    return div.append('<span class="name">Cuisine: </span>')
      .append('<span class="value">' + this.get('CUISINE') + '</span>');
  },
  mapHtml: function(){
    var a = $('<a class="map" data-role="button" onclick="nyc.finder.zoomTo(event);">Map</a>');
    return a.data('feature', this);
  },
  directionsHtml: function(){
    var a = $('<a class="directions" data-role="button" onclick="nyc.finder.directionsTo(event);">Directions</a>');
    return a.data('feature', this);
  },
  getAddress: function(){
    return this.get('ADDRESS_1') + ', ' + this.get('ADDRESS_2');
  },
  getName: function(){
    return this.get('NAME').toUpperCase();
  }
};

finderDecorations.cuisineTypes = {};
