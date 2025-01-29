<?php
  //connect to the database 
  /* note that this should not be readable from outside */
  require_once('../../_includes/connect.php');

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
  //define table
  $tbl = "marmalade_users";//change table name as required
  $fromUser = isset($_REQUEST['fromuser']) ? $_REQUEST['fromuser'] : '0';
  //write query
  $query = "SELECT $tbl.userID, $tbl.userName, $tbl.colour FROM $tbl WHERE $tbl.userID !=?";
  //prepare statement, execute, store_result
  if($displayStmt = $mysqli->prepare($query)){
    $displayStmt->bind_param("i", $fromUser);
    $displayStmt->execute();
    $displayStmt->store_result();
    $numResults = $displayStmt->num_rows;
  }
  //bind results
  $displayStmt->bind_result($userID, $userName, $colour);

  //create an array for the results
  $userArray = [];

  //fetch results
  while($displayStmt->fetch()){
    //create array for json
    $userArray[] = [
      "userID"=>$userID,
      "username"=>$userName, 
      "colour"=>$colour];

  }
  //encode the array in json format
  echo( json_encode($userArray));

?>