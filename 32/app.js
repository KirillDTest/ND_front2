let btn= document.getElementById('btn');
let container= document.getElementById('container');
let counter= 0;
btn.addEventListener('click', ( e ) =>{
	counter++;
	let div= document.createElement('div');
	container.appendChild(div);
	div.innerHTML= counter;
});