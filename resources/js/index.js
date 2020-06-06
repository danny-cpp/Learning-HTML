const s = 'helloWorld';

console.log(`This is a concatenated string: ${s}`); 

const myArray =  new Array(1, 3, 4);

//console.log(tosplit.split('. '));

console.log(myArray.indexOf(5));

const car = {
    brand: 'BMV',
    year: 2000,
    spec: ["orange", "titanium", "turbo"]
}

console.log(car.spec[1]);

const todos = [
    {
        id: 1,
        text: "meeting",
        isComplete: false,
    },
    {
        id: 2,
        text: "cleaning",
        isComplete: false,
    },
    {
        id: 3,
        text: "sleeping",
        isComplete: true,
    },
    
]

console.log(todos[1].isComplete);

//for (d of todos) {
//    console.log(d.isComplete);
//}
    
const doneList = todos.filter(function(d) {
    return d.isComplete == true;
}).map(function(e) {
    return e.text;
})

console.log(doneList);





































