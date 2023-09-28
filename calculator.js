function valid(x, y){
    return (typeof x === 'number' && typeof y === 'number');
}

class calculator{
    add(x, y){
        return valid(x, y) ? x + y : 'invalid input'
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