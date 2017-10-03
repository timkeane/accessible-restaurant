var finderDecorations = {
  html: function(){
    return $('<div class="info"></div>')
      .append(this.distanceHtml())
      .append(this.nameHtml())
      .append(this.addressHtml())
      .append(this.mapHtml())
      .append(this.directionsHtml());
  },
  distanceHtml: function(){
    var distance = this.get('distance');
    if (!(distance === undefined)){
      var div = $('<div class="distance"></div>');
      return div.html('&bull; ' + (distance / 5280).toFixed(2) + ' mi &bull;');
    }
  },
  nameHtml: function(){
    var div = $('<div class="name"></div>');
    return div.html(this.get('INPUT_1_FACTSII_DBA'));
  },
  addressHtml: function(){
    var div = $('<div class="address"></div>');
    return div.append('<div>' + this.get('INPUT_1_PREMISESADDRESS') + '</div>')
      .append('<div>' + this.get('INPUT_1_PREMISESCITYSTATEZIP') + '</div>');
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
    return this.get('INPUT_1_PREMISESADDRESS') + ', ' + this.get('INPUT_1_PREMISESCITYSTATEZIP');
  },
  getName: function(){
    return this.get('INPUT_1_FACTSII_DBA');
  }
};
