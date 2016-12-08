var prenom, resultat, form, question;
prenom = prompt("Indiquez votre prénom");
resultat = (" le roi des animaux");

if(prenom == "julien") {
	form = prompt("julien le formateur ? oui ou non ?");
}
if(form == "oui") {
	alert("c'est le meilleur !");
}

else if(prenom == "robert"){
	alert(prenom + resultat);
}
if(prenom =="hasna"){
	question = prompt("Oh, hasna ! Veux tu que je supprime tout tes fichiers ? oui ou non ?");
}
if (question == "oui"){
	alert("Aucun problème ! Viens par ici je m'en occupe !");

}
else if(question == "non"){
	alert("Okok dommage");
}
else
{
	alert("J'aime que les robert");
}