
// Initialisation des variables
var solution;
var nb_utilisateur;
var max;
var min = 1;


function jeu() {

  var compteur = 0;

  // Récupération du niveau de difficulté sélectionné
	if (document.getElementById('diff1').checked){
		max = 100;
	  }
  else if (document.getElementById('diff2').checked){
    max = 500;
    }
  else {
    max = 1000;
    }

  // Génération d'un nombre aléatoire
  function nb_aleatoire(min, max)
  {
       var nb = min + (max-min+1)*Math.random();
       console.log("min = " + min);
       console.log("max = " + max);
       return Math.floor(nb);
  }

  solution = nb_aleatoire(1, max);
  console.log("solution = " + solution);

// Création d'un élément p qui contiendra le message pour l'utilisateur
  var messageElt = document.createElement("p");
  messageElt.id = "message";

  function message (texte){
    messageElt.textContent = texte; // Définition de son contenu textuel
    document.getElementById("jeu").appendChild(messageElt); // Insertion du nouvel élément
    }

  //
  // if (Number.isInteger(nombre) )
  // {
  //   alert("ok");
  // }
  // else
  // {
  // nombre = Number(prompt("Erreur - Entrez un nombre entier:"));
  // }


  while (nb_utilisateur !== solution)
  {
    nb_utilisateur = Number(prompt("Entrez un nombre entre 1 et 100 :")); // Saisie du nombre
    compteur++;
    if (nb_utilisateur > solution)
    {
      message("C'est moins !");
      // messageElt.textContent = "C'est moins !"; // Définition de son contenu textuel
      // document.getElementById("jeu").appendChild(messageElt); // Insertion du nouvel élément
    }
    else if (nb_utilisateur < solution)
    {
      message("C'est plus !");
      // messageElt.textContent = "C'est plus !";
      // document.getElementById("jeu").appendChild(messageElt);
    }
    else { break;}
  }

  if (compteur > 1)
    {
      message("Bravo! Vous avez gagné en " + compteur + " coups!");
      // resultatElt.textContent = "Bravo! Vous avez gagné en " + compteur + " coups!";
      // document.getElementById("jeu").appendChild(resultatElt);
    }
  else
    {
      message("Bravo! Vous avez gagné du premier coup!");
      // resultatElt.textContent = "Bravo! Vous avez gagné du premier coup!";
      // document.getElementById("jeu").appendChild(resultatElt);
    }

}
