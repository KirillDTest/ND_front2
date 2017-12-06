console.log('Smoothing the Weather')

var deg=[32.6,31.2,35.2,37.4,44.9,42.1,44.1];
var smooth=[];
var smooth = smooth.concat(deg);

console.log(deg)

for(i=0, j=smooth.length; i<j-2; i++){
	smooth[i]=(smooth[i]+smooth[i+1]+smooth[i+2])/3
	console.log(smooth[i])
}


console.log('///////////')

console.log('Array Counters')

var numbers=[1,2,3,2,3,1,1,1,1,3];
console.log(numbers)

for(i=0, j=numbers.length, c1=0, c2=0, c3=0; i<j; i++){
	if (numbers[i]==1){
		c1++
	}
	if (numbers[i]==2){
		c2++
	}
	if (numbers[i]==3){
		c3++
	}
}
console.log(c1,c2,c3)



