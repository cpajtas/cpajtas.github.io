<!DOCTYPE html>
<!--
By Ronald Stempien & Chris Pajtas on 3/11/2020
-->
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<title>Number Names</title>
    </head>
	<body>
		<h1>Number Names</h1>
		<p>
		This program will generate five random numbers between zero and ten, 
		and it will instruct you on how to spell said number. <br>
			<?php
				function r() {
					return rand(0,10);
				}
				$names = array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
				$numbers = array(r(),r(),r(),r(),r());
				
				for($i=0;$i<count($numbers);$i++) {
					echo $numbers[$i] . " is spelled " . $names[$numbers[$i]] . "<br>";
				}
			?>
			
		</p>
    </body>
</html>