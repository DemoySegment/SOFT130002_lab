<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        $amount=$quantity*$price;
        echo "<tr>";
        //TODO
        echo"<td>";
        echo"<img src='images/books/tinysquare/$file'>";
        echo"</td>";
        echo"<td>";
        echo"$title";
        echo"</td>";
        echo"<td>";
        echo"$quantity";
        echo"</td>";
        echo"<td>";
        echo"$$price.00";
        echo"</td>";
        echo"<td>";
        echo"$$amount.00";
        echo"</td>";
        echo "</tr>";
       
    }
?>