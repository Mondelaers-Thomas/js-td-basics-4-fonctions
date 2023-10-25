/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(date) {
    const year = date.substring(6);
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            } else {
                return  false;
            }
        } else {
            return true;
        }
    } return false;
}
// Fonction pour vérifier si une date est valide
function isValid(date) {
    const maxJours = ["31", isBissextile(date) ? "29" : "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    const month = date.substring(3, 5);
    const day = date.substring(0, 2);

    if (Number(day) > 31 || Number(day) <= 0  ||  Number(month) <= 0 || Number(month) > 12) {
        return false;
    } else if(month === "02" && day === "29"){
        if(isBissextile(date)){
            return true;
        } else {
            return false;
        }
    } else if(day === "30"){
        if(maxJours[Number(month) - 1] === "30") {
            return true;
        } else {
            return false;
        }
    } else if(day === "31"){
        if(maxJours[Number(month) - 1] === "31") {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

// Demander à l'utilisateur de saisir une date
const dateUtil = prompt("Veuillez entrer date(jj-mm-aaaa)");

// Utilisation de la fonction isValid pour vérifier la date
console.log(isValid(dateUtil));