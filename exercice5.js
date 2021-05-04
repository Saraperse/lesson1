var nom =" Gaston";
var age = 19;
var sexe = false;
var msg = "Bonjour" + nom + "\n"; 

if(sexe){
         msg = msg + "vous êtes un homme";         
        if(age >=18){
    msg = msg + " majeur";
    } else {
        msg = msg + "mineur";
    } 
} else {
    msg = msg + "vous etes une femme";
    if(age >=18){
        msg = msg + " majeure";
    } else {
           msg = msg + " mineur";
    }
}
console.log(msg);

