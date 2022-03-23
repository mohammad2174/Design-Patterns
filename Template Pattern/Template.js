class Sandwich
{
    constructor() {
        if (new.target === Sandwich) {
            throw new TypeError('sorry this class is abstract.');
        }
    }
    makeBread() {
        console.log('Making bread,');
        return this;
    }

    addSalad() {
        console.log('Adding salad,');
        return this;
    }

    addSouces() {
        console.log('Adding souces.');
        return this;
    }

    make() {
        return this
        .makeBread()
        .addSalad()
        .addToppings()
        .addSouces();
    }

    addToppings() {
        throw new Error('This method is abstract.');
    }
}

class TurkeySandwich extends Sandwich
{
    addToppings() {
        console.log('Adding turkey,');
        return this;
    }
}

class ChickenSandwich extends Sandwich
{
    addToppings() {
        console.log('Adding chicken,');
        return this;
    }
}

const turkeySandwich = new TurkeySandwich();
turkeySandwich.make();

const chickenSandwich = new ChickenSandwich();
chickenSandwich.make();