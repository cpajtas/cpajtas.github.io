var cartItems = [];

var item;
var quantity;
var cost;

var text = "";
var total = 0.0;

function Cart(item, cost, quantity) {
	this.item = item;
	this.quantity = quantity;
	this.cost = cost;
	this.display_item = function() {
		return ("<tr><td class='data'>"+item+"</td><td class='data'>"+quantity+"</td><td class='data'>"+cost.toFixed(2)+"</td></tr>");
	}
}

function addToCart() {

	if (document.getElementById("item").value == "" || document.getElementById("cost").value == "" || document.getElementById("quantity").value == "") {
		document.getElementById("alert").innerHTML = "Please enter item info.";
		return;
	}
	
	document.getElementById("alert").innerHTML = "";
		
	cartItems.push(new Cart(document.getElementById("item").value, 
	(parseFloat(document.getElementById("cost").value)), 
	(parseInt(document.getElementById("quantity").value))));
	
	document.getElementById("running").innerHTML = 
	"++++++++++++++++++++++++++++++++++++++++++++++<br>"+
	"<h2> Mini-Mart EMU Reciept: C. Pajtas</h2>";
	text="<tr><th>Item</th><th>Quantity</th><th>Cost</th></tr>";
	
	displayCart();
	
	document.getElementById("total").innerHTML = "";
	
	clearInputs();
	
}
function displayCart() {
	for (var i=0; i < cartItems.length; i++) {
		text+=cartItems[i].display_item();
	};
	
	document.getElementById("cart").innerHTML = text;
	
	
}
function calculateTotal() {
	total = 0.0;
	
	if (document.getElementById("item").value != "" && document.getElementById("cost").value != "" && document.getElementById("quantity").value != "")
		addToCart();
	
	for (var i=0; i < cartItems.length; i++)
		total =  total + (cartItems[i].cost * cartItems[i].quantity);
	
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