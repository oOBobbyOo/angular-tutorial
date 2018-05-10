<?php
  header('Access-Control-Allow-Origin', '*');
  header('Access-Control-Allow-Methods', 'GET');
  header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

  if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if(username == "bobby" && password == "123"){
    ?>
      {
        "sucessed": true,
        "data": "login successed"
      }
    <?php
     } else {
    ?>
      {
        "sucessed": false,
        "data": "login failed"
      }
    <?php
     } else {
    ?>
      {
        "sucessed": false,
        "data": "Only POST access accepted"
      }
    <?php
     }
  }
