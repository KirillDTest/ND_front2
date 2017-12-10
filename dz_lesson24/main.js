var sum= function(a,b){
// console.log(arguments);
for(i=0, j=arguments.length; i<j; i++){
		if (typeof(arguments[i]) != 'number' || isNaN(arguments[i])
		 || arguments[i]==Infinity || arguments[i]==-Infinity || arguments.length != 2){
		return 'Please type arguments whith type number'
		}
			return a+b
	}

}

	
console.log(sum(10,20))

console.log('///////')

// var array= [10,20,30,40,5,6,'strarraying',8];
// var sum=0
// 	for(i=0, j=array.length; i<j; i++){
// 		if (typeof(array[i]) == 'number' && !isNaN(array[i]) && array[i]!=Infinity && array[i]!=-Infinity){
// 			sum=sum+array[i]
// 	}
		

// }
// console.log(array)
// console.log(sum)

console.log('///////')

var sumInLoop= function(array){
	var sum=0;
	for(i=0, j=array.length; i<j; i++){
		for(i=0, j=array.length; i<j; i++){
		if (typeof(array[i]) == 'number' && !isNaN(array[i]) && array[i]!=Infinity && array[i]!=-Infinity){
			sum=sum+array[i]
		}
	}
	}
	return sum
}
console.log(sumInLoop([10,20,30,40,5,6,'strarraying',8]))

var bigSums =function(){
	var arraysSumCount = []

for(var i=0, j=arguments.length, c=0; i<j; i++){
	if(typeof(arguments[i]=='object')){
		c = c+sumInLoop(arguments[i])

	}

	if(typeof(arguments) == 'number'){
	return sum(arguments)
	}
}
	return arraysSumCount[i]=c+sumInLoop(arguments)
}

console.log(bigSums(20,30))
console.log(bigSums([20,30,50],[10,20,70]))
console.log(bigSums([20,10],[20,50],50, 50,[10,10]));
console.log(bigSums([20,10],[20,50],50, 50,[10,10],10, 10,[10,10]));

