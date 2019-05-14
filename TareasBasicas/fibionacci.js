// f=0;
// func=0;
// acum=0;
// for (let index =1; index <= 10; index++) {    
//     let f[index]=f[acum-1];
// console.log(f[index]);
// }


// 0,1,1,2,3,5,8...
// https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci
// 0+1=1
// 1+1=2
const fibio=(num)=>{
    let num1=0;
    let num2=1;
    let suma=0;
    console.log(num1);
    console.log(num2);
    for (let index = 0; index < num-2; index++) {
      suma=num1+num2;
      num1=num2;
      num2=suma;
      console.log(suma)
    }
}

fibio(5);