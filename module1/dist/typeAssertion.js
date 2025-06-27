"use strict";
const kgToGm = (value) => {
    if (typeof value == "string") {
        const convValue = parseFloat(value) * 1000;
        return ` Converted Value is : ${convValue}`;
    }
    else if (typeof value == "number") {
        return value;
    }
};
