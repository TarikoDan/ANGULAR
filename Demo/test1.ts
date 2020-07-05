import {User} from "./Classes/User";
import {Wife} from "./Classes/Wife";
function foo(user:{name:string, age:number}) {
    user.name.toUpperCase()
}
foo({name:'aaaa', age:33});

function f1(user:User) {
    console.log(user.name, user.wife);
    user.greeting();
    user.wife.action()
}
let wife = new Wife("aaabbb", 18);
let user = new User("aaa", 33, ["a", "v"], wife);

f1(user);

/////////////////////////////////////

enum genderEnam {
    MALE = 'male',
    FEMALE = 'female'
}

interface IUser {
    name: string;
    age: number;
    skills: string[];
    gender?: genderEnam;
}

function oldestUser (users:IUser[]):IUser {
    return users.sort((a, b) => b.age - a.age)[0]
}

const viki:IUser = { name:"Viki", age:45, skills:['sd', 'dswd'], gender:genderEnam.MALE};
const lilu:IUser = { name:"Lilu", age:11, skills:['sd', 'dswd'], gender:genderEnam.FEMALE};
const soros:IUser = { name:"Soros", age:80, skills:['sd', 'dswd'], gender:genderEnam.MALE};

console.log(oldestUser([viki, lilu, soros]));

class Class {
    // ідентифікатори доступу
    public run () {}        // видимий в класі, нащадках та ззовні
    protected Bday () {}    // видимий в класі, нащадках
    private reName () {}    // видимий тільки в межах класу
}