peso  const =  200 ;
altura  const =  1,5 ;
const  bmi  =  peso / altura ** 2;
deixe o  resultado;

if  ( bmi <= 18 , 5 ) {
    resultado  =  "Peso insuficiente" ;
}
else  if  ( bmi <= 24 , 9 ) {
    resultado  =  "Peso normal" ;
}
else  if  ( bmi <= 29 , 9 ) {
    resultado  =  "Sobrepeso" ;
}
else {
    resultado  =  "Obesidade" ;
}

console . log  ( `IMC: $ { resultado } ` ) ;