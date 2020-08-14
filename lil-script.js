//First open in Brave/Chrome Uniswap and set token pair and amount to swap
//Then in order to keep running the script if the TAB is inactive:
//click on F12 to open DEV console, 
//then Preferences > 'Emulate focus page'
//*remember* to change the expected price in the code
var asound = new Audio("https://freesound.org/data/previews/113/113785_1956076-lq.mp3");
var myInterval = setInterval(function() {

    var destUniswapPrice = parseFloat(document.getElementsByClassName('token-amount-input')[1].value);
    
    if (destUniswapPrice > 6.2) {
      asound.play();
      document.getElementsByClassName('token-amount-input')[1].value;
      document.getElementById('swap-button').click();
    } else {
	  console.log('price lower than expected:'+destUniswapPrice);
	}
	
}, 1000);
