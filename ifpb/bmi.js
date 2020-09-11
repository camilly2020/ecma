
const peso =  200 ;
const altura  =  1.5 ;
const  bmi  =  peso / altura ** 2;
let calculo;


if  ( bmi <= 18.5 ){
    calculo  =  "Peso insuficiente";
}
else  if  ( bmi <= 24.9 ) {
    calculo =  "Peso normal";
}
else  if  ( bmi <= 29.9 ) {
    calculo =  "Sobrepeso" 

}
else {
    calculo  =  "Obesidade";
}

console.log  ( `IMC: $ { resultado } ` ) ;