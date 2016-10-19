function dwarfRollCall(dwarves) /*parameter is an array*/ {
  // return string with numbered dwarves
  var newStr = "";
  dwarves.forEach(function(name, idx) {
  	newStr += (idx+1 + ". " + name + " ");
  });
  return newStr;
}

function summonCaptainPlanet(planeteerCalls){
  //convert each element to uppercase and add !
  //return value is an array
  var result = [];
  planeteerCalls.forEach(function(ele) {
  	ele = ele.toUpperCase() + "!";
  	result.push(ele);
  });
  return result;
}

function longPlaneteerCalls(words) {
	//The longPlaneteerCalls method should accept an array of calls. The function should tell us if any of the calls are longer than four characters.
	var flag = false;
	words.forEach(function(word) {
		if(word.length > 4) {
			flag = true;
		}
	});
	return flag;
}

function findTheCheese (foods) {
	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		for(var j = i; j < cheese.length; j++){
			if(foods[i] === cheese[j]) {
				return cheese[j];
			}
		}
	}
	return "no cheese!";
}
