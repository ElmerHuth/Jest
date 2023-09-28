class calculator{
    add(x, y){
        return x + y;
    };
    
    sub(x, y){
        return x - y;
    }
    
    mul(x, y){
        return x * y;
    }
    
    div(x, y){
        return y == 0 ? "undefined" : x / y; 
    }
}

module.exports = new calculator;