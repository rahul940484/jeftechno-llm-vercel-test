<script>
  var LocalData = JSON.parse(localStorage.getItem('MobileNumber'));
  async function SubmitRiskAssessmentReport(Info){
    // console.log(Info)
    var resp_state = 0;
    var urlapi = Info.urlapi;
    var ResponseData;
    await fetch(urlapi, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(Info.Data)
    }).then(function(response){
      // console.log(response);
      return response.json().catch(function(error){console.log(error)});
    }).then(function(resp_data){
      console.log("Server Response")
      console.log(resp_data);
      if(resp_data.respCode == 2 && resp_data.respText == "success"){
        resp_state = 1;
        errorMessage = resp_data.respText;
        ResponseData = resp_data;
      }else{
        resp_state = 0;
        errorMessage = resp_data.respText;
        ResponseData = resp_data;
      }
    }).catch(function(error){
      // console.log(error)
      resp_state = 0;
      errorMessage = error.message;
    });
    if(resp_state == 1){
      setTimeout(function(){
        let FileData={fileSrc:"",filename:""};
        localStorage.setItem("DwgFileInfo",JSON.stringify(FileData));
        window.location.href = 'BuildingList.php';
        console.log("Timer is Completed........");
      }, 10000);
    }else{
      alert(errorMessage);
      window.location.href = 'BuildingList.php';
    }
  }
  console.log("In servey.php")
  var Country = '<?php echo $_REQUEST['countrySelect'] ?>';
  console.log(Country);
  if('<?php echo $_REQUEST['radio'] ?>' == "Report1"){
    // console.log("Report-1")
    var Request = {
      filename: "",
      fileSrc: "",
      Projectname: '<?php echo $_REQUEST['project_name'] ?>',
      clientName: '<?php echo $_REQUEST['client_name'] ?>',
      country: Country,
      State: Country != "India"?"":'<?php echo $_REQUEST['stateSelect'] ?>',
      city: Country != "India"?"":'<?php echo $_REQUEST['selectedCity'] ?>', 
      location: Country == "India"?"":'<?php echo $_REQUEST['location'] ?>',
      thunderStormDays: Country == "India"?"":'<?php echo $_REQUEST['thunderstorm_days'] ?>',
      buildinglength: '<?php echo $_REQUEST['building_length'] ?>',
      buildingwidth: '<?php echo $_REQUEST['building_width'] ?>',
      buildingheight: '<?php echo $_REQUEST['building_height'] ?>',
      noofloor:'<?php echo $_REQUEST['number_of_floor'] ?>',
      locationfactor: '<?php echo $_REQUEST['location_factor'] ?>',

      lengthofpowerline: '<?php echo $_REQUEST['length_of_powerline'] ?>',
      InstallationFactor: '<?php echo $_REQUEST['installation_factor1'] ?>',
      Linetype: '<?php echo  $_REQUEST['line_type_factor'] ?>',
      environmentalfactor: '<?php echo $_REQUEST['environmental_factor'] ?>',
      shieldofcable: '<?php echo $_REQUEST['shield_of_line1'] ?>',
      Impulsewithstand: '<?php echo $_REQUEST['impulse_voltage1'] ?>',
      Typeofinstallation: '<?php echo $_REQUEST['shielding_isolation1'] ?>',
      Lengthofdataline2: '<?php echo $_REQUEST['length_telecom_line'] ?>',
      Shieldofcable1: '<?php echo $_REQUEST['shield_of_line'] ?>',
      Impulsewithstand1: '<?php echo $_REQUEST['impulse_voltage'] ?>',
      Equipotentialbonding: '<?php echo $_REQUEST['shielding_isolation'] ?>',

      Typeoffloor:'<?php echo $_REQUEST['type_of_floor'] ?>',
      riskoffire: '<?php echo $_REQUEST['risk_of_fire'] ?>',
      fireprotection: '<?php echo $_REQUEST['fire_protection'] ?>',
      special: '<?php echo $_REQUEST['special_consideration'] ?>',
      Typeofbuilding: '<?php echo $_REQUEST['hazardlist'] ?>',
      Noofpersons: '<?php echo $_REQUEST['total_person'] ?>',
      Totalfunctionalhoursofbuilding: '<?php echo $_REQUEST['function_per_hour'] ?>',
      Functionaldaysinayear: '<?php echo $_REQUEST['function_per_day'] ?>',
      mobileno: LocalData.mobileNumber,
      apiFlag: "RAR"
    }
    console.log("Sumitting Report-1 to server")
    console.log(Request)
    var reqData = {
      urlapi: "https://dev.telibrahma.in/jefshield/riskAssessmentReportNew",
      Data: Request
    }
    console.log(reqData)
    SubmitRiskAssessmentReport(reqData);

  }else{
    // console.log("Report-2")
    var Request = {
      filename: "",
      fileSrc: "",
      Projectname: '<?php echo $_REQUEST['project_name'] ?>',
      clientName: '<?php echo $_REQUEST['client_name'] ?>',
      country: Country,
      State: Country != "India"?"":'<?php echo $_REQUEST['stateSelect'] ?>',
      city: Country != "India"?"":'<?php echo $_REQUEST['selectedCity'] ?>', 
      location: Country == "India"?"":'<?php echo $_REQUEST['location'] ?>',
      thunderStormDays: Country == "India"?"":'<?php echo $_REQUEST['thunderstorm_days'] ?>',
      buildinglength: '<?php echo $_REQUEST['building_length'] ?>',
      buildingwidth: '<?php echo $_REQUEST['building_width'] ?>',
      buildingheight: '<?php echo $_REQUEST['building_height'] ?>',
      noofloor:'<?php echo $_REQUEST['number_of_floor'] ?>',
      locationfactor: '<?php echo $_REQUEST['location_factor'] ?>',

      lengthofpowerline: '<?php echo $_REQUEST['length_of_powerline'] ?>',
      InstallationFactor: '<?php echo $_REQUEST['installation_factor1'] ?>',
      Linetype: '<?php echo  $_REQUEST['line_type_factor'] ?>',
      environmentalfactor: '<?php echo $_REQUEST['environmental_factor'] ?>',
      shieldofcable: '<?php echo $_REQUEST['shield_of_line1'] ?>',
      Impulsewithstand: '<?php echo $_REQUEST['impulse_voltage1'] ?>',
      Typeofinstallation: '<?php echo $_REQUEST['shielding_isolation1'] ?>',
      Lengthofdataline2: '<?php echo $_REQUEST['length_telecom_line'] ?>',
      Shieldofcable1: '<?php echo $_REQUEST['shield_of_line'] ?>',
      Impulsewithstand1: '<?php echo $_REQUEST['impulse_voltage'] ?>',
      Equipotentialbonding: '<?php echo $_REQUEST['shielding_isolation'] ?>',

      Typeoffloor:'<?php echo $_REQUEST['type_of_floor'] ?>',
      riskoffire: '<?php echo $_REQUEST['risk_of_fire'] ?>',
      fireprotection: '<?php echo $_REQUEST['fire_protection'] ?>',
      special: '<?php echo $_REQUEST['special_consideration'] ?>',
      Typeofbuilding: '<?php echo $_REQUEST['hazardlist'] ?>',
      Noofpersons: '<?php echo $_REQUEST['total_person'] ?>',
      Totalfunctionalhoursofbuilding: '<?php echo $_REQUEST['function_per_hour'] ?>',
      Functionaldaysinayear: '<?php echo $_REQUEST['function_per_day'] ?>',

      Typeofroof: '<?php echo $_REQUEST['roof_type'] ?>',
      Equipment: '<?php echo $_REQUEST['equipment_needed'] ?>',
      AirTerminalMaterial: '<?php echo $_REQUEST['air_terminal_material'] ?>',
      Protectedterrace : '<?php echo $_REQUEST['protected_terrace'] ?>',
      Maxheight : '<?php echo $_REQUEST['max_height_terrace'] ?>',
      Noofequipment : '<?php echo $_REQUEST['number_of_equipment'] ?>',
      Equipmentfilled : '<?php echo $_REQUEST['equipment_filled'] ?>',
      Downconductorrouting : '<?php echo $_REQUEST['conductor_routing'] ?>',
      Downconductormaterial : '<?php echo $_REQUEST['down_conductor_material'] ?>',
      Earthingsystem : '<?php echo $_REQUEST['earthing_system'] ?>',
      Earthingmaterial : '<?php echo $_REQUEST['earthing_material'] ?>',

      mainIncomerPhase3: '<?php echo $_REQUEST['mainIncomerPhase3'] ?>',
      mainIncomerPhase1: '<?php echo $_REQUEST['mainIncomerPhase1'] ?>',
      subPanelsPhase3: '<?php echo $_REQUEST['subPanelsPhase3'] ?>',
      subPanelsPhase1: '<?php echo $_REQUEST['subPanelsPhase1'] ?>',
      floorDistributionBoardPhase3: '<?php echo $_REQUEST['floorDistributionBoardPhase3'] ?>',
      floorDistributionBoardPhase1: '<?php echo $_REQUEST['floorDistributionBoardPhase1'] ?>',
      liftPanelPhase3: '<?php echo $_REQUEST['liftPanelPhase3'] ?>',
      liftPanelPhase1: '<?php echo $_REQUEST['liftPanelPhase1'] ?>',
      fireFightingPanelPhase3: '<?php echo $_REQUEST['fireFightingPanelPhase3'] ?>',
      fireFightingPanelPhase1: '<?php echo $_REQUEST['fireFightingPanelPhase1'] ?>',
      automationPanelPhase3: '<?php echo $_REQUEST['automationPanelPhase3'] ?>',
      automationPanelPhase1: '<?php echo $_REQUEST['automationPanelPhase1'] ?>',
      outdootStreetlightPanelPhase3: '<?php echo $_REQUEST['outdootStreetlightPanelPhase3'] ?>',
      outdootStreetlightPanelPhase1: '<?php echo $_REQUEST['outdootStreetlightPanelPhase1'] ?>',
      roofTopSolarPanelPhase3: '<?php echo $_REQUEST['roofTopSolarPanelPhase3'] ?>',
      roofTopSolarPanelPhase1: '<?php echo $_REQUEST['roofTopSolarPanelPhase1'] ?>',
      securityPanelPhase3: '<?php echo $_REQUEST['securityPanelPhase3'] ?>',
      securityPanelPhase1: '<?php echo $_REQUEST['securityPanelPhase1'] ?>',

      mobileno: LocalData.mobileNumber,
      apiFlag: "RARBM"
    }
    // console.log(Request)
    console.log("Sumitting Report-2 to server")
    var reqData = {
      urlapi: "https://dev.telibrahma.in/jefshield/riskAssessmentReportNew",
      Data: Request
    }
    // console.log(reqData)
    SubmitRiskAssessmentReport(reqData);
  }
