


"use strict";

import Person from "../practice_4/person";

class Teacher extends Person{
    constructor(name,age,klass){
     super(name,age);
     this.klass = klass;
    }
    
    introduce(){
        if(this.klass == undefined){
           return super.introduce() +` I am a Teacher. I teach No Class.`;
        }
        return super.introduce() +` I am a Teacher. I teach Class ${this.klass.number}.`;
    }

    introduceWith(studentJerry){

        if(studentJerry.klass === this.klass){
            return `${super.introduce()} I am a Teacher. I teach Jerry.`
        }else{
            return `${super.introduce()} I am a Teacher. I don't teach Jerry.`
        }
    }
}

export default Teacher;

