<?php
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);
$mobile = $decoded['mobileotp'];
$otp = $decoded['otpmobile'];
$curl = curl_init();
//curl_setopt($curl, CURLOPT_URL,'https://075831b64ac6f0ad11fa26a78d81ed949499013f438eb775:2b349dc1c0842f51ac452c327e05e8df8c0fb7a067ba3d02@api.exotel.com/v1/Accounts/jeftechno1/Sms/send');
curl_setopt($curl, CURLOPT_URL,'https://075831b64ac6f0ad11fa26a78d81ed949499013f438eb775:2b349dc1c0842f51ac452c327e05e8df8c0fb7a067ba3d02@api.exotel.com/v1/Accounts/jeftechno1/Sms/send');

curl_setopt($curl, CURLOPT_POST, 1);
$data = array(
    'From' => '08047193170',// 08047193170
    'To' => $mobile,
    'Body' => 'Welcome to JEF Techno Solutions Private Ltd. '.$otp.' is the OTP to authenticate yourself to access JEF Shield Portal.',
    'Priority' => 'high'
);
curl_setopt($curl, CURLOPT_POSTFIELDS,$data);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($curl);
curl_close ($curl);
echo json_encode($server_output);
?>

