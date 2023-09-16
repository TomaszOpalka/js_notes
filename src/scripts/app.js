const data = [
    {
        name: "pawel",
        city: "krakow",
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: "aleksandra",
        city: "lodz",
        age: 31,
        hobbies: ['movies', 'dance', 'food']
    },
    {
        name: "marcel",
        city: "krakow",
        age: 28,
        hobbies: ['photography', 'bikes', 'parties']
    },
    {
        name: "tomasz",
        city: "wroclaw",
        age: 22,
        hobbies: ['league of legends', 'motocykle']
    },
    {
        name: "romek",
        city: "sierpc",
        age: 20,
        hobbies: ["programming", "sport", "games"]
    },
    {
        name: "andrzej",
        city: "kolin",
        age: 34,
        hobbies: ['anime', 'games', 'sleep']
    },
    {
        name: "marcin",
        city: "knurow",
        age: 40,
        hobbies: ['bike', 'swimming', 'else']
    },
    {
        name: "wojtek",
        city: "czeladz",
        age: 49,
        hobbies: ["bicykle", "drums", "animals"]
    },
    {
        name: "przemek",
        city: "katowice",
        age: 28,
        hobbies: [`css`, `cars`, `drugs`]
    },
    {
        name: "monika",
        city: "poznan",
        age: 35,
        hobbies: ["board games", "reading", "japanese culture"],
    },
    {
        name: "szymon",
        city: "krakow",
        age: 28,
        hobbies: ["sport", "combat", "money"],
    },
    {
        name: "nataliia",
        city: "sambor",
        age: 30,
        hobbies: ["law", "bjd", "pencil_drawing", "painting_clothes", "clay_statues", "board_games"]
    },
    {
        name: "mateusz",
        city: "sulechow",
        age: 26,
        hobbies: ["history", "military", "astronomy"]
    }
]

//policz średnią wieku
let totalAge = 0;

// for(const person of data){
//     totalAge+= person.age;
// }

// for(let i = 0; i < data.length; i++){
//     totalAge+= data[i].age
// }

// let counter = 0;
// while (counter < data.length){
//     totalAge+= data[counter].age
//     counter++;
// }

// const result = totalAge / data.length;
// console.log(result);
// // console.log(data.length);

// Array.prototype.map = function (cb) {
//     const temp = [];
//
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//
//
//     return temp;
// }

// function countHobbies(elements) {
//     let hobbies = [];
//
//     for (const element of elements) {
//         // hobbies.concat(element.hobbies)
//         // hobbies = [...hobbies, ...element.hobbies]
//         for (const hobby of element.hobbies) {
//             hobbies.push(hobby)
//         }
//     }
//
//     // elements.forEach((element) => {
//     //
//     // })
//     return new Set(hobbies).size
// }

////////////poniżej znajduje się to samo w różnych sposobach zapisu na dole jest jednolinijkowy
// function countHobbies(elements){
//     const hobbies = elements
//         .flatMap((element)=>element.hobbies)
//     // to samo .flatMap co osobno bo często kożysta się z MAPOWANIA Z FLATEM czyli scalaniem w jedną tablicę
//         // .map((element)=>element.hobbies)
//         // .flat();
//
//     return (new Set(hobbies)).size
// }
// const countHobbies= (elements) => {
//     return (new Set(elements.flatMap((element)=> element.hobbies))).size;
// }

//najkrótsze rozwiązanie
const countHobbies= (elements) => (new Set(elements.flatMap((element)=> element.hobbies))).size;


const result = countHobbies(data);
console.log(result)


//czy są ludzie powyżej 30
const isOldPeople = (items)=>{
    for(const item of items) {
        if (item.age> 30){
            return true;
        }
    }
    return false;
}
console.log(isOldPeople(data));

const isOldPeople2 = (items) => items.some((item)=>item.age>30);
console.log(isOldPeople2(data));

