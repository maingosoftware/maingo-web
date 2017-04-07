requirejs.config({

  paths:{
    'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
    'bootstrap':'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
  }

});

require(["jquery"], function($) {
  
  console.log("jquery",$.fn.jquery);

  $('#en').click(function(){
    var dictionary = require(["nls/texts"], function(colors) {
      translate(colors);
    });
  });

  $('#es').click(function(){
    var dictionary = require(["nls/es/texts"], function(colors) {
      translate(colors);
    });
  });

  function translate(dictionary) {
    $('.lang').each(function() {
      $(this).text(dictionary[$(this).attr('key')]);
    });
  }

});

/*define(function(require) {
  var _t = require("i18n!nls/colors");
  var color = _t.red;

  alert("Color: " + color);

});*/

//define(["i18n!nls/colors"], function(colors) {
  //pull the text from the bundle and insert it into the document
	//alert("Color: " + colors.red);
//});

//requirejs(["util"], function(util) {
    //This function is called when scripts/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "util".
//});
