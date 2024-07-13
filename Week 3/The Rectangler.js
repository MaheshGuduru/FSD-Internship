function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    console.log(`The perimeter is ${perimeter}`);
}

function calcArea(length, width) {
    const area = length * width;
    console.log(`The area is ${area}`);
}

// Calling the functions with different values
calcPerimeter(5, 10);
calcPerimeter(7, 14);
calcPerimeter(6, 8);

calcArea(5, 10);
calcArea(7, 14);
calcArea(6, 8);
