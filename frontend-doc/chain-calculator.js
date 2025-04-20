class Calculator{
    constructor(n){
        this.val = n;
    }
    
    add(n){
        this.val += n;
        return this;
    }
    
    subtract(n){
        this.val -= n;
        return this;
    }
    
    multiply(n){
        this.val *= n;
        return this;
    }
    
    division(n){
        
        if(n === 0) throw new Error("Diision not possible");
        this.val /= n;
        return this;
    }
    
    getValue(){
        return this.val;
    }
}

const calculator = new Calculator(2);
console.log(calculator.add(5).subtract(5).multiply(5).division(5).getValue());

