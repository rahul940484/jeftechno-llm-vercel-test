function getFSAUsers() {
  
       var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  
	  var pageNum = $('#page_num').val();
	  if (pageNum == "0") pageNum = "1";
	  
	  var searchName = $('#search_nam').val();
	  if(searchName.length <= 0)
		  searchName = "";
	  if($('#search_act').is(':checked'))
		  searchActive = true;
	  else
		  searchActive = false;
	
  var searchParams={"id":"","name":searchName,"active":"","date":"","poiRegCount":"","poiActCount":"","prtRegCount":"","prtActCount":""};
  //API works only if all optional params are sent !!!  
	 
  var baseurl = "http://13.233.108.206:3000/getListFSA"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"pageNum":pageNum,"searchParams":searchParams};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       //console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   var trHTML = '<thead><tr><td>ID</td><td>Name</td><td>Value</td></tr></thead><tbody>';
				$('#fsa_users').html('');
                $.each(result.fsaList, function (i, item) {
				   console.log("in get fsa types list "+i);
                   console.log(item);
                   var idLink = 'editFSA.html#'+item.fsa_id;
				   var activeLink = "activateFSA("+"'"+item.fsa_id+"'"+")";
				   var deactiveLink = "deactivateFSA("+"'"+item.fsa_id+"'"+")";
				   
                   //console.log(idLink);				   
                   trHTML += "<tr><td><a href="+idLink+" >"+item.fsa_id+"</a>" + '</td><td>' + item.name + '</td><td>' + item.is_active + '</td>';
				   if(item.is_active == 'true')
					   trHTML +="<td><a href='#' onClick="+deactiveLink+" >DeActivate</a>";
				   else
					   trHTML +="<td><a href='#' onClick="+activeLink+" >Activate</a>";
				   trHTML += '</tr>';
                 });
				trHTML += '</tbody>'; 
               $('#fsa_users').append(trHTML);
			   $('#num_pages').html('');
			   for (idx = 1; idx <= result.totalPages; idx++) {
				if(idx == result.pageNum){
                       var pageLink = "<a href='#' >&nbsp;&nbsp;"+idx+"&nbsp;&nbsp;</a>";
                       $('#page_num').val(idx);
				}					   
			    else
                   var pageLink = "<a href='#' onClick=setPage("+idx+")>&nbsp;&nbsp;"+idx+"&nbsp;&nbsp;</a>";
                $('#num_pages').append(pageLink);			   
			   }	   
               return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

function getFSADetail(fsaId) {
  
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(fsaId);
	  
	  
	 
  var baseurl = "http://13.233.108.206:3000/getDetailFSA"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":fsaId};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			    $('#fsa_id').val(result.fsaDetail[0].fsa_id);
				$('#fsa_name').val(result.fsaDetail[0].name);
				
				if(result.fsaDetail[0].is_active == 'true')
			 	  $('#fsa_activ').prop('checked',true);
			    else
			      $('fsa_activ').prop('checked',false);
			    
				
               return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


function getFSAForDropDown() {
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  
	 
  var searchParams={"id":"","name":"","active":"","date":"","poiRegCount":"","poiActCount":"","prtRegCount":"","prtActCount":""};
  //API works only if all optional params are sent !!!  
	 
  var baseurl = "http://13.233.108.206:3000/getListFSA"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"pageNum":"1","searchParams":searchParams};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       //console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   var trHTML = "<select id='fsa_user' name='fsa_user' >";
				     trHTML += "<option id ='999'>Please Select</option>";
					$('#fsa_users').html('');
                $.each(result.fsaList, function (i, item) {
				   console.log("in get fsa users list "+i);
                   console.log(item);
                   if(item.is_active == 'true')
						   trHTML += "<option id='"+item.fsa_id+"'>"+item.name+"</option>";
			     });
				trHTML += '</select>'; 
                $('#fsa_users').append(trHTML);
	          return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

function getFSAForEdit() {
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  
	 
  var searchParams={"id":"","name":"","active":"","date":"","poiRegCount":"","poiActCount":"","prtRegCount":"","prtActCount":""};
  //API works only if all optional params are sent !!!  
	 
  var baseurl = "http://13.233.108.206:3000/getListFSA"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"pageNum":"1","searchParams":searchParams};
  console.log(postdata);
  console.log(baseurl);
  
  
   var respObj = $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		    localStorage.setItem('sessToken',result.sessionToken);
			return result;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return respObj;
}


