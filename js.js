// Цыклы 
var asocArr= {a: 10, b: 20, foo: 'bar'}
// итерируется по ключаа i это ключ
for(i in asocArr){
	console.log("/////////////////////");
	console.log(i);
	console.log(asocArr[i]);
}
arrSmpl= [1, 2];
// итерируется по значениям i это значение, по асоциативному не итерируется
for(i of arrSmpl){
	console.log("/////////////////////");
	console.log(i);
}
// этот цыкл асинхронный поэтому из него нельзя сделать return
/*
	1-e value
	2-e индекс 
	3-е массив
*/
arrSmpl.forEach( (v, i, a)=>{
	console.log( arrSmpl );
} );

// Массивы
var arr= [1, 2 ,3]
// Объеденяет значения в массиве, в качестве параметра передаётся разделитель, если он не указан элементы будут разделены запятыми
arr.join('');
// Распологает элементы массива в обратном порядке
arr.reverse();


Методы массивов:
добавить элемент/элементы в конец массива: push()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push

убрать элемент в конце массива: pop()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

------------------

добавить элемент/элементы в начало массива: unshift();
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

убрать элемент в начале массива: shift()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift


-------------------

удалить из массива с указанного индекса определённое количество значений: splice();
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

метод slice() для массивов, а не для строк:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Сравните различие slice и splice. 
slice копирует значения и создаёт новый массив из скопированных элементов (и возвращает массив). (аналог ctrl-c)
splice удаляет значения из массива и возвращает массив, состоящий из удалённых элементов. Более того, у splice есть третий аргумент, который может заполнить удалённый участок этим третьим аргументом.


// Строки
var myStr= 'Строка 1 Строка 2';
// Возвращает подстроку в указонном диапазоне, если указать отрицательное значение - считает с конца
myStr.slice( 0, 2);

// Возвращает индекс на котором произошло совпадение, если совпадений нет - вернёт -1
myStr.search('ка');

// Возвращает массив согласно регулярному выражению
myStr.match(/Строка/g); // [Строка, Строка]