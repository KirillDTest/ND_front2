// max min
var arr= [1,2,3,4,5,20,100,190,6,7,8,40];
var funMaxMin= function(arr){
	var max= min= arr[0];
	for(var i= 0, l= arr.length; i < l; i++){
		max= arr[i] > max ? arr[i] : max;
		min= arr[i] < min ? arr[i] : min;
	}
	return 'Max: ' + max + ' Min: ' + min;
}

console.log( funMaxMin(arr) );


// sort
var arr= [50, 98, 17, 79];

var funSort= function(arr){
	var arrNum= [];
	for(var i= 0, l= arr.length; i < l; i++){
		arrNum[i]= i + 1;
	}
	do{
		var counter= 0;
		for(var i= 0, l= arr.length; i < l; i++){
			var tmp= arr[i];
			var tmpI= arrNum[i];
			if( arr[i] > arr[i + 1] ){
				arr[i]= arr[i + 1];
				arr[i + 1]= tmp;
				arrNum[i]= arrNum[i + 1];
				arrNum[i + 1]= tmpI;
				counter++;
			}
		}
		if( counter == 0 ){
			return arrNum;
		}
	} 
	while( counter > 0 ){

	}
}

console.log( funSort(arr) );