function createFSA() {
  
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  var name = $('#fsa_name').val();
	  var mail = $('#fsa_mail').val();
	  var phone = $('#fsa_phone').val();
	  var pass = $('#fsa_pass').val();
	  
	  if(!notEmpty("fsa_name",1)){
         show_alert("fsa_typ_name","Name cant be blank");
         return false;
      }
     if(!notEmpty("fsa_phone",8) || $.isNumeric(phone) == false){
         show_alert("fsa_typ_name","Invalid Phone Number");
         return false;
      }
    if(!notEmpty("fsa_pass",6) ){
         show_alert("fsa_typ_name","Password must be atleast 6 characters long");
         return false;
      }
   var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(mail)) {
         show_alert("fsa_typ_name","Invalid Email");
         return false;
     }
	 
  var baseurl = "http://13.233.108.206:3000/createFSA"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"name":name,"email":mail,"mobile":phone,"password":pass};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'fsamenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

function getPRTUsers() {
  
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  
	  var pageNum = $('#page_num').val();
	  if (pageNum == "0") pageNum = "1";
	  
	  var searchName = $('#search_nam').val();
	  if(searchName.length <= 0)
		  searchName = "";
	  if($('#search_act').is(':checked'))
		  searchActive = true;
	  else
		  searchActive = false;
	
 var searchParams = {"id":"","name":searchName,"type":"","status":"","interests":"","faciliites":"","boardingDate":"","expirtyDate":"","subscriptionAmount":"","voucherAmount":""};
 //API works only if all optional params are sent !!!  
	 
  var baseurl = "http://13.233.108.206:3000/getListPRT"; 
   
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"pageNum":pageNum,"searchParams":searchParams};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       //console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   var trHTML = '<thead><tr><td>ID</td><td>Name</td><td>Value</td></tr></thead><tbody>';
				$('#prt_user').html('');
                $.each(result.prtList, function (i, item) {
				   console.log("in get prt types list "+i);
                   console.log(item);
                   var idLink = 'editPRT.html#'+item.prt_id;
				   var activeLink = "activatePRT("+"'"+item.prt_id+"'"+")";
				   var deactiveLink = "deactivatePRT("+"'"+item.prt_id+"'"+")";
				   
                   //console.log(idLink);				   
                   trHTML += "<tr><td><a href="+idLink+" >"+item.prt_id+"</a>" + '</td><td>' + item.name + '</td><td>' + item.is_active + '</td>';
				   if(item.is_active == 'true')
					   trHTML +="<td><a href='#' onClick="+deactiveLink+" >DeActivate</a>";
				   else
					   trHTML +="<td><a href='#' onClick="+activeLink+" >Activate</a>";
				   trHTML += '</tr>';
                 });
				trHTML += '</tbody>'; 
               $('#prt_user').append(trHTML);
			   $('#num_pages').html('');
			   for (idx = 1; idx <= result.totalPages; idx++) {
				if(idx == result.pageNum){
                       var pageLink = "<a href='#' >&nbsp;&nbsp;"+idx+"&nbsp;&nbsp;</a>";
                       $('#page_num').val(idx);
				}					   
			    else
                   var pageLink = "<a href='#' onClick=setPagePRT("+idx+")>&nbsp;&nbsp;"+idx+"&nbsp;&nbsp;</a>";
                $('#num_pages').append(pageLink);			   
			   }	   
               return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

