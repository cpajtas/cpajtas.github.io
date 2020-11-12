<!DOCTYPE html>
<html>
<body>

<?php
$words = array("Election", "Eastern", "Michigan", "University", "School");

echo "<h1>Reverse the String </h1>";
echo "This assignment will reverse a string and print it out. <br>";

for($i=0; $i < count($words); $i++) {
    $chararr = str_split($words[$i]);
	for($j=count($chararr)-1; $j >= 0; $j--) {
    	echo $chararr[$j];
    }
    echo "<br>";
}

?>

</body>
</html>