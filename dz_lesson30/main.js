
console.log('///////')



var palindromes = function(arg) {

	var result=''
	var answer=''

	arg= arg.replace(/[^A-z0-9]/g, '').toLowerCase()

	for(var i=arg.length-1; i>=0; i--){

		result =  result+arg[i]

		if (result.toLowerCase()==arg.toLowerCase()) {
			answer='Y'
		}
		else (answer='N')

	}

	return answer
}

console.log(palindromes('Stars'))
console.log(palindromes('somos'))
console.log(palindromes('O, a kak Uwakov lil vo kawu kakao!'))
console.log(palindromes('Some men interpret nine memos'))

	
	 