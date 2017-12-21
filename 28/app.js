/* Частичная сортировка - возвращает undefined если не поставить return напритив funSort */
var arr= [1, 4, 3, 2, 6, 5];

var funSort= ( arr, i= 0 )=>{
	if( i == arr.length  ){
		return arr;
	} 
	if( arr[i] > arr[i + 1]){
		var tmp= arr[i + 1];
		arr[i + 1]= arr[i];
		arr[i]= tmp;
	}
	i++;
	funSort( arr, i ); // не работает без return
}
console.log( funSort( arr ) );


/* Частичная сортировка - работает */
var arr2= [1, 4, 3, 2, 6, 5];

var funSort= ( arr, i= 0 )=>{
		if( i != arr.length  ){
			if( arr[i] > arr[i + 1]){
				var tmp= arr[i + 1];
				arr[i + 1]= arr[i];
				arr[i]= tmp;
			}
			i++;
			funSort( arr, i ); // работает без return
		}
		return arr;
}

console.log( funSort( arr2 ) );


/* Полная сортировка */
var arr3= [1, 4, 3, 2, 6, 5];

var funSortFull= ( arr, i= 0, counter= 0 )=>{
	if( i != arr.length  ){
		if( arr[i] > arr[i + 1]){
			var tmp= arr[i + 1];
			arr[i + 1]= arr[i];
			arr[i]= tmp;
			counter++;
		}
		i++;
		funSortFull( arr, i, counter );// работает без return
	}
	if(counter != 0 && i == arr.length){
		counter= 0;
		i= 0;
		funSortFull( arr, i, counter );// работает без return
	}
	return arr;
}
console.log( funSortFull( arr3 ) );