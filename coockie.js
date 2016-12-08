//tu aimes pas les tableaux????
var classe[]; //<----
var prenom, resultat, form, question, chaussette, danger;
prenom = prompt("Indiquez votre prénom");
resultat = (" le roi des animaux");

if(prenom == "robert"){
	alert(prenom + resultat);
}
///que c'est chiant on peut pas faire une boucle?
else if(prenom == "julien") {
	form = prompt("julien le formateur ? oui ou non ?");
		if(form == "oui") {
		alert("c'est le meilleur !");
			}
		else if(form == "non") {
	alert("Ouf tant mieux, je l'aime pas beaucoup");
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
//encore? un petit objet pour tous les nom de la classe? avec leur texte perso
else if(prenom =="andrea"){
	chaussette = prompt("As-tu mis tes belles chaussettes Mario ?");
		if(chaussette== "oui") {
	alert("Sexyyyy");
		}
		else if(chaussette == "non") {
	alert("Peut être une prochaine fois !");
		}
	}
else if(prenom =="aude"){
	danger = prompt("Vas-tu me tuer aujourd'hui ?");
		if(danger== "oui") {
	alert("Fais ca rapidement alors :'( :'(");
		}
		else if(danger == "non") {
	alert("Merci! Mais je vais me méfier quand même");
		}
	}

else if(prenom == "robert"){
	alert(prenom + resultat);
}
//on finit ttj par un else !!!!!!!!!!!!!!!!!!!!!!!!!



else
{
	alert("J'aime que les robert");
}