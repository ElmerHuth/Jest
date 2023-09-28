function valid(x, y){
    return (typeof x === 'number' && typeof y === 'number');
}

class calculator{
    add(x, y){
        return valid(x, y) ? x + y : 'invalid input';
    };
    
    sub(x, y){
        return valid(x, y) ? x - y : 'invalid input';
    }
    
    mul(x, y){
        return valid(x, y) ? x * y : 'invalid input';
    }
    
    div(x, y){
        return valid(x, y) ? (y == 0 ? "undefined" : x / y) : 'invalid input'; 
    }
}

module.exports = new calculator;