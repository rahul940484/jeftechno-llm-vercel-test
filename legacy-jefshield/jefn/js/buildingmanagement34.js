const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function DwgFileUploads(id){
    let Files = document.getElementById("Dwg_file"+id);
    if(Files !== null){
        let now = Date.now();
        var allowedExtensions =  /(\.dwg)$/i;
        // var allowedExtensions =  /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
        var filePath = Files.value;
        let FileData = {fileSrc:"",filename:""};
        if (!allowedExtensions.exec(filePath)) {
            alert("INVLIAD FILE FORMAT...! Only dwg files are Allowed");
            FileData={fileSrc:"",filename:""};
            Files.value = "";
            return false; 
        }else{
            var files = Files.files;
            if(files.length > 0){
                let FileProgress = document.getElementById("FileUploadprogress");
                let LocalData = JSON.parse(localStorage.getItem("MobileNumber"));
                let file = files[0];
                let FileBase64Data = await toBase64(file);
                FileData={filename:now+"."+(file.type.split("/").pop()),fileSrc:FileBase64Data};
                console.log(FileData)
                var baseurl = "https://dev.telibrahma.in/jefshield/uploadDrawingFile";
                let postdata = {
                    "mobileNumber":LocalData.mobileNumber,
                    "buildingId": id,
                    "filename": FileData.filename,
                    "fileSrc": FileData.fileSrc
                };
                console.log(postdata)
                $.ajax({
                    xhr: function(){
                        var xhr = new window.XMLHttpRequest();
                        xhr.open('POST',baseurl,true);
                       xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                      // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

                        xhr.upload.addEventListener("progress", function(evt){
                            if (evt.lengthComputable) {
                                
                                var percentComplete = evt.loaded / evt.total;
                                console.log(percentComplete);
                                if(FileProgress !== null){
                                    let per = percentComplete*100
                                    FileProgress.style.width=Math.round(per)+"%";
                                }
                            }
                        }, false);
                        
                        return xhr;
                    },
                    complete:function(){
                        console.log("Request finished.");
                    },
                    url:baseurl,
                    async:true,
                    type:"post", 
                    mode: 'no-cors',
                    crossDomain:true,
                    headers: {

                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                            },
                    data: JSON.stringify(postdata),
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function(result) {
                        console.log(result);
                        switch(result.respCode){
                            case 2:
                                if(FileProgress !== null){
                                    FileProgress.style.width="0%";
                                }
                                alert("File Uploaded successfully.....!")
                                break;
                            default:
                                alert(result.respText);
                                break;          
                        }
                    },
                    error:function(status)  { 
                        console.log(status);
                        //show_alert('user_id',"Unknown System Error please try again later");
                      //  callback(false);
                    }
                });
            }else{
                Files.value = "";
            }    
        }
    }else{
        alert("Error: Invalid Element ID");
    }
}



