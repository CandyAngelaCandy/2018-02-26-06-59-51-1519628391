import Person from "../practice_4/person";
"use strict";

class Worker extends Person{
    constructor(name,age){
     super(name,age);
    }
    
    introduce(){
        return super.introduce() +` I am a Worker. I have a job.`;
    }
}

export default Worker;
