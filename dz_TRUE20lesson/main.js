

var bmi= function(a, b){
	return a/(b*b)
}
console.log(bmi(65, 1.65))


var BodyMasIndex= function(a, b, c){
	if(bmi(65, 1.65)<a){
		return 'Underweight'
	};
	if(bmi(65, 1.65)<b){
		return 'NormalWeight'
	};
	if(bmi(65, 1.65)<c){
		return 'Overweight'
	};
	if(bmi(65, 1.65)>c){
		return 'Obesity' 
	}
}
console.log(BodyMasIndex(18.5, 25.0, 30.0))