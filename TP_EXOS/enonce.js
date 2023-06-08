/*====================================================================
                            EXERCICE N°1
====================================================================*/
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubles = [];
const doublesnopush = [];
const triples = [];
const triplesnopush = [];

// Utiliser la boucle forEach pour parcourir le tableau nombres et mettre le double de chaque nombre dans le tableau "doubles"

nombres.forEach(element => {
    doubles.push(element * 2);
});

// console.log(doubles);

// Utiliser une boucle for pour parcourir le tableau nombres et mettre le triple de chaque nombre dans le tableau "triples"

nombres.forEach(element => {
    triples.push(element * 3);
});

// console.log(triples);

// Proposer une version SANS la méthode "push" et une autre version AVEC la méthode "push"

nombres.forEach(element => {
    const double = element * 2;
    doublesnopush[doublesnopush.length] = double;
  });

//   console.log(doublesnopush);

  nombres.forEach(element => {
    const double = element * 3;
    triplesnopush[triplesnopush.length] = double;
  });

//   console.log(triplesnopush);

/*====================================================================
                            EXERCICE N°2
====================================================================*/
// Tableau de pays
let pays = ["France", "Etats-Unis", "Chine", "Inde", "Brésil", "Canada", "Japon", "Australie", "Mexique", "Russie", "Allemagne", "Italie", "Espagne", "Portugal", "Angleterre"];

// écrire une fonction qui affiche dans la console les pays qui ont au maximum 7 lettres
// rappel : une chaîne de caractères se comporte comme un tableau 

function maxsept(pays) {
    for (let i = 0; i < pays.length; i++) {
      if (pays[i].length <= 7) {
        console.log(pays[i]);
      }
    }
  }
  
maxsept(pays);

/*====================================================================
                            EXERCICE N°3
====================================================================*/
// Créer une fonction fléchée ou anonyme qui prend en paramètre une chaine de caractères et qui retourne le nomvbre d'occurrence de la lettre "e" dans cette chaine. La tester sur le mot "électroencéphalographie" puis sur le mot "abstraction".


// compterE("électroencéphalographie"); // 3
// compterE("abstraction"); // 0

const compterE = (chaine) => {
    let compteur = 0;
    for (let i = 0; i < chaine.length; i++) {
      if (chaine[i].toLowerCase() === 'e') {
        compteur++;
      }
    }
    return compteur;
  };
  
  console.log(compterE("électroencéphalographie"));
  console.log(compterE("abstraction"));

/*====================================================================
                        EXERCICE FACULTATTIF
====================================================================*/
// Définition des recettes et des ingrédients nécessaires
const RECETTES = {
    "Pâtes à la carbonara": ["pâtes", "lardons", "œufs", "parmesan"],
    "Salade César": ["laitue", "poulet", "croutons", "parmesan", "sauce César"],
    "Omelette aux légumes": ["œufs", "légumes", "fromage"]
};

// Fonction pour déterminer la recette en fonction des ingrédients disponibles
function determinerRecette(ingredientsDisponibles) {

  let meilleureRecette = null;

  for (const recette in RECETTES) {
    const ingredientsRecette = RECETTES[recette];
    const recetteComplete = ingredientsRecette.every(function(ingredient) {
      return ingredientsDisponibles.includes(ingredient);
    });
    
    if (recetteComplete && (meilleureRecette === null || ingredientsRecette.length < RECETTES[meilleureRecette].length)) {
      meilleureRecette = recette;
    }
  }

  return meilleureRecette;
}

// Exemple d'utilisation
const ingredients = ["pâtes", "lardons", "œufs", "parmesan"];
const recette = determinerRecette(ingredients);
console.log("Recette recommandée :", recette);
