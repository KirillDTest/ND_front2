/* 1 */

var arr= [32.6, 31.2, 35.2, 37.4, 44.9, 42.1, 44.1];
var arrMid= [];
for(var i= 0; arr.length > i; i++){

		arrMid[i]= (arr[i-1] + arr[i] + arr[i+1]) / 3;
		if( i == 0 ){
			arrMid[i]= arr[i]
		}
		if( i == arr.length - 1 ){
			arrMid[i]= arr[i]
		}
}

console.log( arrMid );

/* 2 */

var arrNum= [1, 2, 3, 2, 3, 1, 1, 1, 1, 3];
var counter1 = counter2 = counter3 = 0;
for(var i= 0, j= arrNum.length -1; j >= i; i++){
	if( arrNum[i] == 1 ){
		counter1++;
	}
	else if( arrNum[i] == 2 ){
		counter2++;
	}
	else{
		counter3++;
	}
}

console.log(counter1, counter2, counter3)