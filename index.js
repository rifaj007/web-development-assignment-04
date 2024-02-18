function calculateMoney(ticketSell) {

    if (0 <= ticketSell) {
        const totalMoney = ticketSell * 120;

        const costOfgateKeeper = 500;
        const costOfStuff = 8 * 50;

        const totalCost = costOfgateKeeper + costOfStuff;

        const moneyHave = totalMoney - totalCost;

        return moneyHave;
    } else {
        return "Error! Invalid Input";
    }
}

function checkName(name) {

    if (!name || !isNaN(parseFloat(name)) || Array.isArray(name)) {
        return "invalid";
    }

    const lowerCaseName = name.toLowerCase();

    const goodNamesEnding = ["a", "y", "i", "e", "o", "u", "w"];

    const namesEnding = lowerCaseName.charAt(lowerCaseName.length - 1);

    if (goodNamesEnding.includes(namesEnding)) {
        return "Good Name"
    } else {
        return "Bad Name"
    }
};

function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return "Invalid Array";
    } else {
        const filteredArray = [];
        for (const element of array) {
            if (typeof element === 'number' && !Number.isNaN(element)) {
                filteredArray.push(element);
            }
        }
        return filteredArray;
    }
};

function password(obj) {

    if (!("name" in obj && "birthYear" in obj && "siteName" in obj) ||
        obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const password =
        (obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)) +
        "#" +
        obj.name +
        "@" +
        obj.birthYear;

    return password;
}

function monthlySavings(payments, livingCost) {

    if (!Array.isArray(payments) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;

    for (const payment of payments) {
        if (payment >= 3000) {
            totalIncome += payment * 0.8;
        } else {
            totalIncome += payment;
        }
    }
    
    const totalSavings = totalIncome - livingCost;

    return totalSavings >= 0 ? totalSavings : "earn more";
};