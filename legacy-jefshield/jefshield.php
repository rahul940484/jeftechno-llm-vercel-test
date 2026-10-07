<!DOCTYPE html>

<html lang="en">



<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">



  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">



  <title>JEF SHIELD | Lightning Protection Risk Assessment Tool </title>

  <meta name="description" content="We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305">

  <meta name="abstract" content="We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305">

  <meta name="keywords" content="lightning protection risk assessment, jef shield lightning protection, jef shield, risk assessment, risk assessment tool, risk assessment software, jef shield lightning protection">

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
    #imgb {
      width: 100%;

      height: 100%;

      background-image: url('images/light.jpg');

      background-size: cover;

      overflow: hidden;

    }



    #otherc,
    #roof_type,
    #equipment_needed,
    #otheri,
    #hazardinput {

      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

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



  <!-- MODERNIZR MENU -->

  <script src="jefn/js/modernizr.js"></script>

  <script src="jefn/js/statecity.js"></script>

  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>



  <script>
    $(document).ready(function() {

      let formData = {};

      $('input[type="radio"]').click(function() {

        var inputValue = $(this).attr("value");

        if (inputValue === "Report1") {

          $("#nexta3").hide();

          $("#form4").hide();

          $("#form5").hide();

          $('#submita1').show();

        } else if (inputValue === "Report2") {

          $("#submita1").hide();

          $('#nexta3').show();

          $('#submita2').show();

        }

      });



      $("#roof_type").change(function() {



        var rtype = $('#roof_type').find(':selected').text();

        if (rtype === "RCC Roof") {

          $("#equipment_needed").prepend($("<option value='rccq' selected='selected'>Water Proof Membrane in terrace roof?</option>"));

          $("#equipment_needed option[value='metalq']").remove();

        } else if (rtype === "Metalic Roof") {

          $("#equipment_needed").prepend($("<option value='metalq' selected='selected'>Metallic roof of seam type? (punchering not allowed)</option>"));

          $("#equipment_needed option[value='rccq']").remove();

        }

      });



      //   $("#conductor_routing").change(function() {



      //   var stype = $('#conductor_routing').find(':selected').text() ;

      //   if(stype === "Structural column" || stype === "Precast Column") {

      //   $("#down_conductor_material").prepend($("<option value='strpre' selected='selected'>MS conductor & Cu.coated steel Conductor </option>"));

      //   $("#down_conductor_material option[value='ntrl']").remove();

      //   // $("#down_conductor_material").prepend($("<option value='strpre' selected='selected'>Cu.coated steel Conductor</option>"));

      //   // $("#down_conductor_material option[value='extrnl']").remove();

      //   }

      //   else if(stype === "External" ) {

      //       $("#down_conductor_material").prepend($("<option value='extrnl' selected='selected'>Aluminium & Cu.coated steel Conductor</option>"));

      //       $("#down_conductor_material option[value='strpre']").remove();

      //       // $("#down_conductor_material").prepend($("<option value='extrnl' selected='selected'>Cu.coated steel Conductor</option>"));

      //       // $("#down_conductor_material option[value='strpre']").remove();

      //   }

      // else if(stype === "Natural Down Conductor" )

      //       $("#down_conductor_material").prepend($("<option value='ntrl' selected='selected'>I-beam or Rebar</option>"));

      //       $("#down_conductor_material option[value='extrnl']").remove();

      // });









    });
  </script>

  <script>
    var SliderData = [{

        Form: [

          {

            image: "jefn/png/1.png",

            header: "WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE? ",

            text: "We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes."

          },

          {

            image: "jefn/png/2.png",

            header: "IS THERE COST INVOLVED TO GENERATE REPORT?  ",

            text: "The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited."

          },

          {

            image: "jefn/png/3.png",

            header: "HOW CAN I USE THE OUTPUT FROM THIS SOFTWARE?",

            text: "You will be able to generate all the required reports in pdf format which can be downloaded to your local machine."

          }

        ]
      }, {

        Form: [

          {

            image: "jefn/png/1.png",

            header: "WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE? ",

            text: "We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes."

          },

          {

            image: "jefn/png/2.png",

            header: "IS THERE COST INVOLVED TO GENERATE REPORT?  ",

            text: "The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited."

          },

          {

            image: "jefn/png/3.png",

            header: "HOW CAN I USE THE OUTPUT FROM THIS SOFTWARE?",

            text: "You will be able to generate all the required reports in pdf format which can be downloaded to your local machine."

          }

        ]
      }, {

        Form: [

          {

            image: "jefn/png/1.png",

            header: "WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE? ",

            text: "We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes."

          },

          {

            image: "jefn/png/2.png",

            header: "IS THERE COST INVOLVED TO GENERATE REPORT?  ",

            text: "The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited."

          },

          {

            image: "jefn/png/3.png",

            header: "HOW CAN I USE THE OUTPUT FROM THIS SOFTWARE?",

            text: "You will be able to generate all the required reports in pdf format which can be downloaded to your local machine."

          }

        ]
      }, {

        Form: [

          {

            image: "jefn/png/1.png",

            header: "WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE? ",

            text: "We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes."

          },

          {

            image: "jefn/png/2.png",

            header: "IS THERE COST INVOLVED TO GENERATE REPORT?  ",

            text: "The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited."

          },

          {

            image: "jefn/png/3.png",

            header: "HOW CAN I USE THE OUTPUT FROM THIS SOFTWARE?",

            text: "You will be able to generate all the required reports in pdf format which can be downloaded to your local machine."

          }

        ]
      }, {

        Form: [

          {

            image: "jefn/png/1.png",

            header: "WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE? ",

            text: "We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes."

          },

          {

            image: "jefn/png/2.png",

            header: "IS THERE COST INVOLVED TO GENERATE REPORT?  ",

            text: "The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited."

          },

          {

            image: "jefn/png/3.png",

            header: "HOW CAN I USE THE OUTPUT FROM THIS SOFTWARE?",

            text: "You will be able to generate all the required reports in pdf format which can be downloaded to your local machine."

          }

        ]
      }, {

        Form: [

          {

            image: "jefn/png/1.png",

            header: "WHAT IS THE LIGHTNING PROTECTION RISK ASSESSMENT SOFTWARE? ",

            text: "We are pleased to announce the launch of our JEF SHIELD, an upgraded software for Lightning Protection risk assessment as per IEC 62305. You can determine whether the structure is safe against lightning strikes. If protection is required, the software guides you to select the appropriate protection and optimize the same. This is done by determining the extent of risk to the structure and comparing with the tolerable values. Once the optimized design (level of protection) is arrived at, the software helps you generate a BOQ and also arrive at an estimated cost for your tendering/budgetary purposes."

          },

          {

            image: "jefn/png/2.png",

            header: "IS THERE COST INVOLVED TO GENERATE REPORT?  ",

            text: "The usage of this software is free of cost for all consultants. However, the right of use will be strictly at the discretion of JEF Techno Solutions Private Limited."

          },

          {

            image: "jefn/png/3.png",

            header: "HOW CAN I USE THE OUTPUT FROM THIS SOFTWARE?",

            text: "You will be able to generate all the required reports in pdf format which can be downloaded to your local machine."

          }

        ]
      }

    ]

    var LocalData;

    $(document).ready(function() {

      $("#topjefbf").click(function() {

        $("#topjef").hide();

      });

      $("#prev1").click(function() {

        $("#topjef").show();

      });

      let FileData = {
        fileSrc: "",
        filename: ""
      };

      localStorage.setItem("DwgFileInfo", JSON.stringify(FileData));

      LocalData = JSON.parse(localStorage.getItem("MobileNumber"));

      if (LocalData == null || LocalData == undefined) {

        window.location.href = "login.php";

      } else {

        GetListCountries();

        Load_air_terminal_materials();

        // document.getElementById("Country_India").style.display="none"

        document.getElementById("Country_not_India").style.display = "none"

      }

      $('[data-toggle="tooltip"]').tooltip();

      document.getElementById("slider_image1").src = SliderData[0].Form[0].image;

      document.getElementById("slider_header1").innerHTML = SliderData[0].Form[0].header;

      document.getElementById("slider_text1").innerHTML = SliderData[0].Form[0].text;

      document.getElementById("slider_image2").src = SliderData[0].Form[1].image;

      document.getElementById("slider_header2").innerHTML = SliderData[0].Form[1].header;

      document.getElementById("slider_text2").innerHTML = SliderData[0].Form[1].text;

      document.getElementById("slider_image3").src = SliderData[0].Form[2].image;

      document.getElementById("slider_header3").innerHTML = SliderData[0].Form[2].header;

      document.getElementById("slider_text3").innerHTML = SliderData[0].Form[2].text;

    });



    function dynamicContent(index) {

      document.getElementById("slider_image1").src = SliderData[index].Form[0].image;

      document.getElementById("slider_header1").innerHTML = SliderData[index].Form[0].header;

      document.getElementById("slider_text1").innerHTML = SliderData[index].Form[0].text;

      document.getElementById("slider_image2").src = SliderData[index].Form[1].image;

      document.getElementById("slider_header2").innerHTML = SliderData[index].Form[1].header;

      document.getElementById("slider_text2").innerHTML = SliderData[index].Form[1].text;

      document.getElementById("slider_image3").src = SliderData[index].Form[2].image;

      document.getElementById("slider_header3").innerHTML = SliderData[index].Form[2].header;

      document.getElementById("slider_text3").innerHTML = SliderData[index].Form[2].text;

    }
  </script>

  <script>
    // function checkOption(obj) {

    //   var input1 = document.getElementsByName("max_height_terrace");

    //   var input2 = document.getElementsByName("number_of_equipment");

    //   var input3 = document.getElementsByName("equipment_filled");

    //   for(var i=0; i < input1.length; i++) {

    //   input1[i].disabled = !(obj.value == "Yes")

    //   }

    //   for(var i=0; i < input2.length; i++) {

    //   input2[i].disabled = !(obj.value == "Yes")

    //   }

    //   for(var i=0; i < input3.length; i++) {

    //   input3[i].disabled = !(obj.value == "Yes")

    //   }

    // }

    function numberdisable() {

      document.getElementById("phonefield0").disabled = false;

    }



    // function verifyEmailee(){

    //     var status = false;     

    //      if (document.myform.email.value != "info@jeftechno.com") {

    //               alert("Thank you so much for your interest in generating your Risk Assessment Report. \nAuthentication is required in order to get an access to the forms.\n \nPlease do feel free to write us an email at info@jeftechno.com \n\nOur team will get in touch with you shortly.");

    //               location.replace("https://www.jeftechno.com/jef-shield.php")

    //          }

    //          else if(document.myform.email.value == "info@jeftechno.com"){          

    //               status = true;

    //          }

    //          return status;

    //     }
  </script>

  <script src="js/dynamic_dropdowns.js"></script>