function getPRTDetail(prtId,prtTypes,fclTypes,intTypes,fsaTypes) {
  
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(prtId);
	  
	  
	 
  var baseurl = "http://13.233.108.206:3000/getDetailPRT"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":prtId};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			    $('#prt_id').val(result.partner_details[0].prt_id);
				$('#prt_name').val(result.partner_details[0].name);
				$('#prt_addr').val(result.partner_details[0].address);
				$('#completion_time').val(result.partner_details[0].completion_hour);
				$('#blog_url').val(result.partner_details[0].blog_url);
				$('#prt_title').val(result.partner_details[0].title);
				$('#prt_write_up').val(result.partner_details[0].write_up);
				$('#prt_email').val(result.partner_details[0].user_email);
				$('#prt_mobile').val(result.partner_details[0].user_mobile);
				$('#prt_lat').val(result.partner_details[0].latitude);
				$('#prt_long').val(result.partner_details[0].longitude);
				$('#event_date').val(result.partner_details[0].event_date);
				
			var trHTML = "<select id='prt_types' name='prt_types' >";
		    trHTML += "<option id ='999'>Please Select</option>";
			$('#partner_types').html('');
            $.each(prtTypes.partnerTypeList, function (i, item) {
				   console.log("in getpartner types list "+i);
                   console.log(item);
                   if(item.is_active == 'true'){
					   if(item.type_id == result.partner_details[0].type_id)
					     trHTML += "<option id='"+item.type_id+"' selected>"+item.type_name+"</option>";
					   else	   
					     trHTML += "<option id='"+item.type_id+"'>"+item.type_name+"</option>";
				   }
				      //add only active partner types here
				 });
			trHTML += '</select>';
               //console.log(trHTML);				
			$('#partner_types').append(trHTML);
    	
			var trHTML = "<select id='fcl_types' name='fcl_types' multiple>";
		    trHTML += "<option id ='999'>Please Select</option>";
			$('#facility_types').html('');
            $.each(fclTypes.facilityTypeList, function (i, item) {
				   console.log("in getfacility types list "+i);
                   console.log(item);
                   if(item.is_active == 'true'){
					  if($.inArray(item.type_id,result.partner_details[0].facilities) !== -1)
					      trHTML += "<option id='"+item.type_id+"' selected>"+item.type_name+"</option>";
					   else	   
					     trHTML += "<option id='"+item.type_id+"'>"+item.type_name+"</option>";
				   }
				 });
			trHTML += '</select>';
            //console.log(trHTML);				
			$('#facility_types').append(trHTML);
    		
			var trHTML = "<select id='int_types' name='int_types' multiple>";
		    trHTML += "<option id ='999'>Please Select</option>";
			$('#interest_types').html('');
            $.each(intTypes.interestTypeList, function (i, item) {
				   console.log("in getinterest types list "+i);
                   console.log(item);
                   if(item.is_active == 'true'){
					  if($.inArray(item.id,result.partner_details[0].interests) !== -1)
					      trHTML += "<option id='"+item.id+"' selected>"+item.type_name+"</option>";
					   else	   
					     trHTML += "<option id='"+item.id+"'>"+item.type_name+"</option>";
				   }
				 });
			trHTML += '</select>';
            //console.log(trHTML);				
			$('#interest_types').append(trHTML);
    		
				if(result.partner_details[0].is_active == 'true')
			 	  $('#prt_activ').prop('checked',true);
			    else
			      $('prt_activ').prop('checked',false);
			var menuImg = result.partner_details[0].menu_url;
            var menuImgArr = menuImg.split('/');
            var menuImgFile = menuImgArr.pop();
			if(menuImgFile.length > 1)
             var menuImgURL = 'http://13.233.108.206:3000/xafariAdmin/partnerImages/'+menuImgFile;
		    else
			  var menuImgURL = '';	
			    //console.log(menuImgURL);
			$('#menu_img').attr('src',menuImgURL);

            var otherImgs = result.partner_details[0].image_urls;
			console.log(otherImgs);
			console.log(otherImgs.length);
            for(i = 0; i < otherImgs.length; i++) {
            var otherImg = otherImgs[i];
            var otherImgArr = otherImg.split('/');
            var otherImgFile = otherImgArr.pop();
            var otherImgURL = 'http://13.233.108.206:3000/xafariAdmin/partnerImages/'+otherImgFile;
			    //console.log(menuImgURL);
			j = i+1;	
			$('#img'+j).attr('src',otherImgURL);

			}			
				
               return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


async function createPRT() {
  
      console.log("In CreatePRT");
	  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  var fsa_id = "";
	  
	  
	  $("#fsa_user option:selected").each(function(i,item){
		  //console.log("inside selected");
		  //console.log(item);
		  //console.log(i);
           fsa_id = item.id;
        });
		console.log(fsa_id);
	if(fsa_id <= 0 || parseInt(fsa_id) == 999){
         show_alert("prt_name","Please Map to an FSA");
         return false;
      }
  $('#dialog_window').html('');
  	
  var filesList = $('#xl_file').prop('files');
   console.log(filesList);
   if(filesList.length == 0) {
	   show_alert("prt_name","File Selection is Empty.Please select one XLSX file");
        return false;
   }   
	   
   
   var fileName =  filesList[0].name; 
   var validExtensions = ['xlsx']; //array of valid extensions
     var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt.toLowerCase(), validExtensions) == -1){
               show_alert("prt_name","Only .xlsx OR .XLSX file should be uploaded") ;
				 return false;
	       }
      var fileSize = parseInt(filesList[0].size/1000);
	  //console.log(fileSize);
        if (fileSize < 1 || fileSize > 10000){
                show_alert("File Size must be between 1 KB and 10 MB") ;
				 return false;
	       }
  var file_data = $('#xl_file').prop('files')[0];		   
  
 	 
  var baseurl = "http://13.233.108.206:3000/createPRT"; //TODO get from config file 
  
  //postdata = {"xafariId":xafariId,"sessionToken":sessToken,"name":name,"email":mail,"mobile":phone,"password":pass};
  //console.log(postdata);
  console.log(baseurl);
  
    var postdata = new FormData();
  
    postdata.append("xafariId",xafariId);
	postdata.append("sessionToken",sessToken);
	postdata.append("xlName",fileName);
	postdata.append("fsaId",fsa_id);
	console.log(postdata);
    postdata.append('xlFile', file_data);
    
  
   $.ajax({
       url:baseurl,
       async:true,
       dataType: 'json',  
       cache: false,
       contentType: false,
       processData: false,
       data: postdata,                         
       type: 'post',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'prtmenu.html';
			   return false;
              break;
              
          default:
               show_alert('prt_name',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


async function savePRT() {
  
      console.log("In Save PRT");
	  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  var fsa_id = 0; 
	  
	  $("#fsa_user option:selected").each(function(i,item){
		  //console.log("inside selected");
		  //console.log(item);
		  //console.log(i);
           fsa_id = item.id;
        });
	if(fsa_id <= 0 || parseInt(fsa_id) == 999){
         //show_alert("prt_name","Please Map to an FSA");
         //return false;
      }
	  
	  var prtName = $('#prt_name').val();
	  var prtMail = $('#prt_email').val();
	  var prtPhone = $('#prt_mobile').val();
	  var prtTitle = $('#prt_title').val();
	  var prtId = $('#prt_id').val();
	  
	  if(!notEmpty("prt_name",1)){
         show_alert("prt_name","Name cant be blank");
         return false;
      }
     if(!notEmpty("prt_mobile",8) || $.isNumeric(prtPhone) == false){
         show_alert("prt_name","Invalid Phone Number");
         return false;
      }
    if(!notEmpty("prt_title",1) ){
         show_alert("prt_name","Title cant be blank");
         return false;
      }
   var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(prtMail)) {
         show_alert("prt_name","Invalid Email");
         return false;
     }
	 
	 var prtTypeId = ''; 
	 $("#partner_types option:selected").each(function(i,item){
		  //console.log("inside selected");
		  //console.log(item);
		  //console.log(i);
           prtTypeId =item.id;
        });
	 console.log("Partner Type ID:"+prtTypeId);
	
	  if(prtTypeId.length <= 0 || parseInt(prtTypeId) == 999){
         show_alert("fac_typ_name","Please Map to a Partner Type");
         return false;
      }
	  
	 var facTypeIds = []; 
	 $("#facility_types option:selected").each(function(i,item){
		  //console.log("inside selected");
		  //console.log(item);
		  //console.log(i);
           facTypeIds.push(item.id);
        });
	 //console.log(facTypeIds);
	
	
   var intTypeIds = []; 
	 $("#interest_types option:selected").each(function(i,item){
		  //console.log("inside selected");
		  //console.log(item);
		  //console.log(i);
           intTypeIds.push(item.id);
        });
	 //console.log(intTypeIds);
		
  
	 
  $('#dialog_window').html('');
  	
   var imageIds =  [];
   var menuId = '';
 				
   var filesUploaded = 0;
   var filesSkipped = 0;
   
   var filesList = $('#img_file').prop('files');
   //console.log(filesList);
   for (idx = 0; idx < filesList.length; idx++) {
	 var fileName =  filesList[idx].name; 
	 var consMess = 'Processing Image File: '+idx+' Name:   '+fileName+'<br/>';   
	 $('#dialog_window').append(consMess);
	 var validExtensions = ['jpg','png','jpeg']; //array of valid extensions
     var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt.toLowerCase(), validExtensions) == -1){
                var consMess = "<u><i>Only .jpg OR .png files will be uploaded, skipping: "+fileName+"</u></i><br/>" ;
				 $('#dialog_window').append(consMess);
				 filesSkipped++;
	            continue;
           }
      var fileSize = parseInt(filesList[idx].size/1000);
	  //console.log(fileSize);
        if (fileSize < 1 || fileSize > 2000){
                var consMess = "<u><i>File Size must be between 1 KB and 2 MB so skipping: "+fileName+"Size: "+fileSize+" </u></i> <br/>" ;
				 $('#dialog_window').append(consMess);
				 filesSkipped++;
	            continue;
           }
           var consMess = "Uploading "+fileName+" Please wait.... <br/>" ;
		   $('#dialog_window').append(consMess);
	       var sessToken = localStorage.getItem('sessToken'); //as session tokens can change after image upload
           var uploadResult = await ajaxUploadFile(xafariId,sessToken,'img_file',idx,prtId);
		   if(parseInt(uploadResult.respCode) == 2) {
			var consMess = "Uploaded Successfully:  "+fileName+"... <br/>" ;
		    $('#dialog_window').append(consMess);
			filesUploaded++;
			imageIds.push(uploadResult.fileId);
		   }   
	       else {
			var consMess = "<u><i>Upload Failed :  "+fileName+"Please retry later... </u></i><br/>" ;
		    $('#dialog_window').append(consMess);
			filesSkipped++;
		   }   
	  } 
        var consMess = "Total Files Uploaded:  "+filesUploaded+" <br/>" ;
	    $('#dialog_window').append(consMess);
		var consMess = "<u><i>Total Files Skipped : "+filesSkipped+"</u></i><br/>" ;
		$('#dialog_window').append(consMess);
	
  var filesList = $('#menu_file').prop('files');
   //console.log(filesList);
  for (idx = 0; idx < filesList.length; idx++) {
	 
   var fileName =  filesList[0].name; //only one menu file can be uploaded 
	 var consMess = 'Processing Menu File: '+fileName+'<br/>';   
	 $('#dialog_window').append(consMess);
	 var validExtensions = ['jpg','png','jpeg']; //array of valid extensions
     var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt.toLowerCase(), validExtensions) == -1){
                var consMess = "<u><i>Only .jpg OR .png files will be uploaded, skipping: "+fileName+"</u></i><br/>" ;
				 $('#dialog_window').append(consMess);
				 return false;
	       }
      var fileSize = parseInt(filesList[0].size/1000);
	  //console.log(fileSize);
        if (fileSize < 1 || fileSize > 2000){
                var consMess = "<u><i>File Size must be between 1 KB and 2 MB so skipping: "+fileName+"Size: "+fileSize+" </u></i> <br/>" ;
				 $('#dialog_window').append(consMess);
				 return false;
	       }
           var consMess = "Uploading "+fileName+" Please wait.... <br/>" ;
		   $('#dialog_window').append(consMess);
     	   var sessToken = localStorage.getItem('sessToken'); //as session tokens can change after image upload
           var uploadResult = await ajaxUploadFile(xafariId,sessToken,'menu_file',0,prtId);
		   
		   if(parseInt(uploadResult.respCode) == 2) {
			var consMess = "Uploaded Successfully:  "+fileName+"... <br/>" ;
		    $('#dialog_window').append(consMess);
			menuId = uploadResult.fileId;
		   }   
	       else {
			var consMess = "<u><i>Upload Failed :  "+fileName+"Please retry later... </u></i><br/>" ;
		    $('#dialog_window').append(consMess);
			return false;
		   }   
  }   
  
