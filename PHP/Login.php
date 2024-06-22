<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Type: application/json'); // Correcting Content-Type to JSON

$con=mysqli_connect("localhost","root","","user");
// Check if the request method is POST
if (isset($_POST)) {
    // Initialize an array to store all POST data
$data = file_get_contents("php://input");
$user=json_decode($data,true);
 $name=$user['firstName'];
 $password=$user['password'];
 $email=$user['email'];
 $sql="select * from `sima` where email='$email' AND password='$password' AND user='$name'";
 $res=mysqli_query($con,$sql);
 $num=mysqli_num_rows($res);
if($num>0){
    echo json_encode("success");

}
else{
    echo json_encode("wrong");
}   
}
?>
