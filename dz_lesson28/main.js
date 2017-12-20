	var result=[]
	var i=7
	var temp=0
	var c=0
var Recursion =function(array) {

	c++
	if (i==0){
		return result[i]
	}

	if (array[i]>array[i+1]) {

		temp=array[i]
		array[i]=array[i+1]
		array[i+1]=temp
		
	}	

	i=i-1

	result[i]=array
	return 	Recursion(array)

}
console.log(Recursion([1,4,3,2,6,5]))
		console.log(c)