</head>

<body>

  <script>
    function formOneSubmit() {

      var type_of_floor = document.getElementById("type_of_floor").value;

      var risk_of_fire = document.getElementById("risk_of_fire").value;

      var fire_protection = document.getElementById("fire_protection").value;

      var special_consideration = document.getElementById("special_consideration").value;

      var hazardlist = document.getElementById("hazardlist").value;

      var total_person = document.getElementById("total_person").value;

      var function_per_hour = document.getElementById("function_per_hour").value;

      var function_per_day = document.getElementById("function_per_day").value;

      if (type_of_floor != "" && risk_of_fire != "" && fire_protection != "" && special_consideration != "" && hazardlist != "" && total_person != "" && function_per_hour != "" && function_per_day != "") {

        document.getElementById("wrapped").submit();

      }

    }

    var Country = "India";

    function CountryChanges(value) {

      Load_air_terminal_materials();

      Country = value;

      if (value == "India") {

        document.getElementById("Country_India").style.display = "block"

        document.getElementById("Country_not_India").style.display = "none"

      } else {

        document.getElementById("Country_not_India").style.display = "block"

        document.getElementById("Country_India").style.display = "none"

      }

    }



    function CheckCountryValidation() {

      var City = document.getElementById("selectCity");

      var State = document.getElementById("stateSelect");

      var Th_Days = document.getElementById("thunderstorm_days");

      var Location = document.getElementById("location");

      var Validation = document.getElementById("building_length");

      if (Country == "India") {

        if (State.value == "") {

          State.focus();

          Validation.value = "";

        } else if (City.value == "") {

          City.focus();

          Validation.value = "";

        }

      } else {

        if (Location.value == "") {

          Location.focus();

          Validation.value = "";

        } else if (Th_Days.value == "") {

          Th_Days.focus();

          Validation.value = "";

        }

      }

    }



    function EquipmentNeeded(value) {

      if (value == "Yes") {

        $("#max_height_terrace").prop("disabled", false);

        $("#number_of_equipment").prop("disabled", false);

        $("#equipment_filled").prop("disabled", false);



        $("#max_height_terrace").prop("required", true);

        $("#number_of_equipment").prop("required", true);

        $("#equipment_filled").prop("required", true);

      } else {

        $("#max_height_terrace").prop("required", false);

        $("#number_of_equipment").prop("required", false);

        $("#equipment_filled").prop("required", false);



        $("#max_height_terrace").prop("disabled", true);

        $("#number_of_equipment").prop("disabled", true);

        $("#equipment_filled").prop("disabled", true);

      }

    }
  </script>

  <!-- <div id="preloader">

		<div data-loader="circle-side"></div>

	</div>/Preload -->

  <div id="loader_form">

    <div data-loader="circle-side-2"></div>

  </div><!-- /loader_form -->

  <div class="container-fluid full-height">

    <div class="row row-height">

      <div class="col-lg-6 content-left" id="imgb">

        <div class="content-left-wrapper">

          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">



            <div class="carousel-inner">

              <div class="carousel-item active">

                <figure><img src="" id="slider_image1" alt="" class="img-fluid" height="150" width="150"></figure>

                <h4 style="color:white;" id="slider_header1"></h4>

                <p id="slider_text1"></p>

              </div>

              <div class="carousel-item">

                <figure><img src="" id="slider_image2" alt="" class="img-fluid" height="150" width="150"></figure>

                <h4 style="color:white;" id="slider_header2"></h4>

                <p id="slider_text2">
                  <br<br><br>
                </p>
                <br<br><br>

              </div>

              <div class="carousel-item">

                <figure><img src="" id="slider_image3" alt="" class="img-fluid" height="150" width="150"></figure>

                <h4 style="color:white;" id="slider_header3"></h4>

                <p id="slider_text3"></p>

              </div>

            </div><br>
            <br<br><br>

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

            <!-- | Designed by

              <a href="http://www.coltfox.com" style="color:#fff" target="_blank">

                 <img src="images/coltfox-ico.png" style="width: 20px; margin-bottom: -5px; margin-left: 5px;" />

               </a> -->

          </div>

        </div>

        <!-- /content-left-wrapper -->

      </div>

      <!-- /content-left -->



      <div class="col-lg-6 content-right" id="start">

        <div id="wizard_container">

          <div id="top-wizard"><br><br><br><br><br><br><br><br><br><br><br>

            <div id="topjef">

              <h4 style="color:#3333ff;"><b>JEF SHIELD</b></h4>

              <p>Our customer centric Lightning Protection Risk Assessment Tool wont leave you alone.This user friendly software helps you carry out complete risk assessment with a few simple clicks. </p>

            </div>

            <div id="progressbar"></div>

          </div>

          <!-- /top-wizard -->

          <form id="wrapped" method="POST" name="myform" action="survey">

            <input id="website" name="website" type="text" value="">

            <!-- Leave for security protection, read docs for details -->

            <div id="middle-wizard">

              <div class="step">

                <h3 class="main_question"><strong></strong>Please Select The Report You Would Like To Generate?</h3>

                <div class="form-group">

                  <label class="container_radio version_2">RISK ASSESSEMENT REPORT

                    <input type="radio" class="required" id="report1" name="radio" value="Report1">

                    <span class="checkmark"></span>

                  </label>

                </div>

                <div class="form-group">

                  <label class="container_radio version_2">RISK ASSESSEMENT REPORT & BILL OF MATERIALS

                    <input type="radio" class="required" id="report2" name="radio" value="Report2">

                    <span class="checkmark"></span>

                  </label>

                </div>

                <br><br><br><br><br><br>

                <button type="button" name="forward" class="forward float-right" onclick="dynamicContent('1')">Next</button>

                <button type="button" name="backward" id="prev1" class="backward float-right">Prev</button>

              </div>



              <!------------------------------------------- /step---------------form-A------------------------------>



              <!----------------------------------------- form A1 --------------------------------------------------->

              <div class="step">

                <h3 class="main_question">FORM 1</h3>

                <div class="form-group">

                  <input type="text" name="project_name" id="project_name" class="form-control required" placeholder="Project Name" data-toggle="tooltip" data-placement="top" title="Provide the Name of the Building or the Project">

                </div>

                <div class="form-group">

                  <input type="text" name="client_name" class="form-control required" placeholder="Client Name">

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select class="form-control required" name="countrySelect" id="CountryDropDown" onchange="CountryChanges(this.value);">

                      <option value="">Select Country</option>

                    </select>

                  </div>

                </div>

                <div id="Country_India">

                  <div class="form-group">

                    <div class="styled-select clearfix">

                      <select class="form-control" name="stateSelect" id="stateSelect" onchange="makeSubmenu(this.value)" data-toggle="tooltip" data-placement="top" title="Which state does this project belong to?">

                        <option value="">Select State</option>

                        <option>Andaman_Island</option>

                        <option>Andhra_Pradesh</option>

                        <option>Assam</option>

                        <option>Bihar</option>

                        <option>Chhattisgarh</option>

                        <option>Delhi</option>

                        <option>Gujarat</option>

                        <option>Haryana</option>

                        <option>Himachal_Pradesh</option>

                        <option>Jammu_and_Kashmir</option>

                        <option>Jharkhand</option>

                        <option>Karnataka</option>

                        <option>Kerala</option>

                        <option>Lakshadweep</option>

                        <option>Madhya_Pradesh</option>

                        <option>Maharashtra</option>

                        <option>Manipur</option>

                        <option>Meghalaya</option>

                        <option>Nagaland</option>

                        <option>Nepal</option>

                        <option>Nicobar</option>

                        <option>Orissa</option>

                        <option>Punjab</option>

                        <option>Rajasthan</option>

                        <option>Tamil_Nadu</option>

                        <option>Telangana</option>

                        <option>Uttar_Pradesh</option>

                        <option>Uttarakhand</option>

                        <option>West_Bengal</option>

                      </select>

                    </div>

                  </div>

                  <div class="form-group">

                    <div class="styled-select clearfix">

                      <select class="form-control" id="selectCity" name="selectedCity" data-toggle="tooltip" data-placement="top" title="Which city does this project belong to?">

                        <option value="">Select City</option>

                      </select>

                    </div>

                  </div>

                </div>

                <div id="Country_not_India">

                  <div class="form-group">

                    <input type="text" name="location" id="location" class="form-control" placeholder="Location">

                  </div>

                  <div class="form-group">

                    <input type="number" name="thunderstorm_days" id="thunderstorm_days" min="1" max="200" class="form-control" placeholder="Thunderstrom Days">

                    <a href="https://maptitude1.tumblr.com/image/134615731756" target="_balnk" style="float:right">ISOKERAUNIC MAP</a>

                  </div>

                </div>

                <div class="form-group">

                  <input type="number" class="form-control required" min="1" name="building_length" id="building_length" placeholder="Building length (Meters)" onblur="CheckCountryValidation();" data-toggle="tooltip" data-placement="top" title="Provide the length of the building in Meters.">

                </div>

                <div class="form-group">

                  <input type="number" class="form-control required" min="1" name="building_width" id="building_width" placeholder="Building width (Meters)" data-toggle="tooltip" data-placement="top" title="Provide the breadth of the building in Meters.">

                </div>

                <div class="form-group">

                  <input type="number" class="form-control required" min="1" name="building_height" id="building_height" placeholder="Building height (Meters)" data-toggle="tooltip" data-placement="top" title="Provide the height of the building from grond level to the top most level in meters">

                </div>

                <div class="form-group">

                  <input type="number" class="form-control required" min="1" name="number_of_floor" id="number_of_floor" placeholder="Number of floor" data-toggle="tooltip" data-placement="top" title="Provide the total number of floors the building have">

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select class="form-control required" name="location_factor" id="location_factor" data-toggle="tooltip" data-placement="top" title="Select on of the given options pertaining to the building.">

                      <option value="">Select Location Factor:</option>

                      <option>Structure surrounded by higher objects</option>

                      <option>Structure surrounded by objects of the same height or smaller</option>

                      <option>Isolated structure: no other objects in the vicinity </option>

                      <option>Isolated structure on a hilltop or a knoll </option>

                    </select>

                  </div>

                </div>

                <button type="button" name="backward" id="preva2" class="backward" onclick="dynamicContent('0')">Prev</button>

                <button type="button" name="forward" id="nexta1" class="forward" onclick="dynamicContent('2')">Next</button>

              </div>



              <!------------------------------------------------------/step------form--A-------------------------------------------->



              <!------------------------------------------------------ form A--2 ---------------------------------------------------->





              <div class="step">

                <div id="progressbar"></div>

                <h3 class="main_question">FORM 2</h3>

                <div class="form-group">

                  <input type="number" min="1" class="form-control required" name="length_of_powerline" id="length_of_powerline" placeholder="Length of the power line (Meters)" data-toggle="tooltip" data-placement="top" title="What is the length of the power line from transformer to the building? (use 1000m if data not available)">

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="installation_factor1" class="form-control required" id="installation_factor1" data-toggle="tooltip" data-placement="top" title="What is the nature of installation of the power line? Buried or Arial?">

                      <option value="">Installation Factor</option>

                      <option>Aerial</option>

                      <option>Buried </option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="line_type_factor" class="form-control required" id="line_type_factor" data-toggle="tooltip" data-placement="top" title="Select LV Line . If it is an HV/LV line select HV.">

                      <option value="">Line Type Factor</option>

                      <option>LV Line</option>

                      <option>HV power (with HV/LV transformer)</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="environmental_factor" class="form-control required" id="environmental_factor" data-toggle="tooltip" data-placement="top" title="Select one of the given options pertaining to the building.">

                      <option value="">Environmental Factor Type</option>

                      <option>Rural</option>

                      <option>Suburban</option>

                      <option>Urban</option>

                      <option>Urban with tall Buildings higher than 20 m.</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="shield_of_line1" class="form-control required" id="shield_of_line1" data-toggle="tooltip" data-placement="top" title="Select one of the given options pertaining to the shielding of the line.">

                      <option value="">Shield of the cable?</option>

                      <option>Armoured</option>

                      <option>Unarmoured</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="impulse_voltage1" class="form-control required" id="impulse_voltage1" data-toggle="tooltip" data-placement="top" title="Select from the given options, the impulse withstand voltage of power protective equipment">

                      <option value="">Impulse Withstand Voltage of Equipment</option>

                      <option>No Equipment</option>

                      <option>1kV</option>

                      <option>1.5kV</option>

                      <option>2.5kV</option>

                      <option>4kV</option>

                      <option>6kV</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <input name="length_telecom_line" type="number" min="1" class="form-control required" id="length_telecom_line" placeholder="Length of the Telecom line (Meters)" data-toggle="tooltip" data-placement="top" title="What is the length of telecom line in meters? (use 1000m if data not available). Ignore the optical fibre cables.">

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="shielding_isolation1" class="form-control required" id="shielding_isolation1" data-toggle="tooltip" data-placement="top" title="What is the nature of installation of the telecom line? Buried or Arial?">

                      <option selected="selected" value="">Installation type of communication line?</option>

                      <option>Aerial</option>

                      <option>Buried</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="shield_of_line" class="form-control required" id="shield_of_line" data-toggle="tooltip" data-placement="top" title="Select one of the given options pertaining to the shielding of the line.">

                      <option value="">Shield of the Cable?</option>

                      <option>Shielded</option>

                      <option>Unshielded</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="impulse_voltage" class="form-control required" id="impulse_voltage" data-toggle="tooltip" data-placement="top" title="Select from the given options, the impulse withstand voltage of communication equipment">

                      <option value="">Impulse Withstand Voltage of Equipment</option>

                      <option>No Equipment</option>

                      <option>1kV</option>

                      <option>1.5kV</option>

                      <option>2.5kV</option>

                      <option>4kV</option>

                      <option>6kV</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="shielding_isolation" class="form-control required" id="shielding_isolation" data-toggle="tooltip" data-placement="top" title="If all the earthing systems are intercinnected and are at equipotential, Select YES otherwise Select NO.">

                      <option value="">Select Equipotential bonding?</option>

                      <option>Yes</option>

                      <option>No</option>

                    </select>

                  </div>

                </div>

                <button type="button" name="backward" class="backward" onclick="dynamicContent('1')">Prev</button>

                <button type="button" name="forward" id="nexta2" class="forward" onclick="dynamicContent('3')">Next</button>

              </div>







              <!------------------------------------------------------/step------form--A-------------------------------------------->



              <!------------------------------------------------------ form A--3 ---------------------------------------------------->











              <div class="submit step">

                <h3 class="main_question">FORM 3</h3>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="type_of_floor" class="form-control required" id="type_of_floor" data-toggle="tooltip" data-placement="top" title="Pls select the lower most type of floor eg. last basement or Ground floor level if it is last">

                      <option selected="selected" value="">Type of floor:</option>

                      <option>Concrete</option>

                      <option>Marble</option>

                      <option>Ceramic</option>

                      <option>Gravel</option>

                      <option>Moquette</option>

                      <option>Carpets</option>

                      <option>Asphalt</option>

                      <option>Linoleum</option>

                      <option>Wood</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="risk_of_fire" class="form-control required" id="risk_of_fire" data-toggle="tooltip" data-placement="top" title="Select the Fire Risk pertaining to the building based on its content. If building contains highly flamable material then select High, For medium combustible material - select ordinary or low, for non availability of flamable material - select none">

                      <option selected="selected" value="">Risk of fire:</option>

                      <option>None</option>

                      <option>High</option>

                      <option>Low</option>

                      <option>Ordinary</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="fire_protection" class="form-control required" id="fire_protection" data-toggle="tooltip" data-placement="top" title="Select from the options the type of fire protection installed in the building">

                      <option selected="selected" value="">Fire protection:</option>

                      <option>No provisions</option>

                      <option>Manual</option>

                      <option>Automatic</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="special_consideration" class="form-control required" id="special_consideration" data-toggle="tooltip" data-placement="top" title="Select from the options if there is any special consideration for this building">

                      <option selected="selected" value="">Special Consideration:</option>

                      <option>None</option>

                      <option>Where the area is one in which lightning strokes are prevalent.</option>

                      <option>Where large numbers of people congregate,such as, sports, cultural, assembly buildings.</option>

                      <option>Where there are very tall, complex or isolated structures.</option>

                      <option>where there are structures of historic or cultural importance.</option>

                      <option>Structures with inherent explosive risks; for example, explosives factories, stores and dumps and fuel tanks.</option>

                      <option>Where essential public services are concerned as lightning may lead to power outages and unplanned interruptions of production processes.</option>

                      <option>Where there is wide use of electrical and electronic equipment/ components that are sensitive to the effects of lightning.</option>

                    </select>

                  </div>

                </div>



                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select name="hazardlist" class="form-control required" id="hazardlist" data-toggle="tooltip" data-placement="top" title="Select the catogery in which the building belongs to.">

                      <option selected="selected" value="">Type of Structure:</option>

                      <option>Hospital</option>

                      <option>School</option>

                      <option>Civic Building</option>

                      <option>Hotel</option>

                      <option>Public Entertainment</option>

                      <option>Church</option>

                      <option>Museum</option>

                      <option>Industrial</option>

                      <option>Commercial</option>

                      <option>Residential</option>

                      <option>Others</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <input type="number" name="total_person" class="form-control required" min="1" max="100000" maxlength="6" id="total_person" placeholder="Total No.of Persons" data-toggle="tooltip" data-placement="top" title="What is the maximum number of people that will be accomodated at a time?">

                </div>

                <div class="form-group">

                  <input type="number" name="function_per_hour" class="form-control required" min="1" max="24" maxlength="2" id="function_per_hour" placeholder="No.of Functional Hours / day in building" data-toggle="tooltip" data-placement="top" title="What is  the no. of operating hours/day">

                </div>

                <div class="form-group">

                  <input type="number" name="function_per_day" class="form-control required" min="1" max="365" maxlength="3" id="function_per_day" placeholder="No of Functional Days / Year" data-toggle="tooltip" data-placement="top" title="What is the no. of operating days/year">

                </div>

                <button type="button" name="backward" id="preva3" class="backward" onclick="dynamicContent('2')">Prev</button>

                <button type="button" name="forward" id="nexta3" class="forward" onclick="dynamicContent('4')">Next</button>

                <button type="submit" id="submita1" class="fsubmit" onclick="formOneSubmit();">Submit</button>

              </div>



              <!-- ------------------------------/step-------form--A -------------------------------------->

              <!----------------------------------- completed --------------------------------------------->







              <!------------------------------------------------------------ Started form B ---------------------------------->







              <!------------------------------------------------------------ Started form B --4-------------------------------->



              <div class="step" id="form4">

                <div id="progressbar"></div>

                <h3 class="main_question">FORM 4</h3>

                <div class="form-group">

                  <div class="clearfix">

                    <select class="form-control required" name="roof_type" id="roof_type" data-toggle="tooltip" data-placement="top" title="Select the type of roof">

                      <option selected="selected" value="">Roof type:</option>

                      <option>RCC Roof</option>

                      <option>Metalic Roof</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="clearfix">

                    <select class="form-control required" name="equipment_needed" id="equipment_needed" data-toggle="tooltip" data-placement="top" title="">

                      <option selected>Yes</option>

                      <option>No</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="clearfix">

                    <select class="form-control required" name="air_terminal_material" id="air_terminal_material" data-toggle="tooltip" data-placement="top" title="">

                      <option value="">Air Terminal Material</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select class="form-control required" name="protected_terrace" id="protected_terrace" onchange="EquipmentNeeded(this.value);" data-toggle="tooltip" data-placement="top" title="Select yes if there are equipments on the terrace. For RCC - E.g. - ODU, AHU, solar roof tops, water tanks or some elevated structures For Metallic structures- E.g. Turbo vents, Solar roof tops or any elevated structures">

                      <option value="No" selected="selected">Equipment needed to be protected in terrace:</option>

                      <option value="Yes">Yes</option>

                      <option value="No">No</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <input type="text" class="form-control" name="max_height_terrace" id="max_height_terrace" placeholder="Maximum Height of the Equipment from Terrace Floor " data-toggle="tooltip" data-placement="top" title="What is the max height of equipment from the finishef terrace floor level in meters?">

                </div>

                <div class="form-group">

                  <input type="number" class="form-control" min="1" name="number_of_equipment" id="number_of_equipment" placeholder="No of Equipments" data-toggle="tooltip" data-placement="top" title="Pls select the number of equipment on terrace floor that needs to be protected">

                </div>

                <div class="form-group">

                  <input type="text" class="form-control" name="equipment_filled" id="equipment_filled" placeholder="Percentage of Floor area occupied by the Equipment" data-toggle="tooltip" data-placement="top" title="Select the percentage of floor area of terrace covered by all the equipments in percentage">

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select class="form-control required" name="conductor_routing" id="conductor_routing" onchange="DownConductorRoutingChanges(this.value);" data-toggle="tooltip" data-placement="top" title="Select form the options how the down conductor shall be routed. Structural ( inside the column), External seperate routing, Natural sheet or precast column">

                      <option value="" selected>Down Conductor Routing:</option>

                      <option value="Structural column">Structural column</option>

                      <option value="External">External</option>

                      <option value="Natural Down Conductor">Natural Down Conductor</option>

                      <option value="Precast Column">Precast Column</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select class="form-control required" value="" name="down_conductor_material" id="down_conductor_material" data-toggle="tooltip" data-placement="top" title="If structural select MS conductor, Copper coated conductor or rebar, If External select Aluminium, If column then select I Beam">

                      <option value="">Down conductor Material:</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select class="form-control required" value="" name="earthing_system" id="earthing_system" onchange="EarthingSystemChanges(this.value);" data-toggle="tooltip" data-placement="top" title="Select the type of earthing system foundation, typeB(ring earthing) or TypeA(Individual earthing wrt down conductor)">

                      <option value="">Earthing System:</option>

                      <option>Ring Earthing (Type - B)</option>

                      <option>Foundation Mesh</option>

                      <option>Type A Earthing</option>

                    </select>

                  </div>

                </div>

                <div class="form-group">

                  <div class="styled-select clearfix">

                    <select class="form-control required" name="earthing_material" id="earthing_material" data-toggle="tooltip" data-placement="top" title="For Type B earthing pls select the type of earthing material">

                      <option value="">Earthing Material</option>

                    </select>

                  </div>

                </div>

                <button type="button" name="backward" class="backward" onclick="dynamicContent('3')">Prev</button>

                <button type="button" name="forward" id="nexta4" class="forward" onclick="dynamicContent('5')">Next</button>

              </div>



              <div class="submit step" id="form5">

                <div id="progressbar"></div>

                <h3 class="main_question">FORM 5</h3>



                <div class="form-row">

                  <div class="col-md-6 mb-6">

                    <h5>Description</h5>

                  </div>

                  <div class="col-md-3 mb-3">

                    <h5>3 Phase</h5>

                  </div>

                  <div class="col-md-3 mb-3">

                    <h5>1 Phase</h5>

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Main Incomer</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <!-- min="1" max="24" maxlength="4" -->

                    <input type="number" min="0" value="1" class="form-control required" name="mainIncomerPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="mainIncomerPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Sub Panels</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="subPanelsPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="subPanelsPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Floor Distribution Boards</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="floorDistributionBoardPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="floorDistributionBoardPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Lift Panel(Feeding to Lift, escalators & Moving Walks)</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="liftPanelPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="liftPanelPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Fire Fighting panel</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="fireFightingPanelPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="fireFightingPanelPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Automation Panel(Feeding to PLC & Drivers)</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="automationPanelPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="automationPanelPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Outdoor Streetlight Panel</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="outdootStreetlightPanelPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="outdootStreetlightPanelPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. Solar PV Inverter Panel</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="roofTopSolarPanelPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="roofTopSolarPanelPhase1">

                  </div>

                </div>

                <div class="form-row form-group">

                  <div class="col-md-6 mb-3">

                    <h6>No. of. UPS Panel</h6>

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="securityPanelPhase3">

                  </div>

                  <div class="col-md-3 mb-3">

                    <input type="number" min="0" class="form-control" name="securityPanelPhase1">

                  </div>

                </div>



                <button type="button" name="backward" class="backward" onclick="dynamicContent('4')">Prev</button>

                <button type="submit" name="process" id="submita2" class="fsubmit">Submit</button>

              </div>

              <!------------------------------------------------------------ Ending form B ---------------------------------->

            </div>

            <!-- /middle-wizard -->

            <div id="bottom-wizard">



            </div>

            <!-- /bottom-wizard -->

          </form>

        </div>

        <!-- /Wizard container -->

      </div>

      <!-- /content-right-->

    </div>

    <!-- /row-->

  </div>

  <!-- /container-fluid -->

  <div class="cd-overlay-nav">

    <span></span>

  </div>

  <!-- /cd-overlay-nav -->

  <div class="cd-overlay-content">

    <span></span>

  </div>

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