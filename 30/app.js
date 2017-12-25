var str= '-lol!';

var funPolindrom= ( str )=>{
	var strRevers= '';
	str= str.replace(/[^A-zА-я0-9]/g, '');
	for(var i= str.length - 1; i >= 0; i-- ){
		strRevers= strRevers + str[i];
	}
	return strRevers == str;
}

console.log( funPolindrom( str ) );