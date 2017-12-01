var a= 80;
var b= 1.73;
var BMI= a/(b*b);

if (BMI < 18.5){
	console.log("недостаточная масса")
};
if (18.5 <= BMI && BMI < 25.0){
	console.log("норма")
};
if (25.0 <= BMI && BMI < 30.0){
	console.log("избыточная масса")
};
if (30.0 <= BMI){
	console.log("ожирение")
};
