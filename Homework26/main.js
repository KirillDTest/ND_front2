
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
	return [arrayMax,arrayMin];	
}
console.log(MaxMinArr([1,2,3,4,5,20,100,190,6,7,8,40]));


console.log('/////////');

var BubbleSort = function (arr) {
	var arrNew=[];
	for (var i=0, j=arr.length; i<j; i++) {
		arrNew[i]=arr[i];
	}
 	do{
 		var counter=0;
		for(var i =0, j= arrNew.length; i<j; i++) {
			if (arrNew[i]>arrNew[i+1]){
				var temp= arrNew[i];
				arrNew[i]=arrNew[i+1];
				arrNew[i+1]=temp;
				counter++;
			}
			
		}

	}

	while(counter>0)
	return arrNew;	
}


var SortWithIndexes = function(beforeSort) {
	var indexes=[];
	var	afterSort= BubbleSort(beforeSort);
	for (var i=0, j=afterSort.length; i<j; i++){
		for(var c=0; c<j; c++){
			if(afterSort[i]==beforeSort[c]){
				indexes[i]=c+1;
			}
		}
	}
	return indexes;
}

console.log(SortWithIndexes([50,98,17,79]));



// var SortWithIndexes = function(beforeSort, afterSort) {
// 	var indexes=[];

// 	for (var i=0, j=afterSort.length; i<j; i++){
// 		for(var c=0; c<j; c++){
// 			if(afterSort[i]==beforeSort[c]){
// 				indexes[i]=c+1;
// 			}
// 		}
// 	}
// 	return indexes;
// }

// console.log(SortWithIndexes([50,98,17,79], [17,50,79,98]));