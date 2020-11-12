<!DOCTYPE html>
<html lang="en-us">
<head>
<title>
Project 10 Tax Calculator
</title>
</head>
<body>
<h1>Project 10 Tax Calculator</h1>
<br>
<p>
This program asks the user to input the name of the products sold. Then, the program randomly generates a price from 0 to 100 US Dollars. It will then display the tax amount accordingly.
</p>

<form method="post">
Name:
<input name="name" type="text" /><br><br>
Item 1:
<input name="item1" type="text"/><br>
Item 2:
<input name="item2" type="text"/><br>
Item 3:
<input name="item3" type="text"/><br>
Item 4:
<input name="item4" type="text"/><br>
Item 5:
<input name="item5" type="text"/><br>
<input type="submit" value="Get Tax">
</form>

<?php
$items = array();
$withTax = array();
$preTax = array();
$name = "";
$item1 = "";
$item2 = "";
$item3 = "";
$item4 = "";
$item5 = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect the values of the input fields
    $name = $_REQUEST['name'];
    $item1 = $_REQUEST['item1']; 
    $item2 = $_REQUEST['item2'];
    $item3 = $_REQUEST['item3'];
    $item4 = $_REQUEST['item4'];
    $item5 = $_REQUEST['item5'];
    if (empty($item1)||empty($item2) || empty($item3) || empty($item4) || empty($item5)) {
        echo "I need all items to add them to the array.";
    } else {
        echo "Hello ".$name."!";
        array_push($items, $item1, $item2, $item3, $item4, $item5);
        array_push($preTax, rand(1, 100) / 10, rand(1, 100) / 10, rand(1, 100) / 10, rand(1, 100) / 10, rand(1, 100) / 10); 
        for($i = 0; $i < count($preTax); $i++) {
            array_push($withTax, $preTax[$i] * .06 + $preTax[$i]);
        }
        echo "<table><tr><th>Item</th><th>Tax in USD</th></tr>";
        for($i = 0; $i < count($items); $i++) {
            echo "<tr><td>".$items[$i]."</td><td> $".number_format((float)$preTax[$i], 2, '.', '')."</td></td></tr><br>";
        }
		echo "</table>";
        
    }
}


?> 
</body>
</html>