//Also push already saved images here so second time edit will work
//It is possible to have more than 5 in this scenario unless use deletes correctly
//TODO handle it later

 for(idx = 1; idx < 5; idx++){
	 var imgVar = 'img'+idx;
	 console.log(imgVar);
	 var thisImage = $('#'+imgVar).attr('src');
	 
	 console.log(thisImage);
	 if(typeof(thisImage) == 'undefined')
		 continue;
	 if(thisImage.length > 0){
	    var el = document.createElement('a');
        el.href = thisImage;
        imageIds.push(el.pathname);
	 }
 } 
 
   var menuImage = $('#menu_img').attr('src');
   if(typeof(menuImage) != 'undefined'){
	
   console.log("And Menu Image is:");
   console.log(menuImage);
    if(menuImage.length > 0){
	    var el = document.createElement('a');
        el.href = menuImage;
        menuId = el.pathname;
	}
   }  
  var sessToken = localStorage.getItem('sessToken'); //as session tokens can change after image upload
  //console.log("Image upload over starting editPRT");
  //console.log(sessToken);
  
  var baseurl = "http://13.233.108.206:3000/editPRT"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken};
  postdata.id = $('#prt_id').val();
  postdata.name = prtName;
  postdata.address = $('#prt_addr').val();
  postdata.partnerType = prtTypeId;
  postdata.interestTypes = intTypeIds;
  postdata.facilityTypes = facTypeIds;
  postdata.cuisineTypes = [];//TODO after fix
  postdata.completionTime = $('#completion_time').val();
  postdata.imageIds = imageIds;
  postdata.menuId = menuId;
  postdata.blogURL = $('#blog_url').val();
  postdata.title = prtTitle;
  postdata.writeUP = $('#prt_write_up').val();
  postdata.email = prtMail;
  postdata.mobile = prtPhone;
  postdata.lat = $('#prt_lat').val();;
  postdata.long = $('#prt_long').val();;
  postdata.eventDate = $('#event_date').val();
  postdata.deletedImageIds = deletedImages; 
  postdata.active = $('#prt_activ').is(':checked');
  
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'prtmenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


