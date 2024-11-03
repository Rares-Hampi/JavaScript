let obj ={
    name: "John",
    age: 30,
    city: "New York"
}

// console.log(obj)

// // accesarea unui element din obiect

// console.log(obj.name)

// // modificarea unui element din obiect

// obj.name = "Jane"
// console.log(obj)

// // adaugarea unui element in obiect

// obj.job = "developer"
// console.log(obj)

// // stergerea unui element din obiect

// delete obj.job
// console.log(obj)

// // parcurgerea obiectului

// for (let key in obj) {
//     console.log(key, obj[key])
// }

// console.log(obj['name'])

// parcurgerea obiectului cu Object.keys
Object.keys(obj).forEach((key) => {
    console.log(key, obj[key])
})

let list = Object.keys(obj); // intoarce un array cu cheile obiectului
console.log(list)

// parcurgerea obiectului cu Object.values
Object.values(obj).forEach((value) => {
    console.log(value)
})


// parcurgerea obiectului cu Object.entries
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value)
})

let entries = Object.entries(obj); // intoarce un array cu perechile cheie-valoare

console.log(entries)
