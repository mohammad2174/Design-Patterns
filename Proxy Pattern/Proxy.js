class CryptoCurrencyAPI
{
    getvalue(coin) {
        console.log('Calling External API...');
        switch (coin) {
            case 'Bitcoin':
                return '$1000';
            case 'Ethereum':
                return '$200';
            case 'Ripple':
                return '$1';
            case 'Litecoin':
                return '$5';
        }
    }
}


class CryptoCurrencyAPIProxy
{
    constructor() {
        this.cache = {};
    }

    getvalue(coin) {
        if(this.cache[coin]) {
            return this.cache[coin];
        }

        this.cache[coin] = new CryptoCurrencyAPI().getvalue(coin);
        return this.cache[coin];
    }
}

// const api = new CryptoCurrencyAPI();

const api = new CryptoCurrencyAPIProxy();

console.log(api.getvalue('Bitcoin'));
console.log(api.getvalue('Ethereum'));
console.log(api.getvalue('Ripple'));
console.log(api.getvalue('Litecoin'));