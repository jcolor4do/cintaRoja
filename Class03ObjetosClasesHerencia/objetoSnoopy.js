const snoopy = {
    raza: 'Electrico',
    color: 'blanco',
    nombre: 'snoopy',
    edad: 10,
    ladrar:function(){
        console.log('guau guau');
    },
comer:function(){
    console.log('comiending');
}
}

console.log('el perro se llama'+snoopy.nombre);

snoopy.ladrar();

// var x= prompt('paso1');
const perro2={
    caminar: function(x='paso 1'){
        console.log('assaa'+x)
    },
    sumar: function() {
        console.log('suma:'+5*6);
    }
}

// var perro
perro2.sumar();
perro2.caminar();

