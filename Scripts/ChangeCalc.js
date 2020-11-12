/**
Change Calculator javascript by Chris Pajtas
*/
function calculateChange() {
	var totalChange = (document.getElementById("input").value)*100;
	var calculated = 0;
	
	const coinType = ["FiftyDollars", "TwentyDollars", "TenDollars", "FiveDollars", "Dollars", "Quarters", "Dimes", "Nickels", "Pennies"];
	const coinValue= [5000, 2000, 1000, 500, 100, 25, 10, 5, 1];
	
	for (var i = 0; i < coinValue.length; i++) {
		calculated = Math.floor(totalChange / coinValue[i]);
		document.getElementById(coinType[i]).innerHTML = coinType[i] + ": "+calculated;
		totalChange = Math.floor(totalChange - (calculated * coinValue[i]));
		if (calculated>0) {
			document.getElementById(coinType[i].toLowerCase()).className = "positive";
		}
		else {
			document.getElementById(coinType[i].toLowerCase()).className = "";
		}
	}
}