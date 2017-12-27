// arr
let problemIos= ( arr, step ) =>{
	let counter= 1;
	for(let i=0; arr.length > 1; i++){
		if( arr.length ==  i ){
			i= 0;
		}
		if( counter % step == 0 ){
			arr.splice(i, 1);
			i--;
		}
		counter++;
	}
	return arr[0];
}
let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( problemIos( arr, 3 ) );