export class Wife {
    name:string;
    age:number;
    gender:string;
    constructor(name:string, age:number, gender?:string) {
        this.name = name;
        this.age = age;
        this.gender = gender
    }
    action () {
        console.log(`I'm ${this.gender? this.gender : 'nobody'}`)
    }
}