window.addEventListener('DOMContentLoaded', doFunctions, false);
var cssArray = [];
var allArray = [];
var numToReplace = 0;
// testing: { .h1{ font-size: 60px; } }
var lineToCreateCss = function(line){
  var n = 0;
  var y = 0;
  var x = "";
  for(var j = 0; j < line.length; j++){
    n = line.indexOf("px");
    y = line.indexOf(":");
  }
  if(n != null){
    for(var i = y; i < n+1; i++){
      if (line.charAt(i) >= '0' && line.charAt(i) <= '9') {
        var charToConcat = line.charAt(i);
        var x = x.concat(charToConcat);
        console.log(line.charAt(i));
        console.log(x);
      }
    }
    return x;
  }else{
    return "Error";
  }
};
var createCss = function(number, increment, numberToReplace, percentOfScreen, lineOfCss){
     var x = 0;
     var x1 = 0;
     var n = 0;
     var z = 0;
     var stringToReplaceNumber = 0;
     var stringToReplace = ""
     var maxIntArray = [];
     var ems = (number*increment)/16;
     var percent = ems*0.01*percentOfScreen;
     var pixels = number*increment;
     var subtractBy = (ems*percentOfScreen*0.01) - ((pixels - increment)/16)*percentOfScreen*0.01;
     for(var k = 0; k < number; k++){
       x1 += increment;
     }
     var cool = lineOfCss;
     for(var j = 0; j < cool.length; j++){
       n = cool.indexOf("px");
     }
       if(n != null){
         for(var l = number; l > 0; l--){
           console.log(l.toString())
           stringToReplaceNumber = number - l;
           console.log(stringToReplaceNumber)
           stringToReplace = numberToReplace.toString() + "px";
           var re = new RegExp(stringToReplace, 'g');
           var replacedString = cool.replace(re, percent-subtractBy*l + "em");
           console.log(replacedString);
           maxIntArray.push(replacedString + " }")
         }
       }
        for(var i = 0; i < number; i++){
            x+= increment;
            cool = "@media(min-width: " + x + "px){ ";
            cssArray.push(cool);

        };

        for(var i = 0; i < number*2; i++){
          allArray.push(cssArray[i]);
          allArray.push(maxIntArray[i]);
        }
        console.log(allArray);
        console.log(subtractBy);
        return allArray.join("");

};
var doItAll = function(number, increment, percentOfScreen, lineOfCss){
  var numToReplace = lineToCreateCss(lineOfCss);
  var css = createCss(number, increment, numToReplace, percentOfScreen, lineOfCss);
  return css;
}
//number = number of media queries you want
//increment = number of pixels you want the media queries to go up by
//percentOfScreen = percent of the screen you want the element to cover
//lineOfCss = a single line of css with a single "px" value inside it for example: .h1{ font-size: 60px; }
  var doFunctions = doItAll(documnet.getElementById("number").value, 25, 5,".h1{ font-size: 60px; }");
  console.log(doFunctions);
