

var TaskButton = document.querySelector('button');


var i=0;

TaskButton.addEventListener('click', function(newDiv){

	var temp= document.createElement('div')

	document.body.appendChild(temp)

	temp.style.cssText='background-color: purple; width: 100px; height: 100px; border-radius: 50%; display: flex; justify-content: center; align-items: center;'

	temp.innerHTML=i++
	
})


