// triangle
var triangle= (arr)=>{
	for(var i= 0, l= arr.length; i < l; i++){
		let tmp= arr[i];
		let tmp2= arr[1];
		if( arr[0] > arr[1] + arr[2] || arr[0] == arr[1] + arr[2] ){
			return "no";
		}
		arr[0]= arr[2];
		arr[1]= tmp;
		arr[2]= tmp2;
	}
	return "yes";
}

console.log( triangle( [3, 4, 5] ) );
console.log( triangle( [1, 2, 4] ) );

// velo
var distanceA= (a, b, s)=> {
	return s / (a + b);
}

console.log( distanceA(1, 1, 10) );
console.log( distanceA(1, 2, 20) );