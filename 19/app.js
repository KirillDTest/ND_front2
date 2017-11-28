var school= [
	{
		"class" : {
			"A" : {
				"teacher" : "Бобёр",
				"student" : [
					{ "name" : "Кирпичь 1" },
					{ "name" : "Кирпичь 2" },
					{ "name" : "Кирпичь 3" }
				]
			},
			"B" : {
				"teacher" : "Палка",
				"student" : [
					{ "name" : "Белка 1" },
					{ "name" : "Белка 2" },
					{ "name" : "Белка 3" }
				]
			}
		}
	},
	{
		"class" : {
			"A" : {
				"teacher" : "Бобёр",
				"student" : [
					{ "name" : "Кирпичь 1" },
					{ "name" : "Кирпичь 2" },
					{ "name" : "Кирпичь 3" }
				]
			},
			"B" : {
				"teacher" : "Палка",
				"student" : [
					{ "name" : "Белка 1" },
					{ "name" : "Белка 2" },
					{ "name" : "Белка 3" }
				]
			}
		}
	}
]

console.log( school );

var difference= function( a, b ){
	return a - b;
}

console.log( difference( 7, 5 ) );