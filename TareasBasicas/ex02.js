var num= prompt('ingresa el numero que quieras multiplicar') ;
var numFirst=prompt('ingresa el inicio del alcance');
var numLim= prompt('ingresa el límite al que quieres llegar');
let i 
for (i= numFirst; i <= numLim; i++) {
    console.log(num+'x'+i+'='+num*i);
}