const findTheOldest = function(people) {
    let oldestPerson = people.reduce((prevPerson, nextPerson) => {
        let prevAge;
        let nextAge;

        // Check if prev person has died then calculate age
        if (prevPerson.yearOfDeath === undefined || prevPerson.yearOfDeath === null) {
            prevAge = (new Date().getFullYear()) -  prevPerson.yearOfBirth;
        }  else {
            prevAge = prevPerson.yearOfDeath - prevPerson.yearOfBirth;
        }

        // Check if next person has died then calculate age
        if (nextPerson.yearOfDeath === undefined || nextPerson.yearOfDeath === null) {
            nextAge = (new Date().getFullYear()) - nextPerson.yearOfBirth;
        } else {
            nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        }
        
        return (prevAge > nextAge) ? prevPerson : nextPerson;
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
