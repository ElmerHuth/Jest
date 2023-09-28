const { default: expect } = require("expect");

const calc = require('./calculator');


test('addition av 1 och 2 ska vara 3', () => {
    expect(calc.add(1,2)).toBe(3);
});

test('subtraktion av 10 och 5 ska vara 5', () => {
    expect(calc.sub(10,5)).toBe(5);
});

test('multiplikation av 6 och 8 ska vara 48', () => {
    expect(calc.mul(6,8)).toBe(48);
});

test('division av 12 och 3 ska vara 4', () => {
    expect(calc.div(12,3)).toBe(4);
});

test('division av 5 och 0 ska vara odefinerat', () => {
    expect(calc.div(5,0)).toBe('undefined');
});

test(`addition av "1" och 2 ska vara invalid input`, () => {
    expect(calc.add("1",2)).toBe("invalid input");
});