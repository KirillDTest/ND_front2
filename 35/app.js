toggle.addEventListener('mousedown', (e)=>{
	let maxX= regulator.getBoundingClientRect().x + regulator.getBoundingClientRect().width - toggle.getBoundingClientRect().width;
	let minX= regulator.getBoundingClientRect().x;
	let move= (e)=>{
		let left= e.pageX - minX;
		if(e.pageX > maxX){
			left= regulator.getBoundingClientRect().width - toggle.getBoundingClientRect().width;
		}
		if(e.pageX < minX){
			left= 0;
		}
		toggle.style.left= left + 'px';
		let progressText= Math.round( ( 100 / (regulator.getBoundingClientRect().width - toggle.getBoundingClientRect().width) ) * left);
		progress.innerHTML= progressText + '%';
	}
	document.addEventListener('mousemove', move);
	document.addEventListener('mouseup', (e)=>{
		document.removeEventListener('mousemove', move);
	});
});