<?php include 'header.php';?>
<script type="text/javascript" src="vendor/jquery/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<!-- <script src="js/buildingmanagement.js"></script> -->
<script src="js/buildingmanagement2.js"></script>
<script src="jefn/js/statecity_onedit.js"></script>
<script src="js/dynamic_dropdowns.js"></script>
<script type="text/javascript" >
    var LocalData;
    $(document).ready(function() {
        console.log("In Buildings Detail page.........");
        // localStorage.removeItem("DwgFileInfo");
        LocalData = JSON.parse(localStorage.getItem("MobileNumber"));
        if(LocalData == null || LocalData == undefined){
            window.location.href="login.php";
        }else{
            var hashValue = location.hash.substr(1);
            var Data = {
                mobile: LocalData.mobileNumber,
                buildingId: hashValue
            }
            GetListCountries();
            getDetailBuildings(Data);

        }        
    });  

    function SaveData(){
        let SaveBtn = document.getElementById("SaveButton");
        let UpdateActivityBtn = document.getElementById("UpdateProgressButton");
        if(SaveBtn !== null && UpdateActivityBtn !== null){
            SaveBtn.style.display="none";
            UpdateActivityBtn.style.display="block";
        }
        SaveDetailBuildings();
    }

    // $(document).ready(function() {
    //     console.log("In Buildings Management page.........");
    //     LocalData = JSON.parse(localStorage.getItem("MobileNumber"));
    //     if(LocalData == null || LocalData == undefined){
    //         window.location.href="logindesign.php";
    //     }else{
    //         // var mobno = LocalData.mobileNumber;
    //         getListBuildings(LocalData.mobileNumber);
    //     }
    // });

    function CountryChanges(value){
        Load_air_terminal_materials();
        if(value == "India"){
            document.getElementById("location_div").style.display = "none";
            document.getElementById("thunderstorm_div").style.display = "none";
            document.getElementById("state_div").style.display = "block";
            document.getElementById("city_div").style.display = "block";
        }else{
            document.getElementById("location_div").style.display = "block";
            document.getElementById("thunderstorm_div").style.display = "block";
            document.getElementById("state_div").style.display = "none";
            document.getElementById("city_div").style.display = "none";
        }
    }


