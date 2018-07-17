

"use strict";

import Person from "../practice_8/person";

class Teacher extends Person{
    constructor(num,name,age,klasses){
     super(num,name,age);
     this.klasses = klasses;
    }
    
    introduce(){
        
        if(this.klasses == undefined){
           return super.introduce() +` I am a Teacher. I teach No Class.`;
        }

        var str = "";
        for(let i = 0;i<this.klasses.length;i++){
            str+=this.klasses[i].number+", ";
        }

        str = str.slice(0,str.length-2);
        return super.introduce() +` I am a Teacher. I teach Class ${str}.`;
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





