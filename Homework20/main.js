//BMI version1//
var bmi = function(weight, height) {
	return weight / (height * height)
}

console.log(bmi(80, 1.73));


//BMI version2// 
var bmi = function(weight, height) {
	return weight / Math.pow(height, 2)
}

console.log(bmi(80, 1.73));


//BodyMass varsion1//
var BodyMass = function (bmi){
	if (bmi<18.5) {
		return 'Underweight'
	}
	if (18.5<=bmi && bmi<25.0) {
		return 'Normal weight'
	}
	if (25.0<=bmi && bmi<30.0) {
		return 'Overweight'
	}
	if (30<=bmi) {
		return 'Obesity'
	}
}

console.log(BodyMass(bmi(80, 1.73)));

console.log(BodyMass(bmi(55, 1.58)));

console.log(BodyMass(bmi(49, 1.91)));



//BodyMass version2//
var BodyMass = function (weight, height){
	var bmi = weight / (height * height)
	if (bmi<18.5) {
		return 'Underweight'
	}
	if (18.5<=bmi && bmi<25.0) {
		return 'Normal weight'
	}
	if (25.0<=bmi && bmi<30.0) {
		return 'Overweight'
	}
	if (30<=bmi) {
		return 'Obesity'
	}
}

console.log(BodyMass(80, 1.73));

console.log(BodyMass(55, 1.58));

console.log(BodyMass(49, 1.91));






