const peso =  200 ;
const altura  =  1.5 ;
const  bmi  =  peso / altura ** 2;
let result;

if  ( bmi <= 18.5 ){
    result  =  "Peso insuficiente";
}
else  if  ( bmi <= 24.9 ) {
    result  =  "Peso normal";
}
else  if  ( bmi <= 29.9 ) {
    result  =  "Sobrepeso" ;
}
else {
    result  =  "Obesidade";
}

console.log  ( `IMC: $ { resultado } ` ) ;