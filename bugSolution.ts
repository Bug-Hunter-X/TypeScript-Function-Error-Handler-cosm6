function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(', ');
}

let user = ["Jane User", "John User"];

console.log(greeterArray(user)); //Correct: Hello, Jane User, John User

let userSingle = "Jane User";
console.log(greeter(userSingle)); //Correct: Hello, Jane User