function activateFSA(id) {
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(id);
	  
	  //id='ABCD';
	 
  var baseurl = "http://13.233.108.206:3000/activateFSA";  
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":id};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'fsamenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


function deactivateFSA(id) {
  
   
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(id);
	  
	 //id='ABCD';
	 
  var baseurl = "http://13.233.108.206:3000/deactivateFSA"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":id};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'fsamenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


function activatePRT(id) {
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(id);
	  
	  //id='ABCD';
	 
  var baseurl = "http://13.233.108.206:3000/activatePRT";  
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":id};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'prtmenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


function deactivatePRT(id) {
  
   
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(id);
	  
	 //id='ABCD';
	 
  var baseurl = "http://13.233.108.206:3000/deactivatePRT"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":id};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'prtmenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


async function editPRTDetail(prtId){

   console.log('In editPRTDetail');
   console.log(prtId);
// A temporary hack till we can get partner types in getDetail response
	var partnerTypesObj = await getPartnerTypesForEdit();
	console.log('after calling getPartnerTypesForEdit');
	console.log(partnerTypesObj);
	//await sleep(1000);
	var facilityTypesObj = await getFacilityTypesForEdit();
	console.log('after calling getFacilityTypesForEdit after 1 sec delay to handle session timeout');
	console.log(facilityTypesObj);
	//var cuisineTypesObj = await getCuisineTypesForEdit();
	console.log('after calling getCuisineTypesForEdit');
	//console.log(cuisineTypesObj);
	//await sleep(1000);
	var interestTypesObj = await getInterestTypesForEdit();
	console.log('after calling getInterestTypesForEdit');
	console.log(interestTypesObj);
	//await sleep(1000);
	//var fsaTypesObj = await getFSAForEdit();
	//console.log('after calling getFSAForEdit');
	//console.log(fsaTypesObj);
	//await sleep(1000);
    var x = await getPRTDetail(prtId,partnerTypesObj,facilityTypesObj,interestTypesObj);
	
	
}	

function getTRVUsers() {
  
       var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  
	  var pageNum = $('#page_num').val();
	  if (pageNum == "0") pageNum = "1";
	  
	  var searchName = $('#search_nam').val();
	  if(searchName.length <= 0)
		  searchName = "";
	  if($('#search_act').is(':checked'))
		  searchActive = true;
	  else
		  searchActive = false;
	
  var searchParams={"id":"","name":searchName,"active":"","date":"","pointsCount":"","coinsCount":"","referalCount":""};
  //API works only if all optional params are sent !!!  
	 
  var baseurl = "http://13.233.108.206:3000/getListTRV"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"pageNum":pageNum,"searchParams":searchParams};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       //console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   var trHTML = '<thead><tr><td>ID</td><td>Name</td><td>Active?</td></tr></thead><tbody>';
				$('#trv_user').html('');
                $.each(result.trvList, function (i, item) {
				   console.log("in get fsa types list "+i);
                   console.log(item);
                   var idLink = 'editTRV.html#'+item.id;
				   var activeLink = "activateTRV("+"'"+item.id+"'"+")";
				   var deactiveLink = "deactivateTRV("+"'"+item.id+"'"+")";
				   
                   //console.log(idLink);				   
                   trHTML += "<tr><td><a href="+idLink+" >"+item.id+"</a>" + '</td><td>' + item.name + '</td><td>' + item.active + '</td>';
				   if(item.active == 'true')
					   trHTML +="<td><a href='#' onClick="+deactiveLink+" >DeActivate</a>";
				   else
					   trHTML +="<td><a href='#' onClick="+activeLink+" >Activate</a>";
				   trHTML += '</tr>';
                 });
				trHTML += '</tbody>'; 
               $('#trv_user').append(trHTML);
			   $('#num_pages').html('');
			   for (idx = 1; idx <= result.totalPages; idx++) {
				if(idx == result.pageNum){
                       var pageLink = "<a href='#' >&nbsp;&nbsp;"+idx+"&nbsp;&nbsp;</a>";
                       $('#page_num').val(idx);
				}					   
			    else
                   var pageLink = "<a href='#' onClick=setPageTRV("+idx+")>&nbsp;&nbsp;"+idx+"&nbsp;&nbsp;</a>";
                $('#num_pages').append(pageLink);			   
			   }	   
               return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

function saveTRV() {
  
      console.log("In Save TRV");
	  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  
	  var trvFirstName = $('#trv_first_name').val();
	  var trvLastName = $('#trv_last_name').val();
	  var trvMail = $('#trv_email').val();
	  var trvPhone = $('#trv_mobile').val();
	  var trvBirthDate = $('#trv_birth_date').val();
	  var trvGender = $("input[name='gender']:checked").val();;
	  var trvHomeTown = $('#trv_home_town').val();
	  var trvLat = $('#trv_lat').val();
	  var trvLong = $('#trv_long').val();
	  
	  
	  
	  
	  
	  if(!notEmpty("trv_first_name",1)){
         show_alert("trv_first_name","First Name cant be blank");
         return false;
      }
     if(!notEmpty("trv_mobile",8) || $.isNumeric(trvPhone) == false){
         show_alert("trv_mobile","Invalid Phone Number");
         return false;
      }
    if(!notEmpty("trv_home_town",1) ){
         show_alert("trv_home_town","Home Town cant be blank");
         return false;
      }
   var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(trvMail)) {
         show_alert("trv_first_name","Invalid Email");
         return false;
     }
	 
  
  var baseurl = "http://13.233.108.206:3000/editTRV"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken};
  postdata.id = $('#trv_id').val();
  postdata.id = 'TRV0002'; //temporary hack till API is fixed
  postdata.firstName = trvFirstName;
  postdata.lastName = trvLastName;
  postdata.birthDate = trvBirthDate;
  postdata.gender = trvGender;
  postdata.homeTown = trvHomeTown;
  postdata.email = trvMail;
  postdata.mobile = trvPhone;
  postdata.lat = trvLat;
  postdata.long = trvLong;
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'trvmenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


function saveFSA() {
  
      console.log("In Save FSA");
	  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  
	  var fsaName = $('#fsa_name').val();
	  var fsaMail = $('#fsa_email').val();
	  var fsaPhone = $('#fsa_mobile').val();
	  
	  if(!notEmpty("fsa_name",1)){
         show_alert("fsa_name","Name cant be blank");
         return false;
      }
     if(!notEmpty("fsa_mobile",8) || $.isNumeric(fsaPhone) == false){
         show_alert("fsa_mobile","Invalid Phone Number");
         return false;
      }
   var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(fsaMail)) {
         show_alert("fsa_name","Invalid Email");
         return false;
     }
	 
  
  var baseurl = "http://13.233.108.206:3000/editFSA"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken};
  postdata.id = $('#fsa_id').val();
  postdata.name = fsaName;
  postdata.email = fsaMail;
  postdata.mobile = fsaPhone;
  postdata.active = $('#fsa_activ').is(':checked');
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'fsamenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

async function ajaxUploadFile(xafariId,sessToken,uploadNm,idx,prtId) {
  
  console.log("in ajaxuploadFiles");
  console.log('Xafari Id:'+xafariId);
  console.log('Session Token:'+sessToken);
  console.log('Index:'+idx);
  console.log('Partner Id:'+prtId);
  
  var filesList = $('#'+uploadNm).prop('files');
   
  var fileName =  filesList[idx].name; 
  var file_data =  $('#'+uploadNm).prop('files')[idx];
  var postdata = new FormData();
  
    postdata.append("fileName",fileName);
	postdata.append("xafariId",xafariId);
	postdata.append("sessionToken",sessToken);
	postdata.append('partnerId',prtId);
    postdata.append('file', file_data);
	
   //console.log(postdata);
    var baseurl = "http://13.233.108.206:3000/imgUploadPartner"; //TODO get from config file 
 
   var uploadResult = await $.ajax({
       url:baseurl,
       dataType: 'json',  
                cache: false,
                contentType: false,
                processData: false,
                data: postdata,
                type: 'post',
       success: function(result) {
		    //console.log(result);
			//localStorage.setItem('sessToken',result.sessionToken);
			 
			return result;
        },
        error:function(status)  { 
          console.log(status);
		  return 9;
        }
   }).done(function(result) {
	   console.log("done"+result);
	   return result;
   }); 

 console.log("Upload Result: "+uploadResult);
 localStorage.setItem('sessToken',uploadResult.sessionToken);
		
 return uploadResult;
			   
}

function activateTRV(id) {
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(id);
	  
	  //id='ABCD';
	 
  var baseurl = "http://13.233.108.206:3000/activateTRV";  
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":id};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'trvmenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}


function deactivateTRV(id) {
  
   
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(id);
	  
	 //id='ABCD';
	 
  var baseurl = "http://13.233.108.206:3000/deactivateTRV"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":id};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   localStorage.setItem('sessToken',result.sessionToken);
			   window.location = 'trvmenu.html';
			   return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

function getTRVDetail(trvId) {
  
  
      var xafariId = localStorage.getItem('xafariId');
	  var sessToken = localStorage.getItem('sessToken');
	  console.log(xafariId);
	  console.log(sessToken);
	  console.log(trvId);
	  
	  
	 
  var baseurl = "http://13.233.108.206:3000/getDetailTRV"; //TODO get from config file 
  
  postdata = {"xafariId":xafariId,"sessionToken":sessToken,"id":trvId};
  console.log(postdata);
  console.log(baseurl);
  
  
   $.ajax({
       url:baseurl,
       async:true,
    	 type:"post", 
       data: JSON.stringify(postdata),
	   contentType: 'application/json',
	   dataType: 'json',
       success: function(result) {
          switch(result.respCode){
           case 2:
		       console.log(result);
			   console.log(result.trvDetail.name);
			   localStorage.setItem('sessToken',result.sessionToken);
			    $('#trv_id').val(result.trvDetail[0].id);
				$('#trv_first_name').val(result.trvDetail[0].name);
				$('#trv_last_name').val(result.trvDetail[0].last_name);
				$('#trv_birth_date').val(result.trvDetail[0].date_of_birth);
				if(result.trvDetail[0].user_gender == 'male')
			    	$('#trv_user_male').prop('checked',true);
			   else
			    	$('#trv_user_female').prop('checked',true);
				$('#trv_home_town').val(result.trvDetail[0].home_town);
				$('#trv_email').val(result.trvDetail[0].email);
				$('#trv_mobile').val(result.trvDetail[0].mobile);
				$('#trv_lat').val(result.trvDetail[0].latitude);
				$('#trv_long').val(result.trvDetail[0].longitude);
				
				
				if(result.trvDetail[0].active == 'true')
			 	  $('#trv_activ').prop('checked',true);
			    else
			      $('trv_activ').prop('checked',false);
			    
				
               return false;
              break;
              
          default:
               show_alert('user_id',result.respText);
               return false;
               break;          
               
           }
         return false;
        },
        error:function(status)  { 
          show_alert('user_id',"Unknown System Error please try again later");
          return false;
		  }
        });
  return false;
}

function deleteImage(imgId) {
	
 console.log("in deleteImage");
 console.log(imgId);
 var deletedImage = $('#'+imgId).attr('src');
 console.log(deletedImage);
 var el = document.createElement('a');
 el.href = deletedImage;
 
 deletedImages.push(el.pathname);
 console.log(deletedImages);
 $('#'+imgId).removeAttr('src');
 return false;

} 

function setPage(pageNum) {
  console.log("in setPage");
  console.log(pageNum);
  $('#page_num').val(pageNum);
  //document.location.reload(true);
  getFSAUsers();
  //TODO make this common across all types
	
	
}	

function setPagePRT(pageNum) {
  console.log("in setPage");
  console.log(pageNum);
  $('#page_num').val(pageNum);
  //document.location.reload(true);
  getPRTUsers();
  //TODO make this common across all types
	
	
}	

function setPageTRV(pageNum) {
  console.log("in setPage");
  console.log(pageNum);
  $('#page_num').val(pageNum);
  //document.location.reload(true);
  getTRVUsers();
  //TODO make this common across all types
	
	
}