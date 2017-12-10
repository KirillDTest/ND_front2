var sum= function(a, b){
	console.log( arguments );
	for(var i= 0, j= arguments.length; i< j; i++){
		if( typeof(arguments[i]) != 'number' || isNaN(arguments[i]) || arguments[i] == Infinity || arguments[i] == -Infinity ||  arguments.length != 2){
			return 'A ne number';
		}
		return a + b;
	}
}

var arr= [10, 20, 30, 40, 5, 6, '7', 8]
var sumInLoop= function( arr ){
	var sum= 0;
	for(var i= 0, j= arr.length; i < j; i++){
		if( typeof(arr[i]) == 'number' && !isNaN(arr[i]) && arr[i] != Infinity && arr[i] != -Infinity ){
			sum+= arr[i];
		}
	}
	return sum;
}


var bigSums= function(){
	var sumNum= 0;
	var sumArr= 0;
	var countNum= 0;
	for(var i= 0, j= arguments.length; i < j; i++){

		if(typeof(arguments[i]) == 'object'){
			sumArr+=  sumInLoop(arguments[i]);
		}
		if(typeof(arguments[i]) == 'number'){
			countNum++;
			sumNum+= sumInLoop(arguments);
		}
	}
	return (sumNum / countNum) + sumArr;

}
console.log(bigSums(10, [20, 55, 55], 10, [20, 55, 55]))