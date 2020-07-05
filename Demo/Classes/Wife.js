"use strict";
exports.__esModule = true;
exports.Wife = void 0;
var Wife = /** @class */ (function () {
    function Wife(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Wife.prototype.action = function () {
        console.log("I'm " + (this.gender ? this.gender : 'nobody'));
    };
    return Wife;
}());
exports.Wife = Wife;