async function getListBuildings(mobno) {
    var ref2 = 1;
    $('#refcheck').val(1);
     console.log("getListBuildings");
    var baseurl = "https://dev.telibrahma.in/jefshield/getlistbuilding";
    var postdata = {"mobno": mobno };
   var ref = {"ref": 1};
   localStorage.setItem("RefCheck",JSON.stringify(ref));
 
    console.log(postdata)
    result = await $.ajax({
        cache: false,
        url:baseurl,
        async:true,
    	type:"post",
        data: JSON.stringify(postdata),
	    contentType: 'application/json',
	    dataType: 'json',
        success: function(result) {
             console.log(result);
            switch(result.respCode){
                case 1:
                   
                    var trHTML = '<thead> \
                        <tr> \
                            <th>Projects</th> \
                            <th class="text-center">Location</th> \
                            <th class="text-center">R A Report</th> \
                            <th class="text-center">Drawing File Upload</th> \
                            <th class="text-center">Drawing File Download</th> \
                            <th class="text-center">File Available for Download</th> \
                        </tr> \
                    </thead><tbody>';
                    $('#building_list').html('');
                    $.each(result.bldglist, function (i, item) {
                        trHTML += '<tr> \
                            <td> \
                                <div class="widget-content p-0"> \
                                    <div class="widget-content-wrapper"> \
                                        <div class="widget-content-left mr-3"> \
                                            <div class="widget-content-left"> \
                                                <img width="40" class="rounded-circle" src="assets/images/avatars/2.jpg" alt=""> \
                                            </div> \
                                        </div> \
                                        <div class="widget-content-left flex2"> \
                                            <div class="widget-heading"> \
                                                <a href="project-detail.php#'+item.bldgid+'">'+item.projectname+'</a> \
                                            </div> \
                                            <div class="widget-subheading opacity-7"></div> \
                                        </div> \
                                    </div> \
                                </div> \
                            </td> \
                            <td class="text-center">'+item.city+'</td> \
                            <td class="text-center">';
                                if(item.filepath === null || item.filepath === undefined || item.filepath === ""){
                                    trHTML += '<a > <img src="assets/images/q2.png" alt="Download">	</a>';
                                
                                 console.log("inside 10");
                                 ref = {"ref": 0};
                                 localStorage.setItem("RefCheck",JSON.stringify(ref));
                                
                                }else{
                                    trHTML += '<a target="_blank" href="'+item.filepath+'" download> <img src="assets/images/q2.png" alt="Download">	</a>';
                                        // </td> <td class="text-center"> \
                                        //     <a href="#"></a> \
                                        // </td>';
                                }
                            trHTML += '</td> \
                            <td class="text-center"> \
                                <center> \
                                    <div class="col-md-8"> \
                                        <input type="file" class="form-control"  onchange="DwgFileUploads('+item.bldgid+')" name="Dwg_file'+item.bldgid+'" id="Dwg_file'+item.bldgid+'"> \
                                    </div> \
                                </center> \
                            </td>';
                            trHTML += '<td class="text-center">';
                            let FilesCount = item.jefrev===null||item.jefrev===undefined?0:item.jefrev;
                            if(FilesCount > 0){
                                for(let i=0;i<FilesCount;i++){
                                    if((i+1) === FilesCount){
                                        trHTML += '<a href="'+item.drawingjef+item.bldgid+"_"+(i+1)+'.dwg" download class="badge badge-info">File-'+FilesCount+'</a>&nbsp;&nbsp;';
                                    }else{
                                        trHTML += '<a href="'+item.drawingjef+item.bldgid+"_"+(i+1)+'.dwg" download class="badge badge-secondary">File-'+(i+1)+'</a>';
                                    }
                                }
                            }else{
                                trHTML += 'Files Not Available to Download';
                            }
                            trHTML += '</td> \
                            <td class="text-center">'+item.uploadtime+'</td>';
                            trHTML += '</tr>';
                    });
                    trHTML += '</tbody>';        
                    console.log("inside");
                   $('#building_list').append(trHTML);
                  //  if(ref2 === 3)
                  //  {
                   //     console.log("inside 10");
                   //     ref = {"ref": 0};
                    //    localStorage.setItem("RefCheck",JSON.stringify(ref));
                       // $('#ref').val(0);
                    //}
                  
                      
                   // $('#refcheck').val(refreshcheck);
                  //  setTimeout(getListBuildings(mobno), 1000);
                   // tid = setTimeout(getListBuildings(mobno), 1000); 
                 load();
                  return 2;
                    break;
                default:
                    //show_alert('user_id',result.respText);
                 //   return false;
                    break;          
                     
            }
           // return false;
           
        },
        error:function(status)  { 
            show_alert('user_id',"Unknown System Error please try again later");
                return false;
            }
        });
        
     return result;
}

