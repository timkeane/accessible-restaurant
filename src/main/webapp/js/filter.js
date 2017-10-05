var filterControls = [];

(function(){
  var choices = [];
  $.each(CUISINE, function(){
    choices.push({
      name: 'CUISINE',
      value: this,
      label: this,
      checked: false
    });
  });
  filterControls.push(new nyc.Check({
    target: '#cuisine-filter',
    title: 'Cuisine',
    expanded: true,
    choices: choices
  }));
}());
