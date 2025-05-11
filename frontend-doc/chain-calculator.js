class Calculator{
    constructor(n){
        this.val = n;
    }
    
    add(n){
        this.val += n;
        return this;  // this returns the current instance of calculator object , allowing to call the net method on it and this enables method chaining
    }
    
    subtract(n){
        this.val -= n;
        return this;  // this returns the current instance of calculator object 
    }
    
    multiply(n){
        this.val *= n;
        return this;   // this returns the current instance of calculator object 
    }
    
    division(n){
        
        if(n === 0) throw new Error("Diision not possible");
        this.val /= n;
        return this;   // this returns the current instance of calculator object 
    }
    
    getValue(){
        return this.val;
    }
}

const calculator = new Calculator(2);
console.log(calculator.add(5).subtract(5).multiply(5).division(5).getValue());

