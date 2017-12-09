var arr= [0,0,0,1,1,0,1,0];
for (var i=0, j=arr.length; i<j; i++) {
	arr[i]=1;
}
console.log(arr);



console.log('/******/')


var arrey= [1,0,2,3,1,0,4];
for (var i=0, j=arrey.length; i<j; i++) {
	if (arrey[i]==0) {
		arrey[i]=1
	}
}
console.log(arrey);


console.log('/******/')

var counter=0;
for (var i=0, j=arrey.length; i<j; i++) {
	if (arrey[i]==1) {
		counter++;
	}
}
console.log(counter);