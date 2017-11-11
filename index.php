<?php
	include "top.php";
?>

 <body>

    <div id="main">
    </div>
  
<form onsubmit="return pingReddit();" class="my-form" action="index.php">
    <input type="text" name="name" id="timeInput"/>
    <input type="text" name="name" id="subInput"/>
    <input type="submit" value="Submit"">
</form>


<script type="text/javascript" >
    function pingReddit() {
        console.log(document.getElementById("subInput").value);
        console.log(document.getElementById("timeInput").value);
        document.getElementById("timeInput").setAttribute("data-name",document.getElementById("timeInput").value);
        document.getElementById("subInput").setAttribute("data-name",document.getElementById("subInput").value);
        init();
        return false;
    }
</script>



    <div id="photoGrid">
	</div>
    <script id="pingReddit" type="text/javascript" src="bundle.js"></script>
</body>



	



<?php
	include "footer.php";
?>
</html>