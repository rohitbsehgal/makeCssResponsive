var cssArray = [];	
var createCss = function(number, increment){
     var x = 0;
     
        for(var i = 0; i < number; i++){
            x+= increment;
            var cool = "@media (max-width:" + x + "px) {.h1 {font-size: " + 0.06*x + "px; }}";
            console.log(cool);
            cssArray.push(cool);
        };
        cssArray.join(" ");
        console.log(cssArray);
    };
  var css = createCss(100,10);
  var newCssString = cssArray.join(" ");
