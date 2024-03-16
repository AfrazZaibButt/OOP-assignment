class person {
    constructor(name, age, exp) {
        this.age = age;
        this.exp = exp;
        this.name = name;
    }
    speak() {
        console.log(`my name is ${this.name} and my exp is ${this.exp}`);
    }
}
class dev extends person {
    constructor(name, age, exp, profes) {
        super(name, age, exp);
        this.profes = profes;
    }
    speak() {
        console.log(`my name is ${this.name} and my age is ${this.age} and my profes is ${this.profes}`);
    }
}
const Person = new person("CodeWithHUzaifa", 19, "10");
const Dev = new dev("CodeWithHuzaifa", 19, "20", "frontend developer");
Person.speak();
Dev.speak();
export {};