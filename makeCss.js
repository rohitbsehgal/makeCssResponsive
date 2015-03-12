var cssArray = [];
var createCss = function(number, increment, maxInt){
     var x = 0;
     var cool = "";
        for(var i = 0; i < number; i++){
            x+= increment;
            cool = "@media(max-width: 60px) { .h1{ font-size: 60px; }}";
            console.log(cool);
            cssArray.push(cool);
        };
        var n = 0;
        var z = 0;
        for(var j = 0; j < cool.length; j++){
          n = cool.indexOf("px");
        }
        if(n != null){
          for(var l = 0; l < cool.length; l++){
            var stringToReplace = maxInt.toString() + "px";
            var re = new RegExp(stringToReplace, 'g');
            var replacedString = cool.replace(re, l.toString() + "px");
            console.log(replacedString);
          }
        }
        cssArray.join(" ");
    };
  var css = createCss(100, 10, 60);
  var newCssString = cssArray.join(" ");
