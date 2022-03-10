class Observer
{
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(f => f !== fn);
    }

    fire() {
        this.observers.forEach(observer => observer());
    }
}

function Observer1() {
    console.log("Observer 1 Fired");
}

function Observer2() {
    console.log("Observer 2 Fired");
}

const observer = new Observer();
observer.subscribe(Observer1);
observer.subscribe(Observer2);

observer.unsubscribe(Observer1);

observer.fire();