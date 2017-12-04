let arr= [
	[2, 3, 7, 0],
	[20, 10, 0],
	[1, 0]
];

var strMid= '';
for(var i= arr.length -1; i >= 0; i--){
	var mid= 0;
	for(var j= arr[i].length -2, arrMid; j >= 0; j--){
		mid= mid + arr[i][j];
	}
	strMid=strMid + ' ' + mid / (arr[i].length - 1);
}

console.log( strMid );