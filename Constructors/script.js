function Dog(ownersName, dogsName, color) {
  this.ownersName = ownersName;
  this.dogsName = dogsName;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Bob", "Fluffy", "Brown");
terrier instanceof Dog;

let retriever = new Dog("Michael", "Chloe", "Tan");
retriever instanceof Dog;

console.log(
    terrier.ownersName +
    " has a " +
    terrier.color +
    " dog named " +
    terrier.dogsName +
    "."
);

document.getElementById("dog-1").innerHTML =
  terrier.ownersName +
  " has a " +
  terrier.color +
  " dog named " +
  terrier.dogsName +
  ".";

console.log(
  retriever.ownersName +
    " has a " +
    retriever.color +
    " dog named " +
    retriever.dogsName +
    "."
);

document.getElementById("dog-2").innerHTML =
  retriever.ownersName +
  " has a " +
  retriever.color +
  " dog named " +
  retriever.dogsName +
  ".";