var zucchina1 = {
    varieta: "Zucchino nero di Milano",
    lunghezza: 18,
    peso: 90 
}
var zucchina2 = {
    varieta: "Zucchino romanesco",
    lunghezza: 19,
    peso: 120 
}
var zucchina3 = {
    varieta: "Zucchino ortolano di Faenza",
    lunghezza: 16,
    peso: 100
}
var zucchina4 = {
    varieta: "Zucchina lunga fiorentina",
    lunghezza: 25,
    peso: 110
}
var zucchina5 = {
    varieta: "Zucchino siciliano",
    lunghezza: 19,
    peso: 150
}
var zucchina6 = {
    varieta: "Zucchina striata di Napoli",
    lunghezza: 17,
    peso: 150
}
var zucchina7 = {
    varieta: "Zucchina bianca triestina",
    lunghezza: 18,
    peso: 90
}
var zucchina8 = {
    varieta: "Zucchina rigata pugliese",
    lunghezza: 21,
    peso: 110
}
var zucchina9 = {
    varieta: "Zucchino tondo di Piacenza",
    lunghezza: 15,
    peso: 120
}
var zucchina10 = {
    varieta: "Zucchino tondo di Nizza",
    lunghezza: 15,
    peso: 90
}

var leMieZucchine =[zucchina1, zucchina2, zucchina3, zucchina4, zucchina5, zucchina6, zucchina7, zucchina8, zucchina9, zucchina10]

var sommaPesiDelleZucchine = 0

for (var index = 0; index < leMieZucchine.length; index++) {
    var zucchinaDellArray = leMieZucchine[index];
    sommaPesiDelleZucchine += zucchinaDellArray.peso 
}
console.log(sommaPesiDelleZucchine)

var sommaPesiZucchinePiccole = 0
var sommaPesiZucchineGrandi = 0

for (var index = 0; index < leMieZucchine.length; index++) {
    var zucchinaDellArray = leMieZucchine[index];
   if(zucchinaDellArray.lunghezza <= 17){
       sommaPesiZucchinePiccole += zucchinaDellArray.peso
   }else if(zucchinaDellArray.lunghezza > 17){
       sommaPesiZucchineGrandi += zucchinaDellArray.peso
   }   
}

console.log(sommaPesiZucchinePiccole);
console.log(sommaPesiZucchineGrandi);




