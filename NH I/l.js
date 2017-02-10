function max(a,b){
	if(isNaN(a) || isNaN(b)){
		return "WUDR";
	}
	return a > b ? a : b; 
}
function random(min,max){
	if(isNaN(min) || isNaN(max)){
		return "WUDR";
	}
	var x = Math.random();
	return Math.floor(min + x * (max - min));

}