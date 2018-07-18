
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
            this.leader =  student;
            if(this.teacher != null){
                this.teacher.leaderNotify(student);
            }
        }else {
            console.log(`It is not one of us.`);
        }
    }



    appendMember(student){
        student.klass = this;
        if(this.teacher != null){
            this.teacher.joinNotify(student);
        }

    }

    registerAssignLeaderListener(teacher){
        this.teacher = teacher;
    }

    registerJoinListener(teacher){
        this.teacher = teacher;
    }


}

export default Class;



