let scaleWeight= (height, weight) =>{
	bmi= weight / (height * height);
	if( bmi < 18.5 ){
		return 'недостаточная масса';
	} else if( 18.5 <= bmi && bmi < 25 ) {
		return 'норма';
	} else if( 25 <= bmi && bmi < 30 ) {
		return 'избыточная масса';
	} else {
		return 'ожирение';
	} 
}