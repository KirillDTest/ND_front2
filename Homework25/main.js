var Bicycle = function (s,a,b) {
	var meetPoint = s/(a+b);
	return meetPoint ;
}

console.log(Bicycle(10,1,1));
console.log(Bicycle(20,1,2));


console.log('///////////////');




var Triagle = function(a,b,c) {
	if ( (a+b)<=c || (b+c)<=a || (a+c)<=b ) {
		return 'Triagle does not exists'
	}
	else {
		return 'Triagle exists'
	}
}

console.log(Triagle(3,4,5));
console.log(Triagle(1,2,4));

