

var a;
a = 10;
console.log(a);


var multiArray= [ 
				   [1,
					['A',
						['Johnny','Fred','Butch','MrWhite'],	
					'B',
						['Lisa','Jack','Harikiran','MrBrown'],
				  ],
				   2,
					['A',
						['Rick','Hesus','Jessica','MrRed'],
					'B',
						['Sanantha','Roger','Akhmed','MrGrey']
					]
					]
				]	
console.log(multiArray[0][3][3][2])
console.log(multiArray)

console.log('//////////////')

var difference= function(num1, num2) {
	return num1-num2;
}

console.log(difference(100, 25))
console.log('//////////////')

var asotiativeArray= {
						parallel1:{
							classA: 
								{ student1:'Chack',
								  student2:'Steve',
								  student3:'Lurdes',
								  teacher:'MrPink'
								},
							classB:
								{ student1:'Zhora',
								  student2:'Sara',
								  student3:'Abu',
								  teacher:'MrOrange' 	
								}	
						},
						parallel2:{
							classA:
								{ student1:'Ali',
								  student2:'Mike',
								  student3:'Ashlyn',
								  teacher:'MrAzure'	
								},
							classB:
								{ student1:'Nicky',
								  student2:'Goldie',
								  student3:'Omar',
								  teacher:'MrBlack'
								}	
						}
}
console.log(asotiativeArray)
console.log(asotiativeArray['parallel2']['classB']['teacher'])