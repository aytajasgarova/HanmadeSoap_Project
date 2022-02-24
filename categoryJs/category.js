$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 50,
      values: [ 0, 50 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + " AZN - " +  ui.values[ 1 ] + " AZN" );
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) + " AZN - "
       + $( "#slider-range" ).slider( "values", 1 ) + " AZN");
  } );