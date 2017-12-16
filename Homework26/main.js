
var MaxMinArr = function (array) {
	var arrayMax= -Infinity,
		arrayMin= Infinity;
	for (var i=0, j=array.length; i<j; i++) {
		if (array[i]>arrayMax) {
			arrayMax= array[i];
		}

		if (array[i]<arrayMin) {
			arrayMin=array[i];
		}
	}
	console.log(arrayMax, arrayMin);
	return array;	
}
console.log(MaxMinArr([1,2,3,4,5,20,100,190,6,7,8,40]));


