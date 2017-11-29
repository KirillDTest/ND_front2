var school ={	parallel1: {
					classA: {
						learner1: "Denis",
						learner2: "Evgen",
						learner3: "Viktor",
						teacher: "Oleg"
					},
					classB: {
						learner1: "Ruslan",
						learner2: "Petro",
						learner3: "Taras",
						teacher: "Vadim"
					}
				},
				parallel2: {
					classA: {
						learner1: "Ura",
						learner2: "Oleksandr",
						learner3: "Stas",
						teacher: "Nikolay"
					},
					classB: {
						learner1: "Dima",
						learner2: "Maksim",
						learner3: "Sergiy",
						teacher: "Kiril"
					}
				}

}

console.log (school["parallel1"]["classB"]["learner2"]);

console.log (school["parallel2"]["classA"]["learner4"]);

console.log (school["parallel2"]["classA"]["teacher"]);