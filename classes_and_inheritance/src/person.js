
class Person{
    constructor(name,email,roll){
        this.name = name;
        this.email = email;
        this.roll = roll;
    }
    print(){
        console.log(`Name:${this.name}, Email:${this.email},Roll:${this.roll}`);
        
    }
}
export default Person;