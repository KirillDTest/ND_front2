function Palindromes (string) {
	string=string.replace(/[^A-zА-я]/g, '').toLowerCase();
	var stringReverse='';

	for (var i=string.length-1; i>=0; i--) {
		stringReverse=stringReverse + string[i];
	}

	if (string==stringReverse) {
			return 'yes';
	} 
	else {
		return  'no';
	}

}

console.log(Palindromes('O, a kak Uwakov lil vo kawu kakao!'));
console.log(Palindromes('Stars'));
console.log(Palindromes('Some men interpret nine memos'));
