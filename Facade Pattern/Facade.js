class Mortgage
{
    constructor(name) {
        this.name = name;
    }

    apply(amount) {
        let result = 'approved';
        if (!new Bank().get(this.name, amount)) {
            result = 'declined';
        } else if(!new Credit().get(this.name)) {
            result = 'declined';
        } else if(!new Background().get(this.name)) {
            result = 'declined';
        }
        return this.name + ' has been ' + result + ' for a ' + amount + ' mortgage';
    }
}

class Bank
{
    get(name, amount) {
        // ...
        return true;
    }
}

class Credit
{
    get(name) {
        // ...
        return true;
    }
}

class Background
{
    get(name) {
        // ...
        return true;
    }
}


const mortgage = new Mortgage('john');
const result = mortgage.apply(30000);
console.log(result);