// OLD INTERFACE
class Shipping
{
    request(zipStart, zipEnd, weight) {
        // ...
        return "$50.00";
    }
}

// NEW INTERFACE
class AdvancedShipping
{
    login(credentials) {
        // ...
    }

    setStart(start) {
        // ...
    }

    setDestination(destination) {
        // ...
    }

    calculate(weight) {
        return "$80.00";
    }
}

class ShippingAdapter
{
    constructor(credentials) {
        this.credentials = credentials;
        this.shipping = new AdvancedShipping();
        this.shipping.login(this.credentials);
    }

    request(zipStart, zipEnd, weight) {
        this.shipping.setStart(zipStart);
        this.shipping.setDestination(zipEnd);
        return this.shipping.calculate(weight);
    }
}


const shipping = new Shipping();
const credentials = {token: "asdasd" };
const adapter = new ShippingAdapter(credentials);

let cost = shipping.request("78712", "10012", "2kg");
console.log('Old Cost: ' + cost);


cost = adapter.request("78712", "10012", "2kg");
console.log('New Cost: ' + cost);