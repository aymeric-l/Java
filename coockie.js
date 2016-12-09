var prenom, resultat, form, question, chaussette, danger;
prenom = prompt("Indiquez votre prénom");

switch(prenom){
case 'julien' :
	form = prompt("julien le formateur ? oui ou non ?");
	if(form == "oui") {
		alert("c'est le meilleur !");
			}
		else if(form == "non") {
	alert("Ouf tant mieux, je l'aime pas beaucoup");
			}
		break;
case 'robert' : 
	alert(prenom + ' le roi des animaux');
		break;
case 'hasna' :
	question = prompt("Oh, hasna ! Veux tu que je supprime tout tes fichiers ? oui ou non ?");
		if(question== "oui") {
	alert("Pas de soucis, j'arrive !");
		}
		else if(question == "non") {
	alert("Dommage :(");
		}
	break;
case 'andrea' :
case 'andréa' :
	chaussette = prompt("As-tu mis tes belles chaussettes Mario ?");
		if(chaussette== "oui") {
	alert("Sexyyyy");
		}
		else if(chaussette == "non") {
	alert("Peut être une prochaine fois !");
		}
	break;
case 'aude' :
	danger = prompt("Vas-tu me tuer aujourd'hui ?");
		if(danger== "oui") {
	alert("Fais ca rapidement alors :'( :'(");
		}
		else if(danger == "non") {
	alert("Merci! Mais je vais me méfier quand même");
		}
	break;
	}




