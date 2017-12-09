var arr= [
	[2, 3, 7, 0],
	[20, 10, 0],
	[1, 0]
];
var sun= [];

for(i=0, j=arr.length; i<j; i++){
	sun[0]=(arr[i][0]+arr[i][1]+arr[i][2])/3;
	sun[1]=(arr[i][0]+arr[i][1])/2;
	sun[2]=arr[i][0]/1;

	console.log(sun[i])
}