function getDetailBuildings(Info) {
    // var baseurl = "http://34.213.62.50:8090/jefshield/getdetailbuilding";
    // var baseurl = "https://dev.telibrahma.in/jefshield/getdetailbuilding";
    var baseurl = "https://dev.telibrahma.in/jefshield/getBuildingInfo";
    // postdata = {"buildingid": Info.buildingId};
    postdata = {"buildingid": parseInt(Info.buildingId),"mobileNumber": Info.mobile};
    // console.log(postdata);
    $.ajax({
        url:baseurl,
        async:true,
        type:"post", 
        data: JSON.stringify(postdata),
        contentType: 'application/json',
        dataType: 'json',
        success: function(result) {
            console.log("Main Result here....")
            console.log(result);
            localStorage.setItem("BuildingInfo",JSON.stringify(result));
            switch(result.respCode){
                case 2:
                    Load_air_terminal_materials();
                    $('#buildingId').val(result.buildingInfo[0].bldgid[0]);
                    $('#buildingName').val(result.buildingInfo[0].projectname);
                    $('#clientName').val(result.buildingInfo[0].client_name);
                    if(result.buildingInfo[0].country == "India"){
                        makeSubmenu(result.buildingInfo[0].state);
                        document.getElementById("location_div").style.display = "none";
                        document.getElementById("thunderstorm_div").style.display = "none";
                        document.getElementById("state_div").style.display = "block";
                        document.getElementById("city_div").style.display = "block";
                        document.getElementById(result.buildingInfo[0].state).selected = true; //State
                        document.getElementById(result.buildingInfo[0].city).selected = true; //City    
                    }else{
                        document.getElementById("location_div").style.display = "block";
                        document.getElementById("thunderstorm_div").style.display = "block";
                        document.getElementById("state_div").style.display = "none";
                        document.getElementById("city_div").style.display = "none";
                    }
                    $('#CountryDropDown').val(result.buildingInfo[0].country);
                    $('#air_terminal_material').val(result.buildingInfo[0].air_terminal_material);
                    $('#location').val(result.buildingInfo[0].location);
                    $('#thunderstorm_days').val(result.buildingInfo[0].thunderstorm_days);
                    // $('#validationCustom02').val(result.buildingdetail[0].state);
                    // $('#validationCustom03').val(result.buildingdetail[0].city);
                    $('#building_length').val(result.buildingInfo[0].building_length);
                    $('#building_width').val(result.buildingInfo[0].building_width);
                    $('#building_height').val(result.buildingInfo[0].building_height);
                    $('#nooffloor').val(result.buildingInfo[0].nooffloor);
                    // document.getElementById(result.buildingInfo[0].locationfactor).selected = true;
                    $('#locationfactor').val(result.buildingInfo[0].locationfactor);
                    $('#lengthofpowerline').val(result.buildingInfo[0].lengthofpowerline);
                    // document.getElementById("10"+result.buildingInfo[0].installationfactor).selected = true;
                    $('#installationfactor').val(result.buildingInfo[0].installationfactor);

                    // document.getElementById("11"+result.buildingInfo[0].linetype).selected = true;
                    $('#linetype').val(result.buildingInfo[0].linetype);
                    // document.getElementById("12"+result.buildingInfo[0].environmentalfactor).selected = true;
                    $('#environmentalfactor').val(result.buildingInfo[0].environmentalfactor);
                    // document.getElementById("13"+result.buildingInfo[0].shieldofcable).selected = true;
                    $('#shieldofcable').val(result.buildingInfo[0].shieldofcable);
                    // document.getElementById("14"+result.buildingInfo[0].impulsewithstand).selected = true;
                    $('#impulsewithstand').val(result.buildingInfo[0].impulsewithstand);
                    // document.getElementById("15"+result.buildingInfo[0].typeofinstallation).selected = true;
                    $('#typeofinstallation').val(result.buildingInfo[0].typeofinstallation);
                    $('#lengthofdataline2').val(result.buildingInfo[0].lengthofdataline2);
                    // document.getElementById("17"+result.buildingInfo[0].shieldofcable1).selected = true;
                    $('#shieldofcable1').val(result.buildingInfo[0].shieldofcable1);
                    // document.getElementById("18"+result.buildingInfo[0].impulsewithstand1).selected = true;
                    $('#impulsewithstand1').val(result.buildingInfo[0].impulsewithstand1);
                    // document.getElementById("19"+result.buildingInfo[0].equipotentialbonding).selected = true;
                    $('#equipotentialbonding').val(result.buildingInfo[0].equipotentialbonding);
                    // document.getElementById("20"+result.buildingInfo[0].typeoffloor).selected = true;
                    $('#typeoffloor').val(result.buildingInfo[0].typeoffloor);
                    // document.getElementById("21"+result.buildingInfo[0].riskoffire).selected = true;
                    $('#riskoffire').val(result.buildingInfo[0].riskoffire);
                    // document.getElementById("22"+result.buildingInfo[0].fireprotection).selected = true;
                    $('#fireprotection').val(result.buildingInfo[0].fireprotection);
                    // document.getElementById("23"+result.buildingInfo[0].special).selected = true;
                    $('#special').val(result.buildingInfo[0].special);
                    // document.getElementById("24"+result.buildingInfo[0].typeofbuilding).selected = true;
                    $('#typeofbuilding').val(result.buildingInfo[0].typeofbuilding);
                    $('#noofpersons').val(result.buildingInfo[0].noofpersons);
                    $('#totalfunctionalhoursofbuilding').val(result.buildingInfo[0].totalfunctionalhoursofbuilding);
                    $('#functionaldaysinayear').val(result.buildingInfo[0].functionaldaysinayear);
                    $('#form_flag').val(result.buildingInfo[0].reporttype);
                    if(result.buildingInfo[0].reporttype == "0"){ //0:RARBM 1:RAR
                        document.getElementById("form4_div").style.display = "block";
                        document.getElementById("form5_div").style.display = "block";
                        // document.getElementById("28"+result.buildingInfo[0].typeofroof).selected = true;
                        $('#typeofroof').val(result.buildingInfo[0].typeofroof);   
                        // document.getElementById("29"+result.buildingInfo[0].protectedterrace).selected = true;
                        $('#protectedterrace').val(result.buildingInfo[0].protectedterrace);    
                        // document.getElementById("30"+result.buildingInfo[0].equipment).selected = true;
                        $('#equipment').val(result.buildingInfo[0].equipment);
                        $('#maxheight').val(result.buildingInfo[0].maxheight);
                        $('#noofequipment').val(result.buildingInfo[0].noofequipment);
                        $('#equipmentfilled').val(result.buildingInfo[0].equipmentfilled);
                        // document.getElementById("34"+result.buildingInfo[0].downconductorrouting).selected = true;
                        DownConductorRoutingChanges(result.buildingInfo[0].downconductorrouting);
                        $('#conductor_routing').val(result.buildingInfo[0].downconductorrouting);
                        // document.getElementById("35"+result.buildingInfo[0].downconductormaterial).selected = true;
                        $('#down_conductor_material').val(result.buildingInfo[0].downconductormaterial);
                        // document.getElementById("36"+result.buildingInfo[0].earthingsystem).selected = true;
                        EarthingSystemChanges(result.buildingInfo[0].earthingsystem);
                        $('#earthing_system').val(result.buildingInfo[0].earthingsystem);
                        // document.getElementById("37"+result.buildingdetail[0].earthingmaterial).selected = true;
                        $('#earthing_material').val(result.buildingInfo[0].earthingmaterial);
                        $('#number_of_main_incomers_phase_3').val(result.buildingInfo[0].number_of_main_incomers_phase_3);
                        $('#number_of_main_incomers_phase_1').val(result.buildingInfo[0].number_of_main_incomers_phase_1);
                        $('#number_of_sub_panels_phase_3').val(result.buildingInfo[0].number_of_sub_panels_phase_3);
                        $('#number_of_sub_panels_phase_1').val(result.buildingInfo[0].number_of_sub_panels_phase_1);
                        $('#number_of_floor_distribution_boards_phase_3').val(result.buildingInfo[0].number_of_floor_distribution_boards_phase_3);
                        $('#number_of_floor_distribution_boards_phase_1').val(result.buildingInfo[0].number_of_floor_distribution_boards_phase_1);
                        $('#number_of_fire_fighting_panels_phase_3').val(result.buildingInfo[0].number_of_fire_fighting_panels_phase_3);
                        $('#number_of_fire_fighting_panels_phase_1').val(result.buildingInfo[0].number_of_fire_fighting_panels_phase_1);
                        $('#number_of_automation_panels_phase_3').val(result.buildingInfo[0].number_of_automation_panels_phase_3);
                        $('#number_of_automation_panels_phase_1').val(result.buildingInfo[0].number_of_automation_panels_phase_1);
                        $('#number_of_outdoor_streetlight_panels_phase_3').val(result.buildingInfo[0].number_of_outdoor_streetlight_panels_phase_3);
                        $('#number_of_outdoor_streetlight_panels_phase_1').val(result.buildingInfo[0].number_of_outdoor_streetlight_panels_phase_1);
                        $('#number_of_rooftop_solar_pv_panels_phase_3').val(result.buildingInfo[0].number_of_rooftop_solar_pv_panels_phase_3);
                        $('#number_of_rooftop_solar_pv_panels_phase_1').val(result.buildingInfo[0].number_of_rooftop_solar_pv_panels_phase_1);
                        $('#number_of_security_panels_phase_3').val(result.buildingInfo[0].number_of_security_panels_phase_3);
                        $('#number_of_security_panels_phase_1').val(result.buildingInfo[0].number_of_security_panels_phase_1);
                        $('#number_of_lift_panels_phase_3').val(result.buildingInfo[0].number_of_lift_panels_phase_3)
                        $('#number_of_lift_panels_phase_1').val(result.buildingInfo[0].number_of_lift_panels_phase_1)
                    }else{
                        document.getElementById("form4_div").style.display = "none";
                        document.getElementById("form5_div").style.display = "none";
                    }
                    document.getElementById("pdflink").href = result.buildingInfo[0].filepath;
                    break;               
                default:
                    show_alert(result.respText);
                    callback(false);
                    break;          
            }
        },
        error:function(status)  { 
            console.log(status);
            //show_alert('user_id',"Unknown System Error please try again later");
            callback(false);
        }
    });
}

