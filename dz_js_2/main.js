// variant1

// var a= 80;
// var b= 1.73;
// var BMI= a/(b*b);
//
// if (BMI < 18.5){
// 	console.log("недостаточная масса")
// };
// if (18.5 <= BMI && BMI < 25.0){
// 	console.log("норма")
// };
// if (25.0 <= BMI && BMI < 30.0){
// 	console.log("избыточная масса")
// };
// if (30.0 <= BMI){
// 	console.log("ожирение")
// };

// variant 2

// var a = prompt('Введите ваш вес','80');
// var b = prompt('Введите ваш рост','1.73');

// function BMI(a,b) {
// 	var result = a/(b*b);
// 	return result;
// }

// if (BMI(a,b) < 18.5) {
// 	alert('недостаточная масса');
// } else if (18.5 <= BMI(a,b) && BMI(a,b) < 25.0) {
// 	alert('норма');
// } else  if (25.0 <= BMI(a,b) && BMI(a,b) < 30.0){
// 	alert('избыточная масса');
// } else {
// 	alert('ожирение');
// }

// variant 3

var a = prompt('Введите ваш вес','80');
var b = prompt('Введите ваш рост','1.73');

function BMI(a,b) {
	var result = a/(b*b);
	if (result < 18.5) {
		alert('недостаточная масса');
	} else if (18.5 <= result && result < 25.0) {
		alert('норма');
	} else  if (25.0 <= result && result < 30.0){
		alert('избыточная масса');
	} else {
		alert('ожирение');
	}
	return result;
}
console.log(BMI(a,b));
