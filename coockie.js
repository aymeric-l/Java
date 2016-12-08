var prenom, resultat, form, question, chaussette;
prenom = prompt("Indiquez votre prénom");
resultat = (" le roi des animaux");

if(prenom == "robert"){
	alert(prenom + resultat);

}

else if(prenom == "julien") {
	form = prompt("julien le formateur ? oui ou non ?");
		if(form == "oui") {
		alert("c'est le meilleur !");
			}
		else if(form == "non") {
	alert("je le savais");
			}
}
else if(prenom =="hasna"){
	question = prompt("Oh, hasna ! Veux tu que je supprime tout tes fichiers ? oui ou non ?");
		if(question== "oui") {
	alert("Pas de soucis, j'arrive !");
		}
		else if(question == "non") {
	alert("Dommage :(");
		}
}

else if(prenom == "robert"){
	alert(prenom + resultat);
}


else
{
	alert("J'aime que les robert");
}