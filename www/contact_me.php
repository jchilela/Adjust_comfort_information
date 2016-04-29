<?php

$host = "localhost"; 
$user = "postgres"; 
$pass = "postgres"; 
$db = "postgres"; 



$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$today = date_default_timezone_set('UTC');

$con = pg_connect("host=$host dbname=$db user=$user password=$pass") or die ('Could not connect to server\n' . pg_last_error()); 

$query = "INSERT INTO contact  VALUES ('$name', '$phone','$email','$message','today')";
$result = pg_query($query) or die('Cannot execute query: $query\n' . pg_last_error()); 


//CREATE TABLE public.contact
//(
//  pk SERIAL PRIMARY KEY,
//  name character varying(255),
//  phone character varying(255),
//  email character varying(255),
//  message character varying(255),
 // today character varying(255)

//);


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