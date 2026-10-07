<!DOCTYPE html>

<html lang="en">

<head>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">



  <title>Jef Shield</title>

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

  <!-- COMMON SCRIPTS -->

  <script src="jefn/js/jquery-3.2.1.min.js"></script>

  <script src="jefn/js/common_scripts.min.js"></script>

  <script src="jefn/js/velocity.min.js"></script>

  <script src="jefn/js/functions.js"></script>

  <script src="jefn/js/survey_func.js"></script>



  <script src="js/dynamic_dropdowns.js"></script>





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

      $(document).ready(function(){

        // document.getElementById("phonefield0").disabled = true;

        GetCountryCode();

        $("#topjefbf").click(function(){

          $("#topjef").hide();

        });

        $("#prev1").click(function(){

          $("#topjef").show();

        });

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



      // async function genearteOTP() {

      //   var OTP = Math.ceil(Math.random() * 100000);

      //   var mobile = document.getElementById('phonefield0').value;

      //   var data = {

      //     mobileotp: parseInt(mobile),

      //     otpmobile: OTP

      //   }

      //   var data1 = {

      //     mobno: parseInt(mobile),

      //     otp: OTP

      //   }

      //   fetch("https://www.jeftechno.com/smsapi.php",{

      //     method:'POST',

      //     mode: 'no-cors',

      //     headers: {

      //       'Content-Type': 'application/json'

      //     },

      //     body: JSON.stringify(data)

      //   })

      //   // fetch('http://192.168.0.117:6000/gen_num_otp', {

      //   //   method: 'get'

      //   // }).then(function(response) {

      //   //   alert(response.statusText);

      //   // }).catch(function(err) {

      //   //   // Error :(

      //   // });

      //   // fetch("http://192.168.0.117:6000/gen_num_otp");

      //   //   alert("poiuytrsd")

      //   //   await fetch("http://192.168.0.117:6000/gen_num_otp",{

      //   //     method:'POST',

      //   //     mode: 'no-cors',

      //   //     headers: {

      //   //       'Content-Type': 'application/json'

      //   //     },

      //   //     body: JSON.stringify(data1)

      //   //   }).then(data => {

      //   //   // Work with JSON data here

      //   //   alert(data);

      //   //   console.log(data)

      //   // })

      //   // .catch(err => {

      //   //   alert(err)

      //   //   // Do something for an error here

      //   // })

      //   // alert(OTP)

      //   while (1) {

      //     var person = prompt("Enter your OTP", "Enter OTP");

      //     if(OTP == person) {

      //       document.getElementById("phonefield1").value = document.getElementById("phonefield0").value;

      //       document.getElementById("phonefield0").disabled = true;

      //       document.getElementById("submita1").style.display="block";

      //       break;

      //     }else if(person == null){

      //       document.getElementById("submita1").style.display="block";

      //       document.getElementById("phonefield0").disabled = false;

      //       break;

      //     }else{

      //       alert("Invalid OTP");

      //     }

      //   }

      //   return;

      // }



      // function verifyEmailee(){

      //   var status = false;     

      //   if (document.myform.email.value != "info@jeftechno.com") {

      //     alert("Thank you so much for your interest in generating your Risk Assessment Report. \nAuthentication is required in order to get an access to the forms.\n \nPlease do feel free to write us an email at info@jeftechno.com \n\nOur team will get in touch with you shortly.");

      //     location.replace("https://www.jeftechno.com/jef-shield.php")

      //   }

      //   else if(document.myform.email.value == "info@jeftechno.com"){          

      //     status = true;

      //   }

      //   return status;

      // }

      function Login(){

        window.location.href="login.php";

      }

      // Updated Source Code on 18-Aug-2020

      var Country = "India";

      var CountryCode = "+91";

      var LocalOTP = "";

      var TandState = false;



      //Selecting Country for Address

      function SelectCountry(value){

        Country = value;

        if(value == "India"){

          document.getElementById("state").disabled = false;

        }else{

          document.getElementById("state").disabled = true;

        }

      }

      //Country Code selection for mobile number

      function countryCodeChanges(){

        var Value = document.getElementById("countryCode").value;

        CountryCode = Value;

        // if(Value == "+91"){

        //   document.getElementById("phonefield0").disabled = false;

        // }else{

        //   document.getElementById("phonefield0").disabled = true;

        // }

      }



      function TermsAndConditions(){

        var state = document.getElementById("TandC").checked;

        if(state == true){

          TandState = true;

        }else{

          TandState = false;

        }

      }



      //Mobile verification if country code belongs to india

      async function MobileVerification(){

        var mobile = document.getElementById('phonefield0').value;

        if(mobile.length == 10){

          if(CountryCode == "+91"){

            var OTP = Math.ceil(Math.random() * 100000);

            LocalOTP = OTP;

            var data = {

              mobileotp: parseInt(mobile),

              otpmobile: OTP

            }

            // console.log(data)

            await fetch("https://www.jeftechno.com/smsapi.php",{

              method:'POST',

              mode: 'no-cors',

              headers: {

                  'Content-Type': 'application/json'

              },

              body: JSON.stringify(data)                    

            }).catch(function(error){

              alert(error.message);

            });

            var Data = {

              respCode: 2,

              OTPtype: "Mobile",

              MobileNo: mobile,

              respText: "success"

            }

            return(Data);

          }

        }else{

          alert("Mobile Number Should be 10 Digits....!");

        }

      }



      //Email Verification for when country belongs to out of india

      async function EmailVerification(){

        console.log("In process")

        if(CountryCode != "+91"){

          console.log("In process-1")

          var Email = document.getElementById('email').value;

          var OTP = Math.ceil(Math.random() * 100000);

          LocalOTP = OTP;

          var data = {

            to: Email,

            otp: OTP

          }

          // console.log(data)

          await fetch("https://dev.telibrahma.in/jefshield/verifyEmailOtp",{

              method:'POST',

              // mode: 'no-cors',

              headers: {

                  'Content-Type': 'application/json'

              },

              body: JSON.stringify(data)                    

          }).then(function(response) {

              console.log(response);

              // return response.json().catch(function(error){console.log(error)});

          }).catch(function(error){

              alert(error.message);

          });

          var Data = {

            respCode: 2,

            OTPtype: "Email",

            EmailId: Email,

            respText: "success"

          }

          console.log(Data)

          return(Data);

        }

      }





      async function Registration(){

        var Name = document.getElementById("full_name").value;

        var mobileNumber = document.getElementById('phonefield0').value;

        var companyName = document.getElementById("company_name").value;

        var address = document.getElementById("address").value;

        var state = document.getElementById("state").value;

        var email = document.getElementById('email').value;

        if(Name == ""){

          document.getElementById("full_name").focus();

        }else if(mobileNumber == ""){

          document.getElementById('phonefield0').focus();

        }else if(email == ""){

          document.getElementById('email').focus();

        }else if(companyName == ""){

          document.getElementById("company_name").focus();

        }else if(address == ""){

          document.getElementById("address").focus();

        }else if(Country == "india" && state == ""){

          document.getElementById("state").focus();

        }else if(TandState == false){

          alert("Please Accept Terms and Conditions...")

        }else{

          // var request = {

          //   userName: document.getElementById("full_name").value,

          //   countryCode: CountryCode,

          //   mobileNumber: document.getElementById('phonefield0').value,

          //   email: document.getElementById('email').value,

          //   companyName: document.getElementById("company_name").value,

          //   address: document.getElementById("address").value,

          //   country: Country,

          //   state: document.getElementById("state").value,

          // }

          // console.log(request);

          // alert("OK")

          var Response;

          if(CountryCode == "+91"){

            Response = await MobileVerification();

          }else{

            Response = await EmailVerification();

          }

          var UserState= "";

          // console.log(Response);

          if(Response.respCode == 2){

            while(true){

              var person;

              if(Response.OTPtype == "Mobile"){

                person = prompt("The OTP is Sent to "+Response.MobileNo+" Just for Authentication", "Enter OTP");

              }else{

                person = prompt("The OTP is Sent to "+Response.EmailId+"Just for Authentication", "Enter OTP");

              }

              // console.log(person)

              if(LocalOTP == person) {

                UserState = "success";

                break;

              }else if(person == null){

                break;

              }else{

                alert("Invalid OTP");

                continue;

              }

            }

          }

          console.log("Verification state: "+UserState)

          //Once Mobile/Email Verification done through OTP

          if(UserState == "success"){

            var request = {

              userName: document.getElementById("full_name").value,

              countryCode: CountryCode,

              mobileNumber: document.getElementById('phonefield0').value,

              email: document.getElementById('email').value,

              companyName: document.getElementById("company_name").value,

              address: document.getElementById("address").value,

              country: Country,

              state: document.getElementById("state").value,

            }

            console.log(request)

            var resp_state = 0;

            var urlapi = "https://dev.telibrahma.in/jefshield/jefShieldUserRegistration";

            var errorMessage = "";

            var message = "";

            await fetch(urlapi, {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json'

                },

                body: JSON.stringify(request)

            }).then(function(response) {

                console.log(response);

                return response.json().catch(function(error){console.log(error)});

            }).then(function(resp_data) {

                console.log("Server Response")

                console.log(resp_data);

                if(resp_data.respCode == 2 && resp_data.respText == "success"){

                    resp_state = 1;

                    errorMessage = resp_data.respText;

                    message = resp_data.successMessage;

                }else{

                    resp_state = 0;

                    errorMessage = resp_data.respText;

                }

            }).catch(function(error){

                resp_state = 0;

                errorMessage = error.message;

            });

            if(resp_state == 1){

              alert(message)

              window.location.href="login.php"

            }else{

              if(errorMessage == "User Already Exists, please Login"){

                window.location.href="login.php"

              }else{

                alert(errorMessage)

                return false;

              }

            }

          }else{

            if(Response.OTPtype == "Email"){

              alert("Without Email Verification You are Not Possible to Register...!")

              return false

            }else{

              alert("Without Mobile Verification You are Not Possible to Register...!")

              return false

            }

          }

        }

      }



      async function Verifymobile(){

        var Mobile = document.getElementById('phonefield0').value;

        if(Mobile.length == 10){

          var resp_state = 0;

          var urlapi = "https://dev.telibrahma.in/jefshield/doesUserAlreadyExist";

          var errorMessage = "";

          var message = "";

          var request = {

            mobileNumber: document.getElementById('phonefield0').value

          }

          await fetch(urlapi, {

              method: 'POST',

              headers: {

                  'Content-Type': 'application/json'

              },

              body: JSON.stringify(request)

          }).then(function(response) {

              // console.log(response);

              return response.json().catch(function(error){console.log(error)});

          }).then(function(resp_data) {

              // console.log("Server Response")

              // console.log(resp_data);

              if(resp_data.respCode == 2 && resp_data.respText == "success"){

                  resp_state = 1;

                  errorMessage = resp_data.respText;

              }else{

                  resp_state = 0;

                  errorMessage = resp_data.respText;

              }

          }).catch(function(error){

              resp_state = 0;

              errorMessage = error.message;

          });

          if(resp_state == 1){

            document.getElementById("phonefield0").disabled = true;

          }else{

            alert(errorMessage)

            document.getElementById("phonefield0").disabled = false;

            document.getElementById("phonefield0").value="";

            document.getElementById("phonefield0").focus();

          }

        }

        // else{

        //   alert("Mobile Number Should be 10 Digits....!")

        //   // document.getElementById("phonefield0").focus();

        // }

      }

    </script>

  </head>



	<body>

	    <div id="loader_form">

	        <div data-loader="circle-side-2"></div>

	    </div><!-- /loader_form -->

	    <div class="container-fluid full-height">

        	<div class="row row-height">

				<div class="col-lg-6 content-left" id="imgb">

					<div class="content-left-wrapper"  >

						<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

							<div class="carousel-inner">

								<div class="carousel-item active">

									<figure><img src="jefn/png/1.png" alt="" class="img-fluid" height="150" width="150"></figure>

									<h4 style="color:white;">WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE?</h4>

									<p>We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes.</p>

								</div>

								<div class="carousel-item">

									<figure><img src="jefn/png/2.png" alt="" class="img-fluid" height="150" width="150"></figure>

									<h4 style="color:white;">IS THERE COST INVOLVED TO GENERATE REPORT?  </h4>

									<p>The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited.<br<br><br></p><br<br><br>

								</div>

								<div class="carousel-item">

									<figure><img src="jefn/png/3.png" alt="" class="img-fluid" height="150" width="150"></figure>

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

							<img src="images/coltfox-ico.png" style="width: 20px; margin-bottom: -5px; margin-left: 5px;" alt="Image not found"/>

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

						<!-- <form name="registersubmit" onsubmit='return Registration()' method="POST" action="#"> -->

							<input id="website" name="website" type="text" value="">

							<!-- Leave for security protection, read docs for details -->

							<div id="middle-wizard">

								<div class="submit">

									<h5 class="main_question"><strong></strong>Please Fill With Your Details To Generate Customized Report</h5>

									<div class="form-group">

										<input type="text" name="full_name" id="full_name"class="form-control required" placeholder="Full Name" required>

									</div>

                  <div class="form-row">



                    <div class="col-md-3">

                      <div class="form-group">

                        <select class="form-control required" name="State" id="countryCode" onchange="countryCodeChanges();" required>

                          <option value="" disabled>Country</option>

                          <!-- <option value="+91">India: +91</option>

                          <option value="+93">Afghanistan: +93</option>

                          <option value="+355">Albania: +355</option>

                          <option value="+213">Algeria: +213</option>

                          <option value="+1684">American Samoa: +1684</option>

                          <option value="+376">Andorra: +376</option>

                          <option value="+254">Kenya: +254</option> -->

                        </select>

                      </div>

                    </div>

                    <div class="col-md-9">

                      <div class="form-group has-error">

                        <!-- onblur="genearteOTP();" -->

                        <input type="tel" name="mobile_no1" id="phonefield0" minlength="10" maxlength="25"  class="form-control required"  placeholder="Mobile Number" required onblur="Verifymobile();">

                        <input type="hidden" name="mobile_no" id="phonefield1" minlength="10" maxlength="25"  class="form-control required"  placeholder="Mobile Number">

                      </div>

                    </div>



                  </div>

									<div class="form-group">

										<input type="email" name="email"  id="email" class="form-control required"  placeholder="Your Email" required>

									</div>

									<div class="form-group">

										<input type="text" name="company_name"  id="company_name"class="form-control required" placeholder="Company Name" required>

									</div>

									<div class="form-group">

										<textarea name="complete_address"  id="address" rows="3" cols="54" class="form-control required" placeholder="Complete Address" required></textarea>

									</div>

                  <div class="styled clearfix form-group">

                    <select class="form-control required" id="country" onchange="SelectCountry(this.value);" required>

                      <!-- <option value="india">India</option>

                      <option value="others">Others</option> -->

                    </select>

                  </div>

                  <div class="styled clearfix form-group">

                    <select class="form-control" name="State" id="state" required>

                      <option value="">Choose State</option>

                      <option >Andaman_Island</option>

                      <option >Andhra_Pradesh</option>

                      <option >Assam</option>

                      <option >Bihar</option>

                      <option >Chhattisgarh</option>

                      <option >Delhi</option>

                      <option >Gujarat</option>

                      <option >Haryana</option>

                      <option >Himachal_Pradesh</option>

                      <option >Jammu_and_Kashmir</option>

                      <option >Jharkhand</option>

                      <option >Karnataka</option>

                      <option >Kerala</option>

                      <option >Lakshadweep</option>

                      <option >Madhya_Pradesh</option>

                      <option >Maharashtra</option>

                      <option >Manipur</option>

                      <option >Meghalaya</option>

                      <option >Nagaland</option>

                      <option >Nepal</option>

                      <option >Nicobar</option>

                      <option >Orissa</option>

                      <option >Punjab</option>

                      <option >Rajasthan</option>

                      <option >Tamil_Nadu</option>

                      <option >Telangana</option>

                      <option >Uttar_Pradesh</option>

                      <option >Uttarakhand</option>

                      <option >West_Bengal</option>

                    </select>

                  </div>

									<div class="form-group terms">

                  <label class="checkbox-inline">

                    <input type="checkbox" value="" id="TandC" onclick="TermsAndConditions()">Please accept our <a href="#" data-toggle="modal" data-target="#exampleModalLong"><u style="color: blue">Terms and conditions.<u></a>

                  </label>

										<!-- <label class="container_check">Please accept our <a href="#" data-toggle="modal" data-target="#terms-txt">Terms and conditions</a>

											<input type="checkbox" name="terms" value="Yes" class="required" id="TandC" required onclick="TermsAndConditions('Yes')">

											<span class="checkmark" onclick="TermsAndConditions('No')"></span>

										</label> -->

									</div>

									<button type="submit"  id="submita1" class="fsubmit float-right" style="display:block"  onclick='Registration();'>Register&nbsp;&nbsp;&nbsp;<div class="loader" id="regLoader" style="display: none"></div></button>

									<button type="button"  class="fsubmit float-left" onclick='Login()'>Login</div></button>

                  <!-- <button type="button"  class="fsubmit float-left" onclick='Registration();'>Check</div></button> -->

								</div>

							</div>

            </form>

            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">



              <div class="modal-dialog" role="document">

                <div class="modal-content">

                  <div class="modal-header">

                    <h5 class="modal-title" id="exampleModalLongTitle">Terms and Conditions</h5>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">

                      <span aria-hidden="true">&times;</span>

                    </button>

                  </div>

                  <div class="modal-body text-justify" style="color: black;">

                    The Intellectual Property disclosure will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.

                    A Termination clause will inform that users' accounts on your website and mobile app or users' access to your website and mobile (if users can't have an account with you) can be terminated in case of abuses or at your sole discretion.

                    A Governing Law will inform users which laws govern the agreement. This should the country in which your company is headquartered or the country from which you operate your website and mobile app.

                    A Links To Other Web Sites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.

                    If your website or mobile app allows users to create content and make that content public to other users, a Content section will inform users that they own the rights to the content they have created. The "Content" clause usually mentions that users must give you (the website or mobile app developer) a license so that you can share this content on your website/mobile app and to make it available to other users.



                    Because the content created by users is public to other users, a DMCA notice clause (or Copyright Infringement ) section is helpful to inform users and copyright authors that, if any content is found to be a copyright infringement, you will respond to any DMCA takedown notices received and you will take down the content.



                    A Limit What Users Can Do clause can inform users that by agreeing to use your service, they're also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreements so as to encompass the most amount of negative uses.

                    The Intellectual Property disclosure will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.

                    A Termination clause will inform that users' accounts on your website and mobile app or users' access to your website and mobile (if users can't have an account with you) can be terminated in case of abuses or at your sole discretion.

                    A Governing Law will inform users which laws govern the agreement. This should the country in which your company is headquartered or the country from which you operate your website and mobile app.

                    A Links To Other Web Sites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.

                    If your website or mobile app allows users to create content and make that content public to other users, a Content section will inform users that they own the rights to the content they have created. The "Content" clause usually mentions that users must give you (the website or mobile app developer) a license so that you can share this content on your website/mobile app and to make it available to other users.



                    Because the content created by users is public to other users, a DMCA notice clause (or Copyright Infringement ) section is helpful to inform users and copyright authors that, if any content is found to be a copyright infringement, you will respond to any DMCA takedown notices received and you will take down the content.



                    A Limit What Users Can Do clause can inform users that by agreeing to use your service, they're also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreements so as to encompass the most amount of negative uses.

                    The Intellectual Property disclosure will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.

                    A Termination clause will inform that users' accounts on your website and mobile app or users' access to your website and mobile (if users can't have an account with you) can be terminated in case of abuses or at your sole discretion.

                    A Governing Law will inform users which laws govern the agreement. This should the country in which your company is headquartered or the country from which you operate your website and mobile app.

                    A Links To Other Web Sites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.

                    If your website or mobile app allows users to create content and make that content public to other users, a Content section will inform users that they own the rights to the content they have created. The "Content" clause usually mentions that users must give you (the website or mobile app developer) a license so that you can share this content on your website/mobile app and to make it available to other users.



                    Because the content created by users is public to other users, a DMCA notice clause (or Copyright Infringement ) section is helpful to inform users and copyright authors that, if any content is found to be a copyright infringement, you will respond to any DMCA takedown notices received and you will take down the content.



                    A Limit What Users Can Do clause can inform users that by agreeing to use your service, they're also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreements so as to encompass the most amount of negative uses.

                  </div>

                  <div class="modal-footer">

                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    <!-- <button type="button" class="btn btn-primary">Save changes</button> -->

                  </div>

                </div>

              </div>



            </div>

					</div>

					<!-- /Wizard container -->

				</div>

				<!-- /content-right-->

			</div>

			<!-- /row-->

		</div>

	</body>

</html>

