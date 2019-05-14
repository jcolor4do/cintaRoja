// 5.- Leer el nombre y sueldo de 8 empleados y
//     mostrar el nombre y sueldo del empleado
//     que más gana

const employee1={
    nombre: "A",
    sueldo:100
}


const employee2={
    nombre: "B",
    sueldo:200
}


const employee3={
    nombre: "C",
    sueldo:300
}


const employee4={
    nombre: "D",
    sueldo:150
}


let arregloSueldos=[employee1, employee2, employee3, employee4];
let sueldoAnterior=0;
for (let index = 0; index < arregloSueldos.length; index++) {
    let sueldo= arregloSueldos[index].sueldo;
    if(sueldoAnterior<sueldo){
        sueldoAnterior=sueldo;
    }
    
}
console.log("el sueldo mayor es de: "+sueldoAnterior);