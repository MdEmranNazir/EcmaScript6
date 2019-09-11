class Rectangle {
    constructor(reg,roll,height, width) {
        this.reg = reg;
        this.roll = roll;
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }

   // Getter
    get detils() {
        return this.Z();
      }
    // Method
    Z() {
        return `Roll:${this.reg},Reg:${this.roll}` ;
      }
  }
  
  export default Rectangle;

