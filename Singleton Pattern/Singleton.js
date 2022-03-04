class Process
{
    constructor(state) {
        this.state = state;
    }
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        return new Process('new Object');
    }

    return {
        getInstance() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();


const processmanager1 = Singleton.getInstance();
const processmanager2 = Singleton.getInstance();

console.log(processmanager1 === processmanager2);
