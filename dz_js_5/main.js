var array= [0,0,0,1,1,0,1,0];
console.log(array);
for(i=0, j=array.length; i<j; i++){
	array[i]= 1;
};
console.log(array);
console.log("///////");

var arr= [1,0,2,3,1,0,4];
console.log(arr);
for(i=0, j=arr.length; i<j; i++){
	if(arr[i]==0){
		arr[i]=1;
	};
};
console.log(arr);
console.log("///////");
