var item1, item2, item3, total;
const ITEM1COST = 349.99, ITEM2COST = 49.99, ITEM3COST = 29.99;

function resetCart() {
	document.getElementById("itemForm").reset();
	changeColor("item1");
	changeColor("item2");
	changeColor("item3");
	document.getElementById("alert").innerHTML = "";
	document.getElementById("alert").style.backgroundColor = "grey";
}
function getTotal() {
	item1 = document.getElementById("item1").value * ITEM1COST;
	item2 = document.getElementById("item2").value * ITEM2COST;
	item3 = document.getElementById("item3").value * ITEM3COST;
	
	total = item1 + item2 + item3;
	
	if(isNaN(total)) {
		document.getElementById("alert").innerHTML = "INVALID QUANTITY!";
		document.getElementById("alert").style.backgroundColor = "black";
		document.getElementById("alert").style.color = "red";
	}
	else {
		document.getElementById("alert").innerHTML = "TOTAL: $" + total.toFixed(2);
		document.getElementById("alert").style.backgroundColor = "black";
		document.getElementById("alert").style.color = "green";
		
	}
}
function changeColor(element){ 
	if (document.getElementById(element).value == "") {
		document.getElementById(element).style.backgroundColor = "white";
		document.getElementById(element).style.color = "black";
	}
	else if(isNaN(document.getElementById(element).value + 1)) {
		document.getElementById(element).style.backgroundColor = "red";
		document.getElementById(element).style.color = "white";
	}
		
	else {
		document.getElementById(element).style.backgroundColor = "green";
		document.getElementById(element).style.color = "white";
	}
		
}

function hoverColor(element) {
	document.getElementById(element).style.backgroundColor = "yellow";
	document.getElementById(element).style.color = "black";
}
