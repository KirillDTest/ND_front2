var temper=[32.6, 31.2, 35.2, 37.4, 44.9, 42.1, 44.1];
var mid= [];

for (var i=0, j=temper.length; i<j; i++) {
	mid[0]= temper[0];
	mid[i]= ( (temper[i-1]+temper[i]+temper[i+1])/3);
	mid[6]=temper[6];
}
console.log(mid);

