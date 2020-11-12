<!DOCTYPE html>
<html lang="en-us">
<head>
<title>
Project 10 - Palindrome
</title>
</head>
<body>
<h1> Palindrome Project 10 Part B </h1>
<br>
<p> This program has the user enter 5 different phrases/words. 
Once the "Check Palindrome" button is pressed, as long as the 
values are full,the program will display if the strings are palindromes</p>
<form method="post">
Name: <input name="name" type="text"/> <br> <br>
Phrase 1: <input name="phrase1" type="text"/><br>
Phrase 2: <input name="phrase2" type="text"/> <br>
Phrase 3: <input name="phrase3" type="text"/><br>
Phrase 4: <input name="phrase4" type="text"/><br>
Phrase 5: <input name="phrase5" type="text"/><br>
<input type="submit" value="Check Palindrom"/>
</form>
<br>
<?php
$phrases = array();
$boolpali = array();

$p1 = ""; $p2 = ""; $p3 =""; $p4 = ""; $p5 ="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_REQUEST["name"];
	$p1 = $_REQUEST["phrase1"];
	$p2 = $_REQUEST["phrase2"];
	$p3 = $_REQUEST["phrase3"];
	$p4 = $_REQUEST["phrase4"];
	$p5 = $_REQUEST["phrase5"];
	
	if(empty($p1) || empty($p2) ||  empty($p3) || empty($p4) || empty($p5)) {
		echo "Please enter a total of 5 strings to check.";
	}
	else {
		echo "Hello ".$name."!<br>";
		array_push($phrases, $p1, $p2, $p3, $p4, $p5);
		foreach($phrases as $s) {
			$s = strtolower($s);
			$temp = "";
			for($i = strlen($s); $i >= 0; $i--) {
				$temp .= substr($s, $i, 1); 
			}			
			if($s != $temp) {
				array_push($boolpali, FALSE);
			}
			else {
				array_push($boolpali, TRUE);
			}
		}
			
		for($i = 0; $i < count($phrases); $i++) {
			echo $phrases[$i]." = ";
			if($boolpali[$i] == TRUE)
				echo 'TRUE<br>';
			else echo 'FALSE<br>';
		}
	}
	
}

?>
</body>
</html>