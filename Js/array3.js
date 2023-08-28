var students = [{
    "name": "John",
    "age": 22,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
},
{
    "name": "sandeep",
    "age": 35,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "cricket"
    },
    "class" : ["React", "HTML", "CSS"]
},
{
    "name": "Phani",
    "age": 30,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "cricket"
    },
    "class" : ["React"]
}]


const filterByHobby = function (list, hobby) {
    let filtered = list.filter(student => Object.keys(student.hobby).includes(hobby));
    console.log("Filter by hobby", filtered);
}

filterByHobby(students, 'sport');

//second

const filterByAge = (students, age) => {
    let filtered = students.filter(student => student.age >= age);
    console.log("Filter by age: ", filtered);
}

filterByAge(students, 30);


//---------------------------------------
let sprots = student.filter(obj => function( obj){
 return obj.hobby.sport=='cricket';    
});
console.log("spors" , sprots)
let sport = student.filter(sp => sp.hobby.sport == "cricket");
console.log(sport);
// write a program to get age>30 people
console.log("-----------age>30-------")
let age = student.filter(studentAge => studentAge.age>30);
 console.log(age)

 //---------------------------------------------
 //function studentsAge(eAge){

const eage = students.filter((item) => {
    return item.age > eAge
  })

console.log("student age grater than 30 is" , age);



studentsAge(30);