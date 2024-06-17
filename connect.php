<?php  
    $ID_NUMBER = $_POST ['ID_NUMBER'];
    $firstname = $_POST ['firstname'];
    $username = $_POST ['username'];
    $Email = $_POST ['Email'];
    $password = $_POST ['password'];
    $Telephone = $_POST ['Telephone'];


 $conn = new mysqli('localhost','root','', 'truppy' );
if($conn->connect_error){
    die('connection failed  : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(ID_NUMBER,firstname,username,Email,password,Telephone)
    values(?,?,?,?,?,?)");
$ $stmt->bind_param("issssi",$ID_NUMBER,$firstname,$username,$Email,$password,$Telephone);
    $stmt->execute();
    $stmt->close();
    echo "registration Successful..";
    $stmt->close();
    $stmt->close();
}
?>