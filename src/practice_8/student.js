"use strict";

import Person from "../practice_8/person";
class Student extends Person{
    constructor(num,name,age,klass){
      super(num,name,age);
      this.klass = klass;
    }
    
    introduce(){
        console.log("hh"+this.klass.leader);

        if(this.klass.leader!=undefined && this.num == this.klass.leader.num){
          return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
    }
}

export default Student;






