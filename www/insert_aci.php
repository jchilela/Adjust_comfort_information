<?php 

$host = "localhost"; 
$user = "postgres"; 
$pass = "postgres"; 
$db = "postgres"; 




$idade= $_POST['idade'];
$gender= $_POST['gender'];
$weight= $_POST['weight'];
$atime= $_POST['atime'];
$dtime= $_POST['dtime'];
$tcomfort= $_POST['tcomfort'];
$acept= $_POST['acept'];
$pref= $_POST['pref'];
$sens= $_POST['sens'];



$con = pg_connect("host=$host dbname=$db user=$user password=$pass") or die ('Could not connect to server\n' . pg_last_error()); 

$query = "INSERT INTO ca_survey  VALUES ('$idade', '$gender','$weight','$atime', '$dtime','$tcomfort', '$acept','$pref', '$sens')";
$result = pg_query($query) or die('Cannot execute query: $query\n' . pg_last_error()); 




// Printing results in HTML
echo "<table>\n";
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";

// Free resultset
pg_free_result($result);

pg_close($con); 

?>
