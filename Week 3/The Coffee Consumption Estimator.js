function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 80;
    const yearsRemaining = maxAge - age;
    const totalCups = Math.round(yearsRemaining * 365.25 * cupsPerDay);
    console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
}

// Calling the function three times with different values
calculateCoffeeSupply(25, 3);
calculateCoffeeSupply(30, 2.5);
calculateCoffeeSupply(40, 4);
