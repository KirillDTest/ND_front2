function Palindromes (string) {
	var stringReplase=string.replace(/[^A-zА-я]/g, '').toLowerCase();
	var stringReverse='';

	for (var i=stringReplase.length-1; i>=0; i--) {
		stringReverse=stringReverse + stringReplase[i];
	}

	if (stringReplase==stringReverse) {
			return ['yes', string];
	} 
	else {
		return  ['no', arguments];
	}

}

console.log(Palindromes('O, a kak Uwakov lil vo kawu kakao!'));
console.log(Palindromes('Stars'));
console.log(Palindromes('Some men interpret nine memos'));
