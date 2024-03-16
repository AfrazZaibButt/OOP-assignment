class person{
    name:string;
    age:number;
    exp:string;

    constructor(name:string,age:number,exp:string){
        this.age=age;
        this.exp=exp;
        this.name=name;
    }

    speak(){
        console.log(`my name is ${this.name} and my exp is ${this.exp}`);
    }

}

class dev extends person{
    profes:string;

    constructor(name:string,age:number,exp:string,profes:string){
        super(name,age,exp)
        this.profes=profes;
    }

    speak(){
        console.log(`my name is ${this.name} and my age is ${this.age} and my profes is ${this.profes}`);
    }
}

const Person=new person("CodeWithHUzaifa",19,"10");
const Dev=new dev("CodeWithHuzaifa",19,"20","frontend developer");

Person.speak();
Dev.speak();