function SaveDetailBuildings() {
    // var baseurl = "http://34.213.62.50:8090/jefshield/editbuildingdetails";
    var baseurl = "https://dev.telibrahma.in/jefshield/editbuildingdetailsNew";

    var Flag = $('#form_flag').val();
    var SelectedCountry = $('#CountryDropDown').val();
    if($('#buildingName').val() == ""){
        alert("Please Enter Building Name...!");
        $('#buildingName').focus();
    }else if($('#clientName').val() == ""){
        alert("Please Enter Client Name...!");
        $('#clientName').focus();
    }else if(SelectedCountry == "India" && $('#validationCustom02').val() == ""){
        alert("Please Select State...!");
        $('#validationCustom02').focus();
    }else if(SelectedCountry == "India" && $('#validationCustom03').val() == ""){
        alert("Please Select City...!");
        $('#validationCustom03').focus();
    }else if(SelectedCountry != "India" && $('#location').val() == ""){
        alert("Please Enter Location...!");
        $('#location').focus();
    }else if(SelectedCountry != "India" && $('#thunderstorm_days').val() == ""){
        alert("Please Enter Thunderstorm Days...!");
        $('#thunderstorm_days').focus();
    }else if($('#building_length').val() == ""){
        alert("Please Enter Building Length...!");
        $('#building_length').focus();
    }else if($('#building_width').val() == ""){
        alert("Please Enter Building Width...!");
        $('#building_width').focus();
    }else if($('#building_height').val() == ""){
        alert("Please Enter Building Height...!");
        $('#building_height').focus();
    }else if($('#nooffloor').val() == ""){
        alert("Please Enter Number of Floor...!");
        $('#nooffloor').focus();
    }else if($('#locationfactor').val() == ""){
        alert("Please Select Location Factor...!");
        $('#locationfactor').focus();
    }else if($('#lengthofpowerline').val() == ""){
        alert("Please Enter Length of Power Line...!");
        $('#lengthofpowerline').focus();
    }else if($('#installationfactor').val() == ""){
        alert("Please Select Installation Factor...!");
        $('#installationfactor').focus();
    }else if($('#linetype').val() == ""){
        alert("Please Select Line Type...!");
        $('#linetype').focus();
    }else if($('#environmentalfactor').val() == ""){
        alert("Please Select Environmental Factor...!");
        $('#environmentalfactor').focus();
    }else if($('#shieldofcable').val() == ""){
        alert("Please Select Shield of Cable...!");
        $('#shieldofcable').focus();
    }else if($('#impulsewithstand').val() == ""){
        alert("Please Select Impulse with Stand...!");
        $('#impulsewithstand').focus();
    }else if($('#typeofinstallation').val() == ""){
        alert("Please Select Type of Installation...!");
        $('#typeofinstallation').focus();
    }else if($('#lengthofdataline2').val() == ""){
        alert("Please Select Legth of Data Line-2...!");
        $('#lengthofdataline2').focus();
    }else if($('#shieldofcable1').val() == ""){
        alert("Please Select Shield of Cable-1...!");
        $('#shieldofcable1').focus();
    }else if($('#impulsewithstand1').val() == ""){
        alert("Please Select Impulse with Stand-1...!");
        $('#impulsewithstand1').focus();
    }else if($('#equipotentialbonding').val() == ""){
        alert("Please Select Equipotential Bonding...!");
        $('#equipotentialbonding').focus();
    }else if($('#typeoffloor').val() == ""){
        alert("Please Select Type of Floor...!");
        $('#typeoffloor').focus();
    }else if($('#riskoffire').val() == ""){
        alert("Please Select Risk of Fire...!");
        $('#riskoffire').focus();
    }else if($('#fireprotection').val() == ""){
        alert("Please Select Fire Protection...!");
        $('#fireprotection').focus();
    }else if($('#special').val() == ""){
        alert("Please Select Special Consideration...!");
        $('#special').focus();
    }else if($('#typeofbuilding').val() == ""){
        alert("Please Select Type of Building...!");
        $('#typeofbuilding').focus();
    }else if($('#noofpersons').val() == ""){
        alert("Please Enter Number of Persons...!");
        $('#noofpersons').focus();
    }else if($('#totalfunctionalhoursofbuilding').val() == ""){
        alert("Please Enter Total Functional Hours of Building...!");
        $('#totalfunctionalhoursofbuilding').focus();
    }else if($('#functionaldaysinayear').val() == ""){
        alert("Please Enter Functional Days in Year...!");
        $('#functionaldaysinayear').focus();
    }else{
        if(Flag == "0" && $('#typeofroof').val() == ""){
            alert("Please Select Type of Roof...!");
            $('#typeofroof').focus();
        }else if(Flag == "0" && $('#protectedterrace').val() == ""){
            alert("Please Select Protected terrace...!");
            $('#protectedterrace').focus();
        }else if(Flag == "0" && $('#air_terminal_material').val() == ""){
            alert("Please Select Air Terminal Material...!");
            $('#air_terminal_material').focus();            
        }else if(Flag == "0" && $('#equipment').val() == ""){
            alert("Please Select Equipment...!");
            $('#equipment').focus();
        }else if(Flag == "0" && $('#maxheight').val() == ""){
            alert("Please Enter Max Height...!");
            $('#maxheight').focus();
        }else if(Flag == "0" && $('#noofequipment').val() == ""){
            alert("Please Enter Number of Equipment...!");
            $('#noofequipment').focus();
        }else if(Flag == "0" && $('#equipmentfilled').val() == ""){
            alert("Please Enter Equipment Filled...!");
            $('#equipmentfilled').focus();
        }else if(Flag == "0" && $('#conductor_routing').val() == ""){
            alert("Please Select Conductor Routing...!");
            $('#conductor_routing').focus();
        }else if(Flag == "0" && $('#down_conductor_material').val() == ""){
            alert("Please Select Down Conductor Material...!");
            $('#down_conductor_material').focus();
        }else if(Flag == "0" && $('#earthing_system').val() == ""){
            alert("Please Select Earthing System...!");
            $('#earthing_system').focus();
        }else if(Flag == "0" && $('#earthing_material').val() == ""){
            alert("Please Select Earthing Material...!");
            $('#earthing_material').focus();
        }else if(Flag == "0" && $('#number_of_main_incomers_phase_3').val() == ""){
            alert("Please Enter Number of Main Incomers Pahse-3...!");
            $('#number_of_main_incomers_phase_3').focus();
        }else{
            // FileData={fileSrc:"",filename:""};
            let FileInfo = JSON.parse(localStorage.getItem("DwgFileInfo"))

            if(Flag == "0"){  //0:RARBM 1:RAR
                postdata = {
                    filename: "", //FileInfo.filename,
                    fileSrc: "", //FileInfo.fileSrc,              
                    bldgid: $('#buildingId').val(),
                    projectname: $('#buildingName').val(),
                    client_name: $('#clientName').val(),
                    country: $('#CountryDropDown').val(),
                    location: SelectedCountry == "India"?"":$('#location').val(),
                    thunderstorm_days: SelectedCountry == "India"?"":$('#thunderstorm_days').val(),
                    state: SelectedCountry == "India"?$('#validationCustom02').val():"",
                    city:SelectedCountry == "India"?$('#validationCustom03').val():"",
                    building_length: $('#building_length').val(),
                    building_width: $('#building_width').val(),
                    building_height: $('#building_height').val(),
                    nooffloor: $('#nooffloor').val(),
                    locationfactor: $('#locationfactor').val(),
                    lengthofpowerline: $('#lengthofpowerline').val(),
                    installationfactor: $('#installationfactor').val(),
                    linetype: $('#linetype').val(),
                    environmentalfactor: $('#environmentalfactor').val(),
                    shieldofcable: $('#shieldofcable').val(),
                    impulsewithstand: $('#impulsewithstand').val(),
                    typeofinstallation: $('#typeofinstallation').val(),
                    lengthofdataline2: $('#lengthofdataline2').val(),
                    shieldofcable1: $('#shieldofcable1').val(),
                    impulsewithstand1: $('#impulsewithstand1').val(),
                    equipotentialbonding: $('#equipotentialbonding').val(),
                    typeoffloor: $('#typeoffloor').val(),
                    riskoffire: $('#riskoffire').val(),
                    fireprotection: $('#fireprotection').val(),
                    special: $('#special').val(),
                    typeofbuilding: $('#typeofbuilding').val(),
                    noofpersons: $('#noofpersons').val(),
                    totalfunctionalhoursofbuilding: $('#totalfunctionalhoursofbuilding').val(),
                    functionaldaysinayear: $('#functionaldaysinayear').val(),
        
                    apiFlag: $('#form_flag').val() == "0"?"RARBM":"RAR",
        
                    typeofroof: $('#typeofroof').val(),
                    protectedterrace: $('#protectedterrace').val(),
                    AirTerminalMaterial: $('#air_terminal_material').val(),
                    equipment: $('#equipment').val(),
                    maxheight: $('#maxheight').val(),
                    noofequipment: $('#noofequipment').val(),
                    equipmentfilled: $('#equipmentfilled').val(),
                    downconductorrouting: $('#conductor_routing').val(),
                    downconductormaterial: $('#down_conductor_material').val(),
                    earthingsystem: $('#earthing_system').val(),
                    earthingmaterial: $('#earthing_material').val(),
                    number_of_main_incomers_phase_3: $('#number_of_main_incomers_phase_3').val(),
                    number_of_main_incomers_phase_1: $('#number_of_main_incomers_phase_1').val(),
                    number_of_sub_panels_phase_3: $('#number_of_sub_panels_phase_3').val(),
                    number_of_sub_panels_phase_1: $('#number_of_sub_panels_phase_1').val(),
                    number_of_floor_distribution_boards_phase_3: $('#number_of_floor_distribution_boards_phase_3').val(),
                    number_of_floor_distribution_boards_phase_1: $('#number_of_floor_distribution_boards_phase_1').val(),
                    number_of_fire_fighting_panels_phase_3: $('#number_of_fire_fighting_panels_phase_3').val(),
                    number_of_fire_fighting_panels_phase_1: $('#number_of_fire_fighting_panels_phase_1').val(),
                    number_of_automation_panels_phase_3: $('#number_of_automation_panels_phase_3').val(),
                    number_of_automation_panels_phase_1: $('#number_of_automation_panels_phase_1').val(),
                    number_of_outdoor_streetlight_panels_phase_3: $('#number_of_outdoor_streetlight_panels_phase_3').val(),
                    number_of_outdoor_streetlight_panels_phase_1: $('#number_of_outdoor_streetlight_panels_phase_1').val(),
                    number_of_rooftop_solar_pv_panels_phase_3: $('#number_of_rooftop_solar_pv_panels_phase_3').val(),
                    number_of_rooftop_solar_pv_panels_phase_1: $('#number_of_rooftop_solar_pv_panels_phase_1').val(),
                    number_of_security_panels_phase_3: $('#number_of_security_panels_phase_3').val(),
                    number_of_security_panels_phase_1: $('#number_of_security_panels_phase_1').val(),
                    number_of_lift_panels_phase_3: $('#number_of_lift_panels_phase_3').val(),
                    number_of_lift_panels_phase_1: $('#number_of_lift_panels_phase_1').val(),
                }
            }else{
                postdata = {
                    filename: FileInfo.filename,
                    fileSrc: FileInfo.fileSrc,              
                    bldgid: $('#buildingId').val(),
                    projectname: $('#buildingName').val(),
                    client_name: $('#clientName').val(),
                    country: $('#CountryDropDown').val(),
                    location: $('#location').val(),
                    thunderstorm_days: $('#thunderstorm_days').val(),
                    state: $('#validationCustom02').val(),
                    city: $('#validationCustom03').val(),
                    building_length: $('#building_length').val(),
                    building_width: $('#building_width').val(),
                    building_height: $('#building_height').val(),
                    nooffloor: $('#nooffloor').val(),
                    locationfactor: $('#locationfactor').val(),
                    lengthofpowerline: $('#lengthofpowerline').val(),
                    installationfactor: $('#installationfactor').val(),
                    linetype: $('#linetype').val(),
                    environmentalfactor: $('#environmentalfactor').val(),
                    shieldofcable: $('#shieldofcable').val(),
                    impulsewithstand: $('#impulsewithstand').val(),
                    typeofinstallation: $('#typeofinstallation').val(),
                    lengthofdataline2: $('#lengthofdataline2').val(),
                    shieldofcable1: $('#shieldofcable1').val(),
                    impulsewithstand1: $('#impulsewithstand1').val(),
                    equipotentialbonding: $('#equipotentialbonding').val(),
                    typeoffloor: $('#typeoffloor').val(),
                    riskoffire: $('#riskoffire').val(),
                    fireprotection: $('#fireprotection').val(),
                    special: $('#special').val(),
                    typeofbuilding: $('#typeofbuilding').val(),
                    noofpersons: $('#noofpersons').val(),
                    totalfunctionalhoursofbuilding: $('#totalfunctionalhoursofbuilding').val(),
                    functionaldaysinayear: $('#functionaldaysinayear').val(),
                    apiFlag: $('#form_flag').val() == "0"?"RARBM":"RAR"
                }
            }
            // console.log(postdata);
            $.ajax({
                url:baseurl,
                async:true,
                type:"post", 
                data: JSON.stringify(postdata),
                contentType: 'application/json',
                dataType: 'json',
                success: function(result) {
                    // console.log(result);
                    switch(result.respCode){
                        case 2:
                            let FileData={fileSrc:"",filename:""};
                            localStorage.setItem("DwgFileInfo",JSON.stringify(FileData));
                            window.location.href="BuildingList.php";
                            break;               
                        default:
                            alert(result.respText);
                            callback(false);
                            break;          
                    }
                },
                error:function(status)  { 
                    console.log(status);
                    alert("Unknown System Error please try again later");
                    callback(false);
                }
            });        
        }
    }
    
     let SaveBtn = document.getElementById("SaveButton");
        let UpdateActivityBtn = document.getElementById("UpdateProgressButton");
        if(SaveBtn !== null && UpdateActivityBtn !== null){
            SaveBtn.style.display="block";
            UpdateActivityBtn.style.display="none";
        }
}

