var items = [];
var costs = [];
var quantity = [];

var text = "";
var total = 0.0;

function addToCart() {

	if (document.getElementById("item").value == "" || document.getElementById("cost").value == "" || document.getElementById("quantity").value == "") {
		document.getElementById("alert").innerHTML = "Please enter item info.";
		return;
	}
	
	document.getElementById("alert").innerHTML = "";
		
	items.push(document.getElementById("item").value);
	costs.push(parseFloat(document.getElementById("cost").value));
	quantity.push(parseInt(document.getElementById("quantity").value));
	
	document.getElementById("running").innerHTML = 
	"++++++++++++++++++++++++++++++++++++++++++++++<br>"+
	"<h2> Mini-Mart EMU Reciept: C. Pajtas</h2>";
	text="<tr><th>Item</th><th>Quantity</th><th>Cost</th></tr>";
	
	displayCart();
	
	document.getElementById("total").innerHTML = "";
	
	clearInputs();
	
}
function displayCart() {
	for (var i=0; i < items.length; i++) {
		text+="<tr><td class='data'>"+items[i]+"</td><td class='data'>"+quantity[i]+"</td><td class='data'>"+costs[i].toFixed(2)+"</td></tr>"
	};
	
	document.getElementById("cart").innerHTML = text;
	
	
}
function calculateTotal() {
	total = 0.0;
	
	if (document.getElementById("item").value != "" && document.getElementById("cost").value != "" && document.getElementById("quantity").value != "")
		addToCart();
	
	for (var i=0; i < items.length; i++)
		total =  total + (costs[i] * quantity[i]);
	
	if (total > 0) 
		document.getElementById("total").innerHTML =
		"<tr><td class='data'>Checkout Total:</td><td class='data'>"+total.toFixed(2)+"</td></tr>";
	else
		document.getElementById("total").innerHTML = "";
}
function clearInputs() {
	document.getElementById("item").value = "";
	document.getElementById("cost").value = "";
	document.getElementById("quantity").value = "";
}