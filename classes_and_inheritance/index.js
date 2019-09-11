
import Person from './person'
class Student extends Person{
    constructor(name,email,roll,id){
        super(name,email,roll);
        this.id = id;
    }
    disply(){
      super.print();
      console.log(`Id:${this.id}`);
      
        
    }
}

export default Student;