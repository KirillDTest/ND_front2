var str= '123456789';

var fun= ( str, num )=>{
	return str.slice( num, str.length ) + str.slice( 0, num );
}

console.log( fun(str, 3) )
console.log( fun(str, -3) )