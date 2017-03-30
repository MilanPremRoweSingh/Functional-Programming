//MILAN SINGH 
function constructAA (){
	return cons(cons(null,null),null); //ASsumed empty aa meant containig the structure but no data hence list of null
}

function addAA (aa,key,value){
	return cons(cons(key,value),aa); //Builds from the front so the null sublist is always at the end
}

function getValueAA (aa,key){
	if (key == car(car(aa))){ //1st car for sublist second for key
		return cdr(car(aa));
	} else if (car(cdr(aa))==null || car(cdr(aa))===undefined) { //car for sublist cdr for value
		return null;
	} else {
		return getValueAA(cdr(aa),key);
	}
}

function showAA (aa){
	
	if (cdr(aa)==null || cdr(aa)===undefined) {
		return "";
	} else {
		return car(car(aa)) + ":" + getValueAA(aa,car(car(aa)) ) + '\n' + showAA(cdr(aa));
	}
}

