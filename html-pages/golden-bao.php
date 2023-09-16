<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GOLDEN BAO | Sik Yum Wan</title>
  <link rel="icon" type="image/x-icon" href="../assets/logos/sik-favicon.png" />

  <!--css links-->
  <link rel="stylesheet" href="../css/communal.css" />
  <script src="https://kit.fontawesome.com/02b16f4b0b.js" crossorigin="anonymous"></script>

  <!--adobe font links-->
  <link rel="stylesheet" href="https://use.typekit.net/czm7smv.css" />

  <!--javascript links-->
  <script src="../js/anim.js" defer></script>
  <script src="../js/main.js" defer></script>

  <!--GSAP animation links-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js"></script>
</head>

<body>

  <!--NAV BAR-->
  <nav>
    <a class="arch bounce-ani" href="../index.html"><img class="landing-x-logo" src="../assets/logos/full-logo-x.png"
        alt="x axis sik yum wan logo" /></a>
    <ul>
      <a href=""><i class="fa-solid fa-magnifying-glass fa-2xl"></i></a>
      <a href="javascript:void(0)" class="open-btn bounce-ani" onclick="openNav()"><i
          class="fa-solid fa-bars fa-2xl"></i></a>
    </ul>
  </nav>

  <!--side nav-->
  <section class="side-nav bounce-ani">
    <a href="javascript:void(0)" class="close-btn bounce-ani" onclick="closeNav()">&times;</a>
    <img class="side-logo" src="../assets/logos/full-logo-x.png" alt="sik yum wan x logo" />
    <div>
      <img src="../assets/logos/sik-logo.png" alt="sik logo" />
      <img src="../assets/logos/yum-logo.png" alt="yum logo" />
      <img src="../assets/logos/wan-logo.png" alt="wan logo" />
    </div>
    <li>
      <a href="../index.html">home</a>
      <a href="./html-pages/profile.html">profile</a>
      <a href="./html-pages/event.html">events</a>
      <a href="./golden-bao.php">golden bao</a>
    </li>
  </section>

  <!--landing section-->
  <section class="gold-bao-land">
    <!-- <h1>
      GOLDEN <br />
      BAO
    </h1>
    <img class="gold-bao" src="../assets/logos/sik-logo.png" alt="sik logo" /> -->
    <h3>VOTING OPEN NOW</h3>
  </section>

  <!--LOCAL STORIES-->
  <section class="store-grid">
    <!--dragon boat-->
    <div class="db-item bounce-ani">
      <h2 class="item-title bounce-ani">dragon<br />boat</h2>
    </div>
    <div class="vote-item">
      <h2>vote for your favourite eatery</h2>
      <p>
        The winner of the Golden Bao will be announced on the
        <span>29th of September 2024.</span>
      </p>

      <!--form entry area-->
      <form method="POST">
        <select name="eatery" class="bounce-ani">
          <option value="1">Dragon Boat</option>
          <option value="2">Cafe BBQ Duck</option>
          <option value="3">Sun World Chinese</option>
          <option value="4">Sunrise HongKong</option>
          <option value="5">Woos - The Stall</option>
        </select>
        <textarea placeholder="Why do you vote for this eatery?"></textarea>
        <input type="submit" name ="submit" value="submit" class="bounce-ani" />

        <?php 
          include '../connection.php';  
            
          //once submit button is pressed
          if(isset($_POST['submit'])){
            //put value into $id for sql query to find
             $selectId = $_POST['eatery'];
             echo "<script type='text/javascript'>alert('$selectId');</script>";
   
              //get current number of votes from database
             $sql = "SELECT votes FROM eatery WHERE id = $selectId";
             $voteResult = $mysqli->query($sql);
   
              if ($voteResult == TRUE) {
               $voteArray = $voteResult-> fetch_assoc();
               $currentVote = $voteArray["votes"];

             // output data of each row
             echo "<script type='text/javascript'>alert('$currentVote');</script>";

             //add 1 to current vote count
             $newVote = $currentVote+= 1;
             echo "<script type='text/javascript'>alert('$newVote');</script>";

             // submit new value into database
             $sql = "UPDATE eatery SET votes = $newVote WHERE id = $selectId";
             $result = $mysqli->query($sql);

             if($result == TRUE){
               echo "<script type='text/javascript'>alert('Success! Vote is submitted');</script>";
               header('Location: ../index.html');
              exit();   
             }else {
               echo "<script type='text/javascript'>alert('Error!<br>');</script>";
               echo "<script type='text/javascript'>alert('$mysqli->error');</script>";
             }

           } else {
             echo "<script type='text/javascript'>alert('0 results');</script>";
           } 
          }
        ?>
      </form>


    </div>

    <!--cafe bbq duck-->

    <div class="bbq-duck-item bg-img bounce-ani">
      <a href="./store-detail.html" class="store-link">
        <h2 class="item-title">cafe bbq</h2>
      </a>
    </div>

    <!--sun world chinese-->
    <div class="sun-world-item bounce-ani">
      <img src="../assets/images/dumpling-photo.png" alt="dumpling photo" />
      <h2 class="item-title">
        sun<br />
        world <br />chinese
      </h2>
    </div>

    <!--sunrise hong kong cafe-->
    <div class="sun-hk-item">
      <h2>sun<br />rise</h2>
      <img src="../assets/images/dumplings-drawn.png" alt="drawn dumplings" />
      <h2 class="hk-item-title">hong <br />kong</h2>
    </div>

    <!--woos-the stall-->
    <div class="woo-item bounce-ani">
      <h2 class="item-title">Woos - the stall</h2>
      <div class="bounce-ani">
        <img src="../assets/images/rice.png" alt="rice in bowl" />
        <img src="../assets/images/rice.png" alt="rice in bowl" />
        <img src="../assets/images/rice.png" alt="rice in bowl" />
      </div>
    </div>
  </section>

  <footer>
    <img src="../assets/logos/footer-chinese-logo.png" alt="chinese sik yum wan" />
    <img src="../assets/logos/full-logo-x.png" />
    <li>
      <a href="../index.html">home</a>
      <a href="./profile.html">profile</a>
      <a href="./event.html">events</a>
      <a href="./golden-bao.html">golden bao</a>
    </li>

    <div class="to-top bounce-ani"></div>
  </footer>
</body>

</html>