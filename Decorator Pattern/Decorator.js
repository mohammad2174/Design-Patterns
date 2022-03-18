class User
{
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    say() {
        console.log(`My name is ${this.name}`);
    }
}

class DecorateUser
{
    constructor(user, street, city) {
        this.user = user;
        this.street = street;
        this.city = city;
        this.name = user.name;
    }

    getName() {
        return this.user.getName();
    }

    say() {
        this.user.say();
        console.log(`Decorated User: ${this.name},${this.street},${this.city}`);
    }
}

const user = new User('john');
// user.say();

const decorated = new DecorateUser(user, ' 123 Main St', ' Anytown');
decorated.say();