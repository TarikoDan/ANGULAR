"use strict";
exports.__esModule = true;
var User_1 = require("./Classes/User");
var Wife_1 = require("./Classes/Wife");
function foo(user) {
    user.name.toUpperCase();
}
foo({ name: 'aaaa', age: 33 });
function f1(user) {
    console.log(user.name, user.wife);
    user.greeting();
    user.wife.action();
}
var wife = new Wife_1.Wife("aaabbb", 18);
var user = new User_1.User("aaa", 33, ["a", "v"], wife);
f1(user);
function oldestUser(users) {
    return users.sort(function (a, b) { return b.age - a.age; })[0];
}
var viki = { name: "Viki", age: 45, skills: ['sd', 'dswd'], gender: 'man' };
var lilu = { name: "Lilu", age: 11, skills: ['sd', 'dswd'], gender: 'woman' };
var soros = { name: "Soros", age: 80, skills: ['sd', 'dswd'], gender: 'man' };
console.log(oldestUser([viki, lilu, soros]));
