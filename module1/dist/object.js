"use strict";
{
    // TypeScript object
    const user = {
        Company: "BD Calling IT",
        firstName: "Miraz",
        lastName: "Ahmed"
    };
    // typeScript function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 6);
    // typeScript arrow function
    const addArrow = (num1, num2) => num1 + num2;
    // typeScript method
    const user1 = {
        name: "Miraz",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    const arr = [1, 23, 32, 12];
    const newArr = arr.map((elem) => elem * elem);
}
