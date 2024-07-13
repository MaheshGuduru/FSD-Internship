function calculatePetAge(petAge, conversionRate = 7) {
    const petYears = petAge * conversionRate;
    console.log(`Your pet is ${petYears} years old in pet years!`);
}

// Calling the function three times with different values
calculatePetAge(3); // Default conversion rate (for a cat)
calculatePetAge(5, 7); // Specifying conversion rate (for a dog)
calculatePetAge(2, 5); // Different conversion rate (for a different pet)
