
var array=[[2,3,7,0],[20,10,0],[1,0]],
	avg=[];
	console.log(array);

for(i=0, j=array.length; i<j; i++){
	avg[0]=(array[i][0]+array[i][1]+array[i][2])/3;
	avg[1]=(array[i][0]+array[i][1])/2;
	avg[2]=array[i][0]/1;

	console.log(avg[i])
}

