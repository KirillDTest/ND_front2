var RotateString= function(string, k){
	string= string.slice(k)+string.slice(0,k);
	return string;
}
console.log(RotateString('forwhomthebelltolls',3));
console.log(RotateString('verycomplexnumber',-6));