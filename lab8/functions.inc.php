<?php

    function outputOrderRow($file, $title, $quantity, $price) {
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
        echo"$price";
        echo"</td>";
        echo "</tr>";
        
    }
?>