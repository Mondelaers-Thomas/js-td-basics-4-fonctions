/*****************************
* 020 - Fonctions - Préalable
*/

// 4. PASSAGE DE PARAMÈTRE : FONCTION AVEC PARAMÈTRE (SANS RETURN)

// Une fonction avec plusieurs paramètres

/* EXERCICE :
1. Déclarez une fonction appelée presenter
  - qui prend deux paramètres, prenom et age
  - et qui affiche dans la console "Tu t'appelles   et tu as   ans"
2. Appelez cette fonction en lui passant comme paramètre
  a) "Garance" et 10
  b) 6 et "Prosper"
*/

// Déclaration de la fonction

function presenter(prenom, age) {
    // Utilisez les paramètres prenom et age pour l'affichage
    // par exemple : console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans");
    console.log(`Tu t'appelles ${prenom} et tu as ${age} ans`);
}

// Appels de fonction avec passage de paramètres
// Appelez la fonction presenter en lui passant "Garance" et 10 comme arguments
presenter("Garance", 10);
// Puis, appelez-la à nouveau en lui passant 6 et "Prosper" comme arguments
presenter(6, "Prosper"); //-- ordre pas respecté donc la console va afficher un résultat que l'on ne veut pas.
/* ATTENTION !
    Lors d'un appel à une fonction acceptant plusieurs paramètres,
    le nombre et l'ordre des paramètres doivent être respectés.
*/
