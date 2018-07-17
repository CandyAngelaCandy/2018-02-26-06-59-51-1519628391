
"use strict";
class Class{
   
    constructor(number,leader,students){
       this.number = number;
       this.leader = leader;
       this.students = students;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
      if(student.klass.number == this.number){
          this.leader = student;
      }else{
          console.log("It is not one of us.");
      }
    }

    appendMember(student){
      student.klass.number = this.number;
    }
}

export default Class;