</script>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

  <!-- For IE -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- For Resposive Device -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Successful</title>

  <!-- Favicon -->
  <!-- <link rel="icon" type="image/png" sizes="56x56" href="https://jeftechno.com/images/fav-icon/icon.png"> -->

  <script>
    // setTimeout(function(){
    //   // window.location.href = 'https://www.jeftechno.com/JEF_PHP/BuildingList.php';
    //   // window.location.href = 'BuildingList.php';
    // }, 10000);
  </script>
  <!-- Main style sheet -->
  <link rel="stylesheet" type="text/css" href="jefn/css/style.css">
  <!-- responsive style sheet -->
  <!-- <link rel="stylesheet" type="text/css" href="https://jeftechno.com/css/responsive.css"> -->

  <!-- Google Tag Manager -->
  <script>
    // (function(w, d, s, l, i) {
    //   w[l] = w[l] || [];
    //   w[l].push({
    //     'gtm.start': new Date().getTime(),
    //     event: 'gtm.js'
    //   });
    //   var f = d.getElementsByTagName(s)[0],
    //     j = d.createElement(s),
    //     dl = l != 'dataLayer' ? '&l=' + l : '';
    //   j.async = true;
    //   j.src =
    //     'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    //   f.parentNode.insertBefore(j, f);
    // })(window, document, 'script', 'dataLayer', 'GTM-WCLFFXN');
  </script>
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCLFFXN" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div class="main-page-wrapper">
    <div class="container" style="margin-top:40px;">
      <div class="error-page wow fadeInUp">
        <!-- <div class="round-border p-color-bg"> -->
        <!-- <h2 style="font-size:30px;">Sent</h2> -->
      </div> <!-- /.round-border -->
      <h5>Thank You So Much For Filling Your Details To Generate Risk Assessment Report.</h5><br>
      <h5>Your Report will be available in your Dashboard in 5 Minutes.</h5><br><br>
      <h5>Please Feel Free To Contact For Any Questions At marketing@jeftechno.com </h5>
      <a href="https://www.jeftechno.com/JEF_SHIELD/BuildingList" class="tran3s p-color-bg hvr-shutter-out-horizontal-two">go home</a>
    </div> <!-- /.error-page -->
  </div> <!-- /.container -->
  <!-- j Query -->
  <script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>

  <!-- Bootstrap JS -->
  <script type="text/javascript" src="vendor/bootstrap/bootstrap.min.js"></script>

  <!-- Vendor js _________ -->
  <!-- Camera Slider -->
  <!-- <script type='text/javascript' src='vendor/Camera-master/scripts/jquery.mobile.customized.min.js'></script>
  <script type='text/javascript' src='vendor/Camera-master/scripts/jquery.easing.1.3.js'></script>
  <script type='text/javascript' src='vendor/Camera-master/scripts/camera.min.js'></script> -->

  <!-- WOW js -->
  <!-- <script type="text/javascript" src="vendor/WOW-master/dist/wow.min.js"></script> -->
  <!-- owl.carousel -->
  <!-- <script type="text/javascript" src="vendor/owl-carousel/owl.carousel.min.js"></script> -->

  <!-- Theme js -->
  <!-- <script type="text/javascript" src="https://jeftechno.com/js/theme.js"></script> -->

  </div> <!-- /.main-page-wrapper -->
</body>

</html>