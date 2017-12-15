console.log('Maximumofarray')

var Maximumofarray = function(arr){

	var result =[]
	var minimum=Infinity
	var maximum=0
	for(i=0, j=arr.length; i<j; i++){
		
		
		if (maximum<arr[i]){
		  	maximum=arr[i]

		}
		
		if (minimum>arr[i]){
			minimum=arr[i]
			
		}
		result[0]=maximum;
		result[1]=minimum;
	}

	return result
}
console.log(Maximumofarray([1,2,3,4,5,20,100,190,6,7,8,40]))






console.log('SortwithIndexes')

var SortwithIndexes = function (array){
do{
	var x=0
	
	for(i=0, j=array.length, c=0; i<j; i++){
		

			if (array[i]>array[i+1]){
			  	x=array[i]
			    array[i]=array[i+1]
				array[i+1]=x 
				c++
			}
		}
 	}	 
 		while (c>0)
 			

 		return array
}
console.log(SortwithIndexes([50,98,17,79]))

var index=SortwithIndexes([50,98,17,79])

index.forEach( function(i,v,a){
	console.log(v)
})

//Не смог придумать как выполнить:"Ответ должен содержать исходные 
//индексы элементов в порядке получившемся после сортировки."
