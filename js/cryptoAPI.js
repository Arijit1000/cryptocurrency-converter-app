class cryptoAPI{
    
    async queryAPI(currency,cryptoCurrency){
        
        const url= await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptoCurrency}/?convert=${currency}`);

        const result = await url.json();

        return{
            result
        }
    }
    //GET all the Cryptocurrencies 
    async getCryptoCurrenciesList(){
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        //Returning this as a JSON
        const Cryptocurrencies= await url.json();

        //Returning the object
        return{
            Cryptocurrencies
        }
    }
}