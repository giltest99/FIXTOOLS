
// Efface les 3 zones de texte
function init(){
	document.getElementById('source').value = '';
	document.getElementById('dest1').value = '';
	document.getElementById('dest2').value = '';
	document.getElementById('source').focus();
	console.log('Les 3 zones de texte sont effecées');
}

// Efface dest1 et dest2
function effacerDest(){
	document.getElementById('dest1').value = '';
	document.getElementById('dest2').value = '';
	console.log('Les zones dest1 et dest2 sont effacées');
}

// Trim source
function trimSource(){
	var source = document.getElementById('source').value.split('\n');
	console.log(source);
	var out = '';
	var tab = [];
	for(var i in source){
		if(source[i].trim() != ''){
			tab.push(source[i].trim());
		}
	}
	console.log(tab);
	for(var j in tab){
		out += tab[j].trim() + '\n';
	}
	out = out.slice(0,-1);
	document.getElementById('source').value = out;
	document.getElementById('dest1').value = out;	
	console.log(out);
}

// Ajoute le préfixe 00_
function ajouterPrefixe(){
	var source = document.getElementById('source').value.split('\n');
	console.log(source);
	
	var recup = [];
	for(var i in source){
		if(source[i] != ''){
			recup.push('00_' + source[i].trim());
		}
	}
	console.log(recup);
	
	var out = '';
	for(var j in recup){
		out += recup[j] + '\n';
	}
	out = out.slice(0,-1);
	document.getElementById('dest1').value = out;
	console.log(out);

	var out2 = '';
	for(var k in recup){
		out2 += recup[k] + ',';
	}
	out2 = out2.slice(0,-1);
	document.getElementById('dest2').value = out2;
	console.log(out2);
}

// Enlever le préfixe 00_
function enlevePrefixe(){

	var source = document.getElementById('source').value.split('\n');
	console.log(source);
	
	var recup = [];
	for(var i in source){
		if(source[i] != ''){
			recup.push(source[i].slice(3).trim());
		}
	}
	console.log(recup);
	
	var out = '';
	for(var j in recup){
		out += recup[j] + '\n';
	}
	out = out.slice(0,-1);
	document.getElementById('dest1').value = out;
	console.log(out);
	
	var out2 = '';
	for(var k in recup){
		out2 += recup[k] + ',';
	}
	out2 = out2.slice(0,-1);
	document.getElementById('dest2').value = out2;
	console.log(out2);
}

// Ajoute virgules
function ajouteVirgules(){
	var recup = document.getElementById('dest1').value.split('\n');
	var tab = [];
	for(var i in recup){
		if(recup[i].trim() != '')
			tab.push(recup[i]);
	}
	var out = '';
	for(var j in recup){
		out += recup[j] + ',' + '\n';
	}
	out = out.slice(0,-2);
	console.log(out);
	document.getElementById('dest1').value = out;
	
	var recup2 = document.getElementById('dest2').value.split(',');
	var out2 = '';
	for(var j in recup){
		out2 += recup[j] + ',';
	}
	out2 = out2.slice(0,-1);
	console.log(out2);
	document.getElementById('dest2').value = out2;

}

// Sélection zone de texte dest1
function selectDest1(){
	document.getElementById("dest1").select();
	console.log('Sélection de la zone dest1');
}

// Sélection zone de texte dest2
function selectDest2(){
	document.getElementById("dest2").select();
	console.log('Sélection de la zone dest2');
}

// Calcul de la somme
function somme(){
	var t = document.getElementById("source").value.split("\n");
	console.log(t);
	var t1 = [];
	for(i=0;i<t.length;i++){
	  t1.push(t[i].split("\t"));
	}
	console.log(t1);
	var len = t1.length;
	var len2 = t1[0].length;
	var tab = [];
	for(j=0;j<len;j++){
	  for(k=0;k<len2;k++){
		tab.push(parseFloat(t1[j][k]));
	  }
	}
	console.log(tab);
	var sum = 0;
	var res = 0;
	for(m=0;m<tab.length;m++){
	  if(!Number.isNaN(tab[m])){
		sum += tab[m];
	  }
	}
	console.log("La somme est : " + sum);
	document.getElementById("dest1").value = 'SOMME :  ' + sum;
}





