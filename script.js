class Person {
    constructor(name, gender) {
      this.name = name
      this.gender = gender
    }
  }

  class Apartment {
    constructor() {
      this.inhabitants = [];
    }

    
  addResident(person) {
    this.inhabitants.push(person);
  }

}

class House {
  constructor( maxamount ) {
    this.maxamount = maxamount;
    this.flats = [];
  }

  
addApartment(apartment) {
  if (this.flats.length >= this.maxamount) {
    console.log("Перебор")
    return;
  }
  this.flats.push(apartment);
}
}

const person1 = new Person("Alice", "female");
const person2 = new Person("Nick", "male");
const person3 = new Person("Jack", "male");
const person4 = new Person("Liza", "female");
const person5 = new Person("Anastasia", "female");
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();
const apartment5 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);
apartment4.addResident(person4);
apartment5.addResident(person5);

const house1 = new House(4);
house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment3);
house1.addApartment(apartment4);
house1.addApartment(apartment5);

console.log(house1)