</script>
<script src="js/dynamic_dropdowns.js"></script>

		<div class="app-main">             
				<div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-config icon-gradient bg-mean-fruit"></i>
                                        <!-- <span class="pe-stack pe-lg">
                                            <i class="pe-7s-monitor pe-stack-2x"></i>
                                            <i class="pe-7s-graph3 pe-stack-1x"></i>
                                        </span> -->
                                    </div>
                                    <div>Building Details
                                        <div class="page-title-subheading">Buildings Information
                                        </div>
                                    </div>
                                </div>
                                <div class="page-title-actions">
                                    
                                    <div class="d-inline-block dropdown">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                                            <span class="btn-icon-wrapper pr-2 opacity-7">
                                                <i class="fa fa-business-time fa-w-20"></i>
                                            </span>
                                           Download File
                                        </button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <ul class="nav flex-column">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link" download id="pdflink">
                                                        <i class="nav-link-icon lnr-inbox"></i>
                                                        <span>
                                                            Download as PDF
                                                        </span>
                                                    </a>
                                                </li>
                                                <!-- <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">
                                                        <i class="nav-link-icon lnr-book"></i>
                                                        <span>
                                                            Download as Excel
                                                        </span>
                                                      
                                                    </a>
                                                </li> -->                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>    
								
								</div>
                        </div>
						
						<div class="main-card mb-3 card">
                            <div class="card-body">
                                <h5 class="card-title">Project Details</h5>
                                <form class="needs-validation" novalidate>
                                    <!-- Form-1 Fields -->
                                    <div class="form-row">
                                        <div class="col-md-3 mb-3">
                                            <label>ID</label>
                                            <input type="text" class="form-control" id="buildingId" placeholder="ID" value="" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label>Building Name</label>
                                            <input type="text" class="form-control" id="buildingName" placeholder="Building name" required>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label>Client Name</label>
                                            <input type="text" class="form-control" id="clientName" placeholder="lient Name" required>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label>Country</label>
                                            <select class="form-control required" name="countrySelect" id="CountryDropDown" onchange="CountryChanges(this.value);">
                                                <option value="">Select Country</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 mb-3" id="location_div">
                                            <label>Location</label>
                                            <input type="text" class="form-control" id="location" placeholder="Location" required>
                                        </div>
                                        <div class="col-md-3 mb-3" id="thunderstorm_div">
                                            <label>Thunderstorm Days</label>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://maptitude1.tumblr.com/image/134615731756" target="_balnk">ISOKERAUNIC MAP</a>
                                            <input type="number" name="thunderstorm_days" id="thunderstorm_days" min="1" max="200" class="form-control" placeholder="Thunderstrom Days">
                                        </div>
                                        <div class="col-md-3 mb-3" id="state_div">
                                            <label for="validationCustom02">State</label>
                                            <select class="form-control" id="validationCustom02" size="1"  onchange="makeSubmenu(this.value)">
                                                <option value="" disabled selected>Choose State</option>
                                                <option id="Andaman_Island">Andaman_Island</option>
                                                <option id="Andhra_Pradesh">Andhra_Pradesh</option>
                                                <option id="Assam">Assam</option>
                                                <option id="Bihar">Bihar</option>
                                                <option id="Chhattisgarh">Chhattisgarh</option>
                                                <option id="Delhi">Delhi</option>
                                                <option id="Gujarat">Gujarat</option>
                                                <option id="Haryana">Haryana</option>
                                                <option id="Himachal_Pradesh">Himachal_Pradesh</option>
                                                <option id="Jammu_and_Kashmir">Jammu_and_Kashmir</option>
                                                <option id="Jharkhand">Jharkhand</option>
                                                <option id="Karnataka">Karnataka</option>
                                                <option id="Kerala">Kerala</option>
                                                <option id="Lakshadweep">Lakshadweep</option>
                                                <option id="Madhya_Pradesh">Madhya_Pradesh</option>
                                                <option id="Maharashtra">Maharashtra</option>
                                                <option id="Manipur">Manipur</option>
                                                <option id="Meghalaya">Meghalaya</option>
                                                <option id="Nagaland">Nagaland</option>
                                                <option id="Nepal">Nepal</option>
                                                <option id="Nicobar">Nicobar</option>
                                                <option id="Orissa">Orissa</option>
                                                <option id="Punjab">Punjab</option>
                                                <option id="Rajasthan">Rajasthan</option>
                                                <option id="Tamil_Nadu">Tamil_Nadu</option>
                                                <option id="Telangana">Telangana</option>
                                                <option id="Uttar_Pradesh">Uttar_Pradesh</option>
                                                <option id="Uttarakhand">Uttarakhand</option>
                                                <option id="West_Bengal">West_Bengal</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3" id="city_div">
                                            <label for="validationCustom03">City</label>
                                            <select id="validationCustom03" name="citySelect" size="1" class="form-control">
                                                <option value="" disabled selected>Choose City</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom01">Building length</label>
                                            <input type="number" class="form-control" id="building_length" placeholder="Building Length" value="456 Sq Ft" required>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Building Width</label>
                                            <input type="number" class="form-control" id="building_width" placeholder="Building Width" value="456 Sq Ft" required>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Building Height</label>
                                            <input type="number" class="form-control" id="building_height" placeholder="Building Height" value="123 Sq Ft" required>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">No Of Floors</label>
                                            <input type="number" class="form-control" id="nooffloor" placeholder="No Of Floors" value="10" required>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom01">Location factor</label>
                                            <select class="form-control" id="locationfactor">
                                                <option value="">Select Location Factor:</option>
                                                <option id="Structure surrounded by higher objects">Structure surrounded by higher objects</option>
                                                <option id="Structure surrounded by objects of the same height or smaller">Structure surrounded by objects of the same height or smaller</option>
                                                <option id="Isolated structure: no other objects in the vicinity">Isolated structure: no other objects in the vicinity</option>
                                                <option id="Isolated structure on a hilltop or a knoll">Isolated structure on a hilltop or a knoll</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="h-divider"></div>
                                    <br/><br/><br/>
                                    <!-- Form-2 Fields -->
                                    <div class="form-row">
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Length of Powerline</label>
                                            <input type="number" class="form-control" id="lengthofpowerline" placeholder="Length of Powerline" value="456" required>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Installation Factor</label>
                                            <select id="installationfactor" class="form-control">
                                                <option value="">Installation Factor</option>
                                                <option id="Aerial">Aerial</option>
                                                <option id="Buried">Buried</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Line Type</label>
                                            <select class="form-control" id="linetype">
                                                <option value="">Line Type Factor</option>
                                                <option id="LV Line">LV Line</option>
                                                <option id="HV power (with HV/LV transformer)">HV power (with HV/LV transformer)</option>
                                            </select>
                                        </div>                                   
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom01">Environmental factor</label>
                                            <select class="form-control" id="environmentalfactor">
                                                <option value="">Environmental Factor Type</option>
                                                <option id="Rural">Rural</option>
                                                <option id="Suburban">Suburban</option>
                                                <option id="Urban">Urban</option>
                                                <option id="Urban with tall Buildings higher than 20 m.">Urban with tall Buildings higher than 20 m.</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Shield of cable</label>
                                            <select class="form-control" id="shieldofcable">
                                                <option value="">Shield of the cable?</option>
                                                <option id="Armoured">Armoured</option>
                                                <option id="Unarmoured">Unarmoured</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Impulse withstand</label>
                                            <select class="form-control" id="impulsewithstand">
                                                <option value="">Impulse Withstand Voltage of Equipment</option>
                                                <option id="No Equipment">No Equipment</option>
                                                <option id="1kV">1kV</option>
                                                <option id="1.5kV">1.5kV</option>
                                                <option id="2.5kV">2.5kV</option>
                                                <option id="4kV">4kV</option>
                                                <option id="6kV">6kV</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Type of installation</label>
                                            <select class="form-control" id="typeofinstallation">
                                                <option value="">Installation type of communication line?</option>
                                                <option id="Aerial">Aerial</option>
                                                <option id="Buried">Buried</option>
                                            </select>
                                        </div>                                   
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom01">Length of dataline 2</label>
                                            <input type="number" class="form-control" id="lengthofdataline2" placeholder="Length of dataline 2" value="Dummy" required>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Shield of cable 1</label>
                                            <select class="form-control" id="shieldofcable1">
                                                <option value="">Shield of the Cable?</option>
                                                <option id="Shielded">Shielded</option>
                                                <option id="Unshielded">Unshielded</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Impulse withstand 1 </label>
                                            <select class="form-control" id="impulsewithstand1">
                                                <option value="">Impulse Withstand Voltage of Equipment</option>
                                                <option id="No Equipment">No Equipment</option>
                                                <option id="1kV">1kV</option>
                                                <option id="1.5kV">1.5kV</option>
                                                <option id="2.5kV">2.5kV</option>
                                                <option id="4kV">4kV</option>
                                                <option id="6kV">6kV</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Equipotential bonding</label>
                                            <select class="form-control" id="equipotentialbonding">
                                                <option value="">Select Equipotential bonding?</option>
                                                <option id="Yes">Yes</option>
                                                <option id="No">No</option>
                                            </select>
                                        </div>                                   
                                    </div>
                                    <div class="h-divider"></div>
                                    <br/><br/><br/>
                                    <!-- Form-3 Fields -->
									<div class="form-row">
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom01">Type of floor</label>
                                            <select class="form-control" id="typeoffloor">
                                                <option value="">Type of floor:</option>
                                                <option id="Concrete">Concrete</option>
                                                <option id="Marble">Marble</option>
                                                <option id="ceramic">Ceramic</option>
                                                <option id="Gravel">Gravel</option>
                                                <option id="Moquette">Moquette</option>
                                                <option id="Carpets">Carpets</option>
                                                <option id="Asphalt">Asphalt</option>
                                                <option id="linoleum">Linoleum</option>
                                                <option id="Wood">Wood</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Risk of fire</label>
                                            <select class="form-control" id="riskoffire">
                                                <option value="">Risk of fire:</option>
                                                <option id="None">None</option>
                                                <option id="High">High</option>
                                                <option id="Low">Low</option>
                                                <option id="Ordinary">Ordinary</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Fire protection </label>
                                            <select class="form-control" id="fireprotection">
                                                <option value="">Fire protection:</option>
                                                <option id="No provisions">No provisions</option>
                                                <option id="Manual">Manual</option>
                                                <option id="Automatic">Automatic</option>
                                            </select>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Special</label>
                                            <select class="form-control" id="special">
                                                <option value="">Special Consideration:</option>
                                                <option id="None">None</option>
                                                <option id="Where the area is one in which lightning strokes are prevalent.">Where the area is one in which lightning strokes are prevalent.</option>
                                                <option id="Where large numbers of people congregate,such as, sports, cultural, assembly buildings.">Where large numbers of people congregate,such as, sports, cultural, assembly buildings.</option>
                                                <option id="Where there are very tall, complex or isolated structures.">Where there are very tall, complex or isolated structures.</option>
                                                <option id="where  there  are  structures  of  historic  or cultural importance.">where  there  are  structures  of  historic  or cultural importance.</option>
                                                <option id="Structures with inherent explosive risks; for example, explosives factories, stores and dumps and fuel tanks.">Structures with inherent explosive risks; for example, explosives factories, stores and dumps and fuel tanks.</option>
                                                <option id="Where essential public services are concerned as lightning may lead to power outages and unplanned  interruptions  of  production processes.">Where essential public services are concerned as lightning may lead to power outages and unplanned  interruptions  of  production processes.</option>
                                                <option id="Where there is wide use of electrical and electronic equipment/ components that are sensitive to the effects of lightning.">Where there is wide use of electrical and electronic equipment/ components that are sensitive to the effects of lightning.</option>
                                            </select>
                                        </div>                                   
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom01">Type of Building</label>
                                            <select class="form-control" id="typeofbuilding">
                                                <option value="">Type of Structure:</option>
                                                <option id="Hospital">Hospital</option>
                                                <option id="School">School</option>
                                                <option id="Civic Building">Civic Building</option>
                                                <option id="Hotel">Hotel</option>
                                                <option id="Public Entertainment">Public Entertainment</option>
                                                <option id="Church">Church</option>
                                                <option id="Museum">Museum</option>
                                                <option id="Residential">Residential</option>
                                                <option id="Industrial">Industrial</option>
                                                <option id="Commercial">Commercial</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">No of Persons</label>
                                            <input type="number" class="form-control" id="noofpersons" placeholder="No of Persons" value="Dummy" required>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Total Functional Hours Of Building </label>
                                            <input type="number" class="form-control" id="totalfunctionalhoursofbuilding" placeholder="Total Functional Hours Of Building" value="Dummy" required>
                                        </div>
										 <div class="col-md-3 mb-3">
                                            <label for="validationCustom02">Functional Days In A Year</label>
                                            <input type="number" class="form-control" id="functionaldaysinayear" placeholder="Functional Days In A Year" value="Dummy" required>
                                        </div>                                   
                                    </div>
                                    <div class="h-divider"></div>
                                    <br/><br/><br/>
                                    <!-- Form-4 Fields -->
                                    <div id="form4_div" class="col-md-12 mb-12">
                                        <div class="form-row">
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom01">Type Of Roof</label>
                                                <select class="form-control" id="typeofroof">
                                                    <option value="">Roof type:</option>
                                                    <option id="RCC Roof">RCC Roof</option>
                                                    <option id="Metalic Roof">Metalic Roof</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">Protected Terrace</label>
                                                <select class="form-control" id="protectedterrace">
                                                    <option value="">Equipment needed to be protected in terrace:</option>
                                                    <option id="Yes">Yes</option>
                                                    <option id="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">Air Terminal Material</label>
                                                <select class="form-control required" name="air_terminal_material" id="air_terminal_material" data-toggle="tooltip" data-placement="top" title="" >
                                                <option value="">Air Terminal Material</option>
                                                <!-- <option selected>Yes</option>
                                                <option>No</option> -->
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">Equipment</label>
                                                <select class="form-control" id="equipment">
                                                    <option id="Yes">Yes</option>
                                                    <option id="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">Maxheight</label>
                                                <input type="text" class="form-control" id="maxheight" placeholder="Maxheight" value="Dummy" required>
                                            </div>                                   
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom01">No Of Equipment</label>
                                                <input type="text" class="form-control" id="noofequipment" placeholder="No Of Equipment" value="Dummy" required>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">Equipment Filled</label>
                                                <input type="text" class="form-control" id="equipmentfilled" placeholder="Equipment Filled" value="Dummy" required>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">DownConductor Routing</label>
                                                <select class="form-control" id="conductor_routing" onchange="DownConductorRoutingChanges(this.value);">
                                                    <option value="">Down Conductor Routing:</option>
                                                    <option value="Structural column">Structural column</option>
                                                    <option value="External">External</option>
                                                    <option value="Natural Down Conductor">Natural Down Conductor</option>
                                                    <option value="Precast Column">Precast Column</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">DownConductor Material</label>
                                                <select class="form-control" id="down_conductor_material">
                                                    <option value="">Down conductor Material:</option>
                                                </select>
                                            </div>                                   
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom01">Earthing System</label>
                                                <select class="form-control"  id="earthing_system" onchange="EarthingSystemChanges(this.value);">
                                                    <option value="">Earthing System:</option>
                                                    <option>Ring Earthing (Type - B)</option>
                                                    <option>Foundation Mesh</option>
                                                    <option>Type of Earthing</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="validationCustom02">Earthing Material</label>
                                                <select class="form-control" id="earthing_material">
                                                    <option value="">Select Earthing Material</option>
                                                </select>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div class="h-divider"></div>
                                    <br/><br/><br/>
                                    <!-- Form-5 Fields -->
                                    <div class="col-md-12 mb-12" id="form5_div">
                                        <div class="form-row">
                                            <div class="col-md-6 mb-3">
                                                <h5>Description</h5>
                                            </div>
                                            <div class="col-md-3 mb-1">
                                                <h5>3 Phase</h5>
                                            </div>
                                            <div class="col-md-3 mb-1">
                                                <h5>1 Phase</h5>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Main Incomer</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <!-- min="1" max="24" maxlength="4" -->
                                                <input type="number" min="0" value="1" class="form-control required" name="mainIncomerPhase3" id="number_of_main_incomers_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="mainIncomerPhase1" id="number_of_main_incomers_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Sub Panels</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="subPanelsPhase3" id="number_of_sub_panels_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="subPanelsPhase1" id="number_of_sub_panels_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Floor Distribution Boards</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="floorDistributionBoardPhase3" id="number_of_floor_distribution_boards_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="floorDistributionBoardPhase1" id="number_of_floor_distribution_boards_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Lift Panel(Feeding to Lift, escalators & Moving Walks)</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="liftPanelPhase3" id="number_of_lift_panels_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="liftPanelPhase1" id="number_of_lift_panels_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Fire Fighting panel</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="fireFightingPanelPhase3" id="number_of_fire_fighting_panels_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="fireFightingPanelPhase1" id="number_of_fire_fighting_panels_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Automation Panel(Feeding to PLC & Drivers)</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="automationPanelPhase3" id="number_of_automation_panels_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="automationPanelPhase1" id="number_of_automation_panels_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Outdoor Streetlight Panel</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="outdootStreetlightPanelPhase3" id="number_of_outdoor_streetlight_panels_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="outdootStreetlightPanelPhase1" id="number_of_outdoor_streetlight_panels_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. Solar PV Inverter Panel</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="roofTopSolarPanelPhase3" id="number_of_rooftop_solar_pv_panels_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="roofTopSolarPanelPhase1" id="number_of_rooftop_solar_pv_panels_phase_1">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <h6>No. of. UPS Panel</h6>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="securityPanelPhase3" id="number_of_security_panels_phase_3">
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <input type="number" min="0" class="form-control" name="securityPanelPhase1" id="number_of_security_panels_phase_1">
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="form_flag">
                                    <button class="btn btn-primary" type="button"style="float:right" onclick="SaveData();" id="SaveButton">Save Changes</button>  
                                    <button class="btn btn-primary" type="button" style="cursor:none;display:none;float:right" id="UpdateProgressButton">
                                        Updating...
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    </button>
                                </form>
            
                                <script>
                                    // Example starter JavaScript for disabling form submissions if there are invalid fields
                                    (function() {
                                        'use strict';
                                        window.addEventListener('load', function() {
                                            // Fetch all the forms we want to apply custom Bootstrap validation styles to
                                            var forms = document.getElementsByClassName('needs-validation');
                                            // Loop over them and prevent submission
                                            var validation = Array.prototype.filter.call(forms, function(form) {
                                                form.addEventListener('submit', function(event) {
                                                    if (form.checkValidity() === false) {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                    }
                                                    form.classList.add('was-validated');
                                                }, false);
                                            });
                                        }, false);
                                    })();
                                </script>
                            </div>
                        </div>
                       
                    </div>
    <?php echo include "footer.php"; ?>  
