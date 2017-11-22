<?php
include "top.php";
?>

<body>


    <form onsubmit="return pingReddit();" class="my-form" action="index.php">
        <div id="inputContainer">
            <div class="select">
                <select id="timeInput">
                  <option value="all">All Time</option>
                  <option value="year">Past Year</option>
                  <option value="month">Past Month</option>
                  <option value="week">Past Week</option>
                  <option value="day">Past Day</option>
              </select>
          </div>
          <div class="select">
            <select id="subInputList">
              <option value="accidentalrenaissance">Accidental Renaissance</option>
              <option value="accidentalrockwell">Accidental Norman Rockwell</option>
              <option value="accidentalwesanderson">Accidental Wes Anderson</option>
              <option value="aerialporn">Aerial Views</option>
              <option value="aestheticrain">Aesthetic Rain</option>
              <option value="architectureporn">Architecture</option>
              <option value="artporn">Alterantive Art</option>
              <option value="art">Art</option>
              <option value="autumnporn">Autumn</option>
              <option value="bonsaiporn">Bonsai Trees</option>
              <option value="botanicalporn">Botanical</option>
              <option value="cats">Cats</option>
              <option value="churchporn">Churches</option>
              <option value="cityporn">Cities</option>
              <option value="colorizedhistory">Colorized History</option>
              <option value="digitalpainting">Digital Painting</option>
              <option value="design">Design</option>
              <option value="dessertporn">Desserts</option>
              <option value="earthporn">Earth</option>
              <option value="evilbuildings">Evil Buildings</option>
              <option value="fashionporn">Fashion</option>
              <option value="foodporn">Food</option>
              <option value="geologyporn">Geology</option>
              <option value="historyporn">History</option>
              <option value="houseporn">Houses</option>
              <option value="illustration">Illustration</option>
              <option value="imaginarybestof">Imaginary Best Of</option>
              <option value="imaginarycharacters">Imaginary Characters</option>
              <option value="imaginarylandscapes">Imaginary Landscapes</option>
              <option value="imaginarymindscapes">Imaginary Mindscapes</option>
              <option value="imaginarymonsters">Imaginary Monsters</option>
              <option value="exposureporn">Long Exposure</option>
              <option value="movieposterporn">Movie Posters</option>
              <option value="painting">Painting</option>
              <option value="pixelart">Pixel Art</option>
              <option value="reactiongifs">Reaction Gifs</option>
              <option value="spaceflightporn">Space Flight</option>
              <option value="streetart">Street Art</option>      
              <option value="technologyporn">Technology</option>
              <option value="televisionposterporn">Television Posters</option>
              <option value="trippy">Trippy</option>
              <option value="unstirredpaint">Unstirred Paint</option>
              <option value="villageporn">Villages</option>
              <option value="waterporn">Water</option>
              <option value="watercolor">Watercolor</option>
              <option value="wildlifephotography">Wildlife Photography</option>
              <option value="winterporn">Winter</option>
              <option value="woahdude">Woah Dude</option>
          </select>
      </div>
      <input type="text" name="name" class="select" id="subInputText" placeholder="Or Type a Subreddit Here!"/>
      <input type="submit" class="select submit" value="Submit"">
  </div>

  <div id="iconContainer">
     <a href="http://www.lukelakea.com/" class="githubLink" target="_blank"><img  src="img/home.png"></></a>
    <a href="https://github.com/lukelakea/Griddit" class="githubLink" target="_blank"><img  src="img/github.png"></></a>
    </div>
</form>
<div class="showimagediv hide"><img class="fullScreenimg hide"></><a class="permaLinkDiv hide" target="_blank"><img class="linkImg"  src="img/link.png"></></a></div>
<img src="img/backdrop.png" id="backdrop"></>
<div id="photoGrid">
</div>
<script type="text/javascript" >
    function pingReddit() {
        console.log(document.getElementById("timeInput").value);
        document.getElementById("timeInput").setAttribute("data-name",document.getElementById("timeInput").value);
        document.getElementById("subInputList").setAttribute("data-name",document.getElementById("subInputList").value);
        document.getElementById("subInputText").setAttribute("data-name",document.getElementById("subInputText").value);
        init();
        $('#subInputText').val('');
        return false;
    }
</script>



<script type="text/javascript" src="bundle.js"></script>
</body>






<?php
include "footer.php";
?>
</html>