function getEmail(data) {
    // var baseurl = "http://34.213.62.50:8090/jefshield/getdetailbuilding";
    // var baseurl = "https://dev.telibrahma.in/jefshield/getdetailbuilding";
    var baseurl = "https://dev.telibrahma.in/jefshield/sendOTP"; 
    // var baseurl = "http://192.168.137.1:8000/getlistpovendor";
    // var baseurl = "http://192.168.0.117:8001/sendOTP";
    postdata = {"mobileotp":data.mobileotp,"otpmobile":data.otpmobile};
    console.log(postdata);
    $.ajax({
        url:baseurl,
        async:true,
        type:"post", 
        data: JSON.stringify(postdata),
        contentType: 'application/json',
        dataType: 'json',
        success: function(result) {
            // console.log(result);
            },
        error:function(status)  { 
            console.log(status);
            show_alert('user_id',"Unknown System Error please try again later");
            callback(false);
        }
    });
}

function getProfile(mobno){
    var baseurl = "https://dev.telibrahma.in/jefshield/getJefShieldUserProfile";
    postdata = {"mobileNumber":mobno};
    $.ajax({
        url:baseurl,
        async:true,
        type:"post", 
        data: JSON.stringify(postdata),
        contentType: 'application/json',
        dataType: 'json',
        success: function(result) {
            // console.log(result);
            switch(result.respCode){
                case 2:
                    $('#mobile_number').val(result.userProfile.mobile_number);
                    $('#user_name').val(result.userProfile.user_name);
                    $('#email').val(result.userProfile.email);
                    $('#company_name').val(result.userProfile.company_name);
                    $('#address').val(result.userProfile.address);
                    $('#country').val(result.userProfile.country);
                    $('#state').val(result.userProfile.state);
                    $('#city').val(result.userProfile.city);
                    break;               
                default:
                    show_alert(result.respText);
                    callback(false);
                    break;          
            }
        },
        error:function(status)  { 
            console.log(status);
            //show_alert('user_id',"Unknown System Error please try again later");
            callback(false);
        }
    });
}

function UpdateProfile(mobno){
    var baseurl = "https://dev.telibrahma.in/jefshield/editJefShieldUserProfile";
    postdata = {"mobileNumber":mobno,"companyName": $('#company_name').val(),"email": $('#email').val(),"address": $('#address').val()};
    // console.log(postdata);
    $.ajax({
        url:baseurl,
        async:true,
        type:"post", 
        data: JSON.stringify(postdata),
        contentType: 'application/json',
        dataType: 'json',
        success: function(result) {
            // console.log(result);
            switch(result.respCode){
                case 2:
                    $('#mobile_number').val(result.userData.mobile_number);
                    $('#user_name').val(result.userData.user_name);
                    $('#email').val(result.userData.email);
                    $('#company_name').val(result.userData.company_name);
                    $('#address').val(result.userData.address);
                    $('#country').val(result.userData.country);
                    $('#state').val(result.userData.state);
                    $('#city').val(result.userData.city);
                    alert(result.respText);
                    break;               
                default:
                    alert(result.respText);
                    callback(false);
                    break;          
            }
        },
        error:function(status)  { 
            console.log(status);
            //show_alert('user_id',"Unknown System Error please try again later");
            callback(false);
        }
    });
}