
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>JEF SHIELD | Lightning Protection Risk Assessment Tool</title>		
        <meta name="description" content="We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305">		
        <meta name="abstract" content="We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305">		
        <meta name="keywords" content="lightning protection risk assessment, jef shield lightning protection, jef shield, risk assessment, risk assessment tool, risk assessment software, jef shield lightning protection">		

      	<link rel="shortcut icon" type="image/png" href="assets/images/icon.png">
        <!-- GOOGLE WEB FONT -->
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600" rel="stylesheet">
        <!-- BASE CSS -->
        <link href="jefn/css/bootstrap.min.css" rel="stylesheet">
        <link href="jefn/css/menu.css" rel="stylesheet">
        <link href="jefn/css/style.css" rel="stylesheet">
        <link href="jefn/css/vendors.css" rel="stylesheet">
        <!-- YOUR CUSTOM CSS -->
        <link href="jefn/css/custom.css" rel="stylesheet">
        <link href="jefn/css/statecity.css" rel="stylesheet">
      <link rel="shortcut icon" type="image/png" href="../assets/images/JEF SHIELD Logo.png">
      
     
        <style>
            #imgb {width: 100%;
                height: 100%;
                background-image: url('images/light.jpg');
                background-size: cover;
                overflow:hidden;
            }

            #otherc, #roof_type, #equipment_needed, #otheri, #hazardinput {
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                border-radius: 2px;
                border: 1px solid #d2d8dd;
                margin-bottom: 10px;
                width: 100%;
                height: 40px;
                padding-left: 5px;
                color: #6c757d;
                background-color: #fff;
            }

            .fsubmit {
                -webkit-appearance: button;
                border: none;
                color: #fff;
                text-decoration: none;
                transition: background .5s ease;
                -moz-transition: background .5s ease;
                -webkit-transition: background .5s ease;
                -o-transition: background .5s ease;
                display: inline-block;
                cursor: pointer;
                outline: none;
                text-align: center;
                background: #434bdf;
                position: relative;
                font-size: 14px;
                font-size: 0.875rem;
                font-weight: 600;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                -ms-border-radius: 3px;
                border-radius: 3px;
                line-height: 1;
                padding: 12px 30px;
            }
        </style>

        <style>
            .loader {
                border: 2px solid #f3f3f3;
                border-radius: 50%;
                border-top: 2px solid red;
                width: 20px;
                height: 20px;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 2s linear infinite;
                float: right;
            }

            /* Safari */
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>

        <!-- MODERNIZR MENU -->
        <script src="jefn/js/modernizr.js"></script>
        <script src="jefn/js/statecity.js"></script>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="js/buildingmanagement.js"></script>
        <script>
            $(document).ready(function(){
                let formData = {};
                $('input[type="radio"]').click(function(){
                    var inputValue = $(this).attr("value");
                    if (inputValue === "Report1"){
                        $("#nexta3").hide();
                        $("#form4").hide();
                        $('#submita1').show();
                    }else if (inputValue === "Report2") {
                        $("#submita1").hide();
                        $('#nexta3').show();
                        $('#submita2').show();
                    }
                });
                $("#roof_type").change(function() {
                    var rtype = $('#roof_type').find(':selected').text() ;
                    if(rtype === "RCC Roof" ) {
                        $("#equipment_needed").prepend($("<option value='rccq' selected='selected'>Water Proof Membrane in terrace roof?</option>"));
                        $("#equipment_needed option[value='metalq']").remove();
                    }
                    else if(rtype === "Metalic Roof" ) {
                        $("#equipment_needed").prepend($("<option value='metalq' selected='selected'>Metallic roof of seam type? (punchering not allowed)</option>"));
                        $("#equipment_needed option[value='rccq']").remove();   
                    }
                });

            });
        </script>
        <script>
            var LocalData;
            $(document).ready(function(){
                $("#topjefbf").click(function(){
                    $("#topjef").hide();
                });
                $("#prev1").click(function(){
                    $("#topjef").show();
                });
                if (localStorage) {
                    LocalData = JSON.parse(localStorage.getItem("MobileNumber"));
                    if(LocalData != null || LocalData != undefined){
                        Logout();
                    }
                } else {
                    alert("Your Browser does not support localStorage Please Try another Browsers...!")
                }
            });
        </script>

        <script>
            function checkOption(obj) {
                var input1 = document.getElementsByName("max_height_terrace");
                var input2 = document.getElementsByName("number_of_equipment");
                var input3 = document.getElementsByName("equipment_filled");
                for(var i=0; i < input1.length; i++) {
                    input1[i].disabled = !(obj.value == "Yes")
                }
                for(var i=0; i < input2.length; i++) {
                    input2[i].disabled = !(obj.value == "Yes")
                }
                for(var i=0; i < input3.length; i++) {
                    input3[i].disabled = !(obj.value == "Yes")
                }
            }

            function numberdisable(){
                document.getElementById("phonefield0").disabled = false;
            }

            async function Logout(){
                // alert("OK")
                // var LocalData = JSON.parse(localStorage.getItem("MobileNumber"));
                // console.log(LocalData.mobileNumber)
                // localStorage.removeItem("MobileNumber");
                var Data = {
                    mobileNumber: LocalData.mobileNumber
                }
                var Request = {
                    urlapi: "https://dev.telibrahma.in/jefshield/jefShieldLogout",
                    Data: Data
                }
                var Response = await RequestAPI(Request)
                console.log(Response);
                if(Response.respCode != 2){
                    alert(Response.errorMessage)
                }else{
                    localStorage.removeItem("MobileNumber");                    
                }
            }

            async function RequestAPI(Info){
                console.log(Info);
                var resp_state = 0;
                var urlapi = Info.urlapi;
                var ResponseData;
                await fetch(urlapi, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Info.Data)
                }).then(function(response) {
                    console.log(response);
                    return response.json().catch(function(error){console.log(error)});
                }).then(function(resp_data) {
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
                    resp_state = 0;
                    errorMessage = error.message;
                });
                if(resp_state == 1){
                    if(ResponseData === undefined || ResponseData === null){
                        return(null)
                    }else{
                        var Response = {
                            respCode: ResponseData.respCode,
                            respText: ResponseData.respText,
                            Data: ResponseData
                        }
                        return(Response);                        
                    }
                }else{
                    if(ResponseData === undefined || ResponseData === null){
                        return(null)
                    }else{
                        var Response = {
                            respCode: ResponseData.respCode,
                            respText: ResponseData.respText,
                        }
                        return(Response);
                    }
                }
            }

            async function generateOTP() {
                var Mobile = document.getElementById('phonefield0').value;
                if(Mobile === null || Mobile === "" || Mobile === undefined){
                    alert("Please Enter Mobile Number.....!");
                }else{
                    let confirmation = true;
                    if(Mobile.length !== 10){
                        confirmation = confirm("Mobile Number is not equal to 10 digits...! If you want to continue click 'OK'");
                    }
                    if(confirmation){
                        document.getElementById('loginLoader').style.display="block";
                        var Data = {
                            mobileNumber: Mobile
                        }
                        var Request = {
                            urlapi: "https://dev.telibrahma.in/jefshield/jsLogin",
                            Data: Data
                        }
                        var Response = await RequestAPI(Request)
                        
                        if(Response === null){
                            alert("API Server Not Responding...")
                            document.getElementById('loginLoader').style.display="none";
                        }else{
                            if((Response.respCode == 2 && Response.respText == "success") || (Response.respCode == 5 && Response.respText == "UserLogedIn")){
                                if(Response.respCode == 5 && Response.respText == "UserLogedIn"){
                                    alert(Response.respText);
                                    localStorage.setItem("MobileNumber",JSON.stringify(Data));
                                    window.location.href="BuildingList.php";
                                }else{
                                    var OTP = Response.Data.otp;
                                    while (1) {
                                        var person = prompt(Response.Data.successMessage, "Enter OTP");
                                        // var person = prompt("The OTP is Sent to Your Registered Email: "+Mobile, "Enter OTP");
                                        if(OTP == person) {
                                            var Data1 = {
                                                mobileNumber: Mobile
                                            }
                                            var Request1 = {
                                                urlapi: "https://dev.telibrahma.in/jefshield/updateLogin",
                                                Data: Data1
                                            }
                                            var Response2 = await RequestAPI(Request1)
                                            if(Response2.Data.respCode == 2 && Response2.Data.respText == "success"){
                                                document.getElementById('loginLoader').style.display="none";
                                                localStorage.setItem("MobileNumber",JSON.stringify(Data));
                                                window.location.href="BuildingList.php";
                                            }else{
                                                alert(Response2.Data.respText);
                                                document.getElementById('loginLoader').style.display="none";
                                            }
                                            break;
                                        }else if(person == null){
                                            // document.getElementById("submita1").style.display="block";
                                            // document.getElementById("phonefield0").disabled = false;
                                            alert("OTP Verification is not done....!")
                                            document.getElementById('loginLoader').style.display="none";
                                            break;
                                        }else{
                                            alert("Invalid OTP");
                                        }
                                    }
                                }
                            }else{
                                console.log(Response.Data)
                                document.getElementById('loginLoader').style.display="none";
                                alert(Response.respText)
                            }
                        }
                    }
                }
            }

            function Registration() {
                window.location.href="registerdesign.php";
            }

            // VerifyOTP(){
            //     var userOTP = document.getElementById('phonefield0').value;
            //     $('.bd-example-modal-sm1').modal('show');
            // }

            // Cancel(){
            //     $('.bd-example-modal-sm1').modal('show');
            // }
        </script>
    </head>

    <body>
        <div id="loader_form">
            <div data-loader="circle-side-2">
            </div>
        </div><!-- /loader_form -->
        <div class="container-fluid full-height">
            <div class="row row-height">
                <div class="col-lg-6 content-left" id="imgb">
                    <div class="content-left-wrapper"  >
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <figure><img src="jefn/img/1.png" alt="" class="img-fluid" height="150" width="150"></figure>
                                    <h4 style="color:white;">WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE?</h4>
                                    <p>We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes.</p>
                                </div>
                                <div class="carousel-item">
                                    <figure><img src="jefn/img/2.png" alt="" class="img-fluid" height="150" width="150"></figure>
                                    <h4 style="color:white;">IS THERE COST INVOLVED TO GENERATE REPORT?  </h4>
                                    <p>The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited.<br<br><br></p><br<br><br>
                                </div>
                                <div class="carousel-item">
                                    <figure><img src="jefn/img/3.png" alt="" class="img-fluid" height="150" width="150"></figure>
                                    <h4 style="color:white;">HOW CAN I USE THE OUTPUT FROM THIS SOFTWARE?</h4>
                                    <p>You will be able to generate all the required reports in pdf format which can be downloaded to your local machine.</p>
                                </div>
                            </div><br><br<br><br>
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                        </div>
                        <div class="copy">Copyright 2020. All Rights Reserved &copy;
                            <a href="#" style="color:#fff" target="_blank">
                            JEF Techno
                            </a>
                            | Designed by
                            <a href="http://www.coltfox.com" style="color:#fff" target="_blank">
                            <img src="https://www.jeftechno.com/assets/images/coltfox-ico.png" style="width: 20px; margin-bottom: -5px; margin-left: 5px;" />
                            </a>
                        </div>
                    </div>
                    <!-- /content-left-wrapper -->
                </div>
                <!-- /content-left -->

                <div class="col-lg-6 content-right" id="start">
                    <div id="wizard_container">
                        <div id="top-wizard"><br>
                            <div id="topjef">
                                <h4 style="color:#3333ff;"><b>JEF SHIELD</b></h4>
                                <p>Our customer centric “Lightning Protection Risk Assessment Tool” won’t leave you alone.This user friendly software helps you carry out complete risk assessment with a few simple clicks. </p>
                            </div>
                                <div id="progressbar"></div>
                            </div>
                            <!-- /top-wizard -->
                            <script>
                                function Login(){
                                    if(document.getElementById("phonefield0").value == null || document.getElementById("phonefield1").value == undefined || document.getElementById("phonefield0").value == ""){
                                        document.getElementById("phonefield0").focus();
                                        return false;
                                    }else{
                                        return true;
                                    }
                                }
                            </script>

                            <!-- <form method="POST" name="registersubmit" onsubmit='return Login()' action="login.php"> -->
                                <div id="middle-wizard">
                                    <div class="submit">
                                        <h5 class="main_question"><strong></strong>Please Fill With Your Details To Generate Customized Report</h5>
                                        <div class="form-group">
                                            <input type="tel" name="mobile_no1" id="phonefield0" class="form-control required"  placeholder="Mobile Number"> 
                                            <!-- onblur="generateOTP();" -->
                                            <input type="hidden" name="mobile_no" id="phonefield1"  class="form-control required"  placeholder="Mobile Number">
                                        </div>
                                        <button type="button" name="submita1" id="submita1" class="fsubmit float-left" style="display:block" onclick="generateOTP();">Login&nbsp;&nbsp;&nbsp;<div class="loader" id="loginLoader" style="display: none;height:10px;width:10px"></div></button>
                                        <button type="button" name="submita1" id="submita1" class="fsubmit float-left" style="display:block; margin-left:20px" onclick="Registration()">Register</div></button>
                                    </div>
                                								
                                </div>
                            <!-- </form> -->
                        </div>
                        <!-- /Wizard container -->
                    </div>
                    <!-- /content-right-->
                </div>
                <!-- /row-->
            </div>
            <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <!-- <div class="modal-dialog" role="document">
                    <div class="modal-content">
                            <h5>The User is Already LogedIn Through Another Device. Please Click Bellow Button to Logout</h5>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="float-right" style="margin-left:20px">Logout</div>
                    </div>
                </div> -->
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <!-- <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Alert Message....!</h5> -->
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> -->
                        <!-- </div> -->
                        <div class="modal-body">
                            <h5>The User is Already LogedIn Through Another Device. Please Click Bellow Button to Logout</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-info" onclick="Logout();">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /container-fluid -->
            <!-- <div class="modal fade bd-example-modal-sm1" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h5 id="OTP"></h5>
                            <input type="text" id="userOTP" placeholder="Please Enter OTP"> 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="VerifyOTP();">Verify</button>
                            <button type="button" class="btn btn-info" onclick="Cancel();">Cancel</button>
                        </div>
                    </div>
                </div>
            </div> -->


        </div>

        <!-- <div class="cd-overlay-nav">
        <span></span>
        </div> -->
        <!-- /cd-overlay-nav -->

        <!-- <div class="cd-overlay-content">
        <span></span>
        </div> -->
        <!-- /cd-overlay-content -->

        <!-- COMMON SCRIPTS -->
        <script src="jefn/js/jquery-3.2.1.min.js"></script>
        <script src="jefn/js/common_scripts.min.js"></script>
        <script src="jefn/js/velocity.min.js"></script>
        <script src="jefn/js/functions.js"></script>
        <!-- Wizard script -->
        <script src="jefn/js/survey_func.js"></script>
    </body>
</html>
