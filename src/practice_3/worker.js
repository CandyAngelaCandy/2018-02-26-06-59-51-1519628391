"use strict";
import Student from "../practice_3/student";
class Worker extends Student{
    constructor(name,age){
     super(name,age);
    }
    
    introduce(){
        return `I am a Worker. I have a job.`;
    }
}

export default Worker
