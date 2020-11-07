//Object Initialisation
const cryptoapi = new cryptoAPI();
const ui = new UI();

const form=document.getElementById('form');



form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const currencySelect=document.getElementById('currency').value;

    const cryptoCurrencySelect=document.getElementById('cryptocurrency').value;

    // validating that the select have something
    if(currencySelect===''||cryptoCurrencySelect===''){
        ui.printMessage('All the Fields are mandatory','deep-orange darken-4 card-panel');
    }
    else{
        //Query the REST API
        cryptoapi.queryAPI(currencySelect,cryptoCurrencySelect)
        .then(data=>{
            ui.displayResult(data.result[0],currencySelect);
            
        })
    }
})