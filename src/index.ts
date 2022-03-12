class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const bbo = new Human("bbo", 30, "female");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person}, you are a ${person.gender}!`;
};

console.log(sayHi(bbo));

export {};
