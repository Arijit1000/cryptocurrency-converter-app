class UI{
    constructor(){
        this.init();
    }
    init(){
        this.printCryptoCurrencies();
    }

    //Inserts the options in Crypto currencies select dropdown
    printCryptoCurrencies(){
        cryptoapi.getCryptoCurrenciesList()
        .then(data => {
            const cryptoCurrencies = data.Cryptocurrencies;
            
            //Buildidng the select fron REST API

            const select=document.getElementById('cryptocurrency');

            cryptoCurrencies.forEach(currency =>{
                //adding the option
                const option=document.createElement('option');
                option.value= currency.id;
                option.appendChild(document.createTextNode(currency.name));
                select.appendChild(option);
            })
        })
    }

    printMessage(message,className){
        const div=document.createElement('div');

        div.className=className;

        div.appendChild(document.createTextNode(message));
        
        const messageDiv=document.querySelector('.messages');

        messageDiv.appendChild(div);

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        },3000);
    }

    displayResult(result,currency){
        let currencyName='price_'+currency.toLowerCase();
        
                
        const prevResult=document.querySelector('#result>div');
        if(prevResult){
            prevResult.remove();
        }
        let html='';
        html=`
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${result.name} in ${currency}  is ${result[currencyName]}</p>
                    <p>Changes in Last Hour: ${result.percent_change_1h}%</p>
                    <p>Changes in Last Day: ${result.percent_change_24h}%</p>
                    <p>Changes in Last Week: ${result.percent_change_7d}%</p>
                </div>
            </div>
        `;

        this.showSpinner();

        setTimeout(() => {

            document.querySelector('.spinner img').remove();


            const divResult=document.getElementById('result');
            divResult.innerHTML=html;
        }, 3000);
    }

    showSpinner(){
        const spinner=document.createElement('img');
        spinner.src='img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinner);
    }
}