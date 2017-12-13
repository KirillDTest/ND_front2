console.log('Bicycle Race')

var BicycleRace = function(s,a,b){
	var x=0
	for (i=0, j=arguments.length; i<j; i++){

		x=(s/(a+b))*a
	}

	return x
}
console.log(BicycleRace(10,1,1))
console.log(BicycleRace(20,1,2))
console.log('Control')
console.log(BicycleRace(10,1,5))
console.log(BicycleRace(40,3,5))
console.log(BicycleRace(40,3,4))


console.log('Triangles')

var Triangles = function(a,b,c){
	
	var x=0
	for(i=0, j=arguments.length; i<j; i++){

		if (a+b>c && a+c>b && b+c>a){
			x=1
		}

		else {
			x=0
		}
	}

	return x
	
}
console.log(Triangles(3,4,5))
console.log(Triangles(1,2,4))
console.log('Control')
console.log(Triangles(4,6,6))
console.log(Triangles(4,4,9))
console.log(Triangles(2,2,10))


