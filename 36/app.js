// 1
let arr1= [1, 3, 5, 7, 9, 11, 295, 297, 299, 300, 298, 296, 12, 10, 8, 6, 4, 2];
console.log(_.max(arr1))

// 2
let arr2= [[2, 3, 7, 0], [20, 10, 0], [1, 0]];
let listNum= [];
_.forEach( arr2, e => {
	listNum.push( _.ceil( _.mean(e) ) );
});
console.log( listNum );

//3
let arr3= [1, 2, 3, 2, 3, 1, 1, 1, 1, 3];
console.log( _.countBy(arr3, Math.floor) )
