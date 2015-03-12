var cssArray = [];
var allArray = [];
var createCss = function(number, increment, numberToFind){
    var x = 0;
    var x1 = 0;
     var n = 0;
     var z = 0;
     var stringToReplaceNumber = 0;
     var stringToReplace = ""
     var maxIntArray = [];

     if(number < 10){
       maxIntDecimal = 0.1;
     }else if(number > 99 && number > 999){
       maxIntDecimal = 0.01;
     }else if(number > 999 && number > 9999){
       maxIntDecimal = 0.001;
     }else if(number > 9999 && number > 99999){
       maxIntDecimal = 0.0001;
     }else if(number > 99999 && number > 999999){
       maxIntDecimal = 0.00001;
     }else if(number > 999999 && number > 9999999){
       maxIntDecimal = 0.000001;
     }
     for(var k = 0; k < number; k++){
       x1 += increment;
     }
     var cool = "{ .h1{ font-size: 60px; } } "
     for(var j = 0; j < cool.length; j++){
       n = cool.indexOf("px");
     }
       if(n != null){
         for(var l = 0; l < number; l++){
           console.log(l.toString())
           stringToReplaceNumber = number - l;
           console.log(stringToReplaceNumber)
           stringToReplace = numberToReplace.toString() + "px";
           var re = new RegExp(stringToReplace, 'g');
           var replacedString = cool.replace(re, (l/15).toString() + "em");
           console.log(replacedString);
           maxIntArray.push(replacedString)
         }
       }
        for(var i = 0; i < number; i++){
            x+= increment;
            cool = "@media(min-width: " + x + "px)";
            cssArray.push(cool);

        };

        for(var i = 0; i < number*2; i++){
          allArray.push(cssArray[i]);
          allArray.push(maxIntArray[i]);
        }
        console.log(allArray)
    };
  var css = createCss(60, 10);
  var newCssString = allArray.join("");
