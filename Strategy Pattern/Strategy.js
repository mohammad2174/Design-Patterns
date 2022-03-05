class UPS
{
    constructor() {
        this.name = 'UPS';
    }

    calculate() {
        return 25;
    }
}

class FedEx
{
    constructor() {
        this.name = 'FedEx';
    }

    calculate() {
        return 30;
    }
}

class Shipping
{
    setStrategy(company) {
        this.company = company;
    }

    calculate() {
        return this.company.calculate();
    }
}


// const package = { from: "76712", to: "10012", weight: "1kg" };

const shipping = new Shipping();

shipping.setStrategy(new UPS());
console.log("UPS Strategy: " + shipping.calculate());

shipping.setStrategy(new FedEx());
console.log("Fedex Strategy: " + shipping.calculate());