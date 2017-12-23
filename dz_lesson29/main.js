
var RotateString = function(arg, k){
	var string=''

	if (k>0) {
		string = arg.slice(k,18)+arg.slice(0,k)
	}
	else (string = arg.slice(k)+arg.slice(0,k))
	return string
}	
console.log(RotateString('forwhomthebelltolls','3'))
console.log(RotateString('verycomplexnumber','-6'))



