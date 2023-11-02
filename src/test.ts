// primitive
function add(num1: number, num2: number) {
  console.log(num1 + num2)
}

add(1, 1)


// object
type Person = {
  name: string,
  surname: string
}

function greet(person: Person) {
  console.log(`Hello, ${person.name} ${person.surname}`)
}

let user = {
  name: 'Jeka', surname: 'Loh'}

greet(user)