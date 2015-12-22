/**
 * Reviews JS for functions
 */
 
  
  jQuery(document).ready(function($) {
  
       //Tabs in admin   
      $('#tab-container').easytabs(); 
   
	 			  
		  //Design Colors				 
			//mainColor
			$(".mainColor").asColorPicker({
				mode: 'complex'
			  });
			  
			  //lightColor
			 $(".lightColor").asColorPicker({
				mode: 'complex'
			  });
			  
			 //bg_gradient_color1
			 $(".bg_gradient_color1,.bg_gradient_color2").asColorPicker({
				mode: 'complex'
			  });
			  
	 //##################################### Color update save in config file #################################
	 //##################################### Color update save in config file #################################

			jQuery("#design_colors_form").validate({
		       rules: {           
               
               },                
               messages: {  				    
               },
			   submitHandler: function (form) { 
			    $("#ad_loader").show();
				var str = $("#design_colors_form" ).serialize();				
				  $.ajax({
					type: "POST",
					url: "ajax_savecolor_deleteicon.php",
					data: str,
					cache: false,
					success: function(result){
						$("#ad_loader").hide();
						if(result =="savedone"){
							
					       $("#color_done").html('<span class="sucess_message">Configuration has been updated successfully!</span>').show().fadeOut( 5000 );
						}
					}
				 });	
				return false;
			  }
	       });
		   
		   
	 //##################################### Typekit fonts update save in config file #################################
	 //##################################### Typekit fonts update save in config file #################################
	 
	  /******************* Enable disable Typekit code**************/	  
	    $('#ad_typekit_chk').on('click', function () {
			$("#ad_loader").show();
		    if($(this).prop('checked') == true){
			  $('#typekite_feilds :input').removeAttr("disabled"); 
			  $('#typekit_action').removeAttr("disabled"); 
			   $("#typekite_feilds").removeClass("typekite_disabled");
			 var ad_typekit_chkVal = 1;
			 }else{
				
				  $('#typekite_feilds :input').attr("disabled", "disabled");
				  $('#typekit_action').attr("disabled", "disabled");
				  
				  $("#typekite_feilds").addClass("typekite_disabled");
			     var ad_typekit_chkVal = 0;	  
			   	}
				//Update into Config file
				var str = "ad_typekit_chk="+ad_typekit_chkVal;
				 	$.ajax({
						type: "POST",
						url: "ajax_savecolor_deleteicon.php",
						data: str,
						cache: false,
						success: function(result){
							$("#ad_loader").hide();							
						}
					});	
					
				
				
				
				
			  });
	  

			jQuery("#typekit_form").validate({
		       rules: {           
               
               },                
               messages: {  				    
               },
			   submitHandler: function (form) { 
			    $("#ad_loader").show();
				var str = $("#typekit_form" ).serialize();
				
				  $.ajax({
					type: "POST",
					url: "ajax_savecolor_deleteicon.php",
					data: str,
					cache: false,
					success: function(result){
						$("#ad_loader").hide();
						if(result =="typekit_done"){							
					       $("#typekit_done").html('<span class="sucess_message">Configuration has been updated successfully!</span>').show().fadeOut( 5000 );
						}
					}
				 });	
				return false;
			  }
	       });
		   	 
			   
	 //##################################### Sharing update save in config file #################################
	 //##################################### Sharing fonts update save in config file #################################
	 
	  /******************* Enable disable Typekit code**************/	  
	    $('#ad_shr_chk').on('click', function () {
			$("#ad_loader").show();
		    if($(this).prop('checked') == true){
			  $('#ad_shar_detail :input').removeAttr("disabled"); 
			  //$('#typekit_action').removeAttr("disabled"); 
			   $("#ad_shar_detail").removeClass("sharing_disabled");
			 var ad_shr_chkVal = 1;
			 }else{
				
				  $('#ad_shar_detail :input').attr("disabled", "disabled");
				  //$('#typekit_action').attr("disabled", "disabled");
				  
				  $("#ad_shar_detail").addClass("sharing_disabled");
			     var ad_shr_chkVal = 0;	  
			   	}
				//Update into sharing in Config file
				var str = "ad_shr_chkVal="+ad_shr_chkVal;
				 	$.ajax({
						type: "POST",
						url: "ajax_savecolor_deleteicon.php",
						data: str,
						cache: false,
						success: function(result){
							$("#ad_loader").hide();
						}
					});
			  });
	  

			jQuery("#ad_sharing_form").validate({
		       rules: {           
               
               },                
               messages: {  				    
               },
			   submitHandler: function (form) { 
			    $("#ad_loader").show();
				var str = $("#ad_sharing_form" ).serialize();
				
				  $.ajax({
					type: "POST",
					url: "ajax_savecolor_deleteicon.php",
					data: str,
					cache: false,
					success: function(result){
						$("#ad_loader").hide();						
						if(result =="sharing_done"){							
					       $("#sharing_done").html('<span class="sucess_message">Configuration has been updated successfully!</span>').show().fadeOut( 5000 );
						}
					}
				 });	
				return false;
			  }
	       });
		 


	//##################################### Files limit save in config file #################################
	 //##################################### Files limi update save in config file #################################
	 
	  /******************* Enable disable Typekit code**************/	  
	     	jQuery("#ad_settings_form").validate({
		       rules: {           
				file_limit: {
					  required: true,
					  number: true,
					  max: 2000,
					  min: 1
					}
               },                
               messages: { 
					 file_limit: {
						required: "Please enter a number" ,
						number: "Enter only number",						
						
					},
               },
			   submitHandler: function (form) { 
			    $("#ad_loader").show();
				var str = $("#ad_settings_form" ).serialize();
				
				  $.ajax({
					type: "POST",
					url: "ajax_savecolor_deleteicon.php",
					data: str,
					cache: false,
					success: function(result){
						$("#ad_loader").hide();							
						if(result =="setting_done"){							
					       $("#setting_done").html('<span class="sucess_message">Configuration has been updated successfully!</span>').show().fadeOut( 5000 );
						}
					}
				 });	
				return false;
			  }
	       });


     //##################################### Enable https update save in config file #################################
	 //##################################### Enable https update save in config file #################################
	 
	  /******************* Enable disable Enable https**************/	  
	    $('#ad_http_chk-').on('click', function () {	
			
			$("#ad_loader").show();
		    if($(this).prop('checked') == true){			 
			 var ad_http_chkVal = 1;
			 }else{
				 var ad_http_chkVal = 0;	  
			 }
			//Update into Config file
			var str = "ad_http_chkVal="+ad_http_chkVal;
			 $.ajax({
				type: "POST",
				url: "ajax_savecolor_deleteicon.php",
				data: str,
				cache: false,
				success: function(result){
				  $("#ad_loader").hide();							
					if(result){							
					  $("#http_setting_done").html('<span class="sucess_message">Configuration has been updated successfully!</span>').show().fadeOut( 5000 );
					  //location.reload();
					   window.location.replace(result+'/admin.php#tabs1-settings');
					}
				}
				
			});	
	   });
	   
	   
	   

     //##################################### Enable WWW update save in config file #################################
	 //##################################### Enable WWW update save in config file #################################
	 
	  /******************* Enable disable Enable WWW**************/	  
	    $('#ad_domain_chk-').on('click', function () {	
			
			$("#ad_loader").show();
		    if($(this).prop('checked') == true){			 
			 var ad_domain_chkVal = 1;
			 }else{
				 var ad_domain_chkVal = 0;	  
			 }
			//Update into Config file
			var str = "ad_domain_chkVal="+ad_domain_chkVal;
			 $.ajax({
				type: "POST",
				url: "ajax_savecolor_deleteicon.php",
				data: str,
				cache: false,
				success: function(result){
				  $("#ad_loader").hide();							
					if(result){							
					  $("#domain_setting_done").html('<span class="sucess_message">Configuration has been updated successfully!</span>').show().fadeOut( 5000 );
					  //location.reload();
					   //window.location.replace(result+'/admin.php#tabs1-settings');
					}
				}
				
			});	
	   });
	   
	   
	   
     //##################################### Enable https Or WWW update save in config file #################################
	 //##################################### Enable https Or WWW update save in config file #################################
	 
	  /******************* Enable disable Enable https**************/	  
	    $('.ssl_verify').on('click', function () {	
			
			$("#ad_loader").show();
			//https
		    if($("#ad_http_chk").prop('checked') == true){			 
			 var ad_http_chkVal = 1;
			 }else{
				 var ad_http_chkVal = 0;	  
			 }
			 
			 //WWW
			 if($("#ad_domain_chk").prop('checked') == true){			 
			 var ad_domain_chk = 1;
			 }else{
				 var ad_domain_chk = 0;	  
			 }
			 
			//Update into Config file
			var str = "ad_http_chkVal="+ad_http_chkVal+"&ad_domain_chkval="+ad_domain_chk;
			//alert(str);
			 $.ajax({
				type: "POST",
				url: "ajax_savecolor_deleteicon.php",
				data: str,
				cache: false,
				success: function(result){
				  $("#ad_loader").hide();							
					if(result){	
					
					  $("#domain_setting_done").html('<span class="sucess_message">Configuration has been updated successfully!</span>').show().fadeOut( 5000 );
					  //location.reload();
					   window.location.replace(result+'admin.php#tabs1-settings');
					}
				}
				
			});	
	   });
  
			

	//##################################### Logo upload	##########################################		
	//##################################### Logo upload	##########################################		
		
			 $('.change_logo').on('click', function () {
				 $("#photoimg").click();
			  });
				 
				$('#photoimg').on('change', function(){ 
				   $("#preview_error").html('');
				   $("#ad_loader").show();
				   //$("#preview").html('<img src="loader.gif" alt="Uploading...."/>');
				   $("#imageform").ajaxForm({
					  beforeSubmit : function(arr, $form, options){
						},
					    success : function(data){
						 $("#ad_loader").hide();
						 var cl = $(data).attr("class");
						 if($(data).attr("class") == "img_error"){
							 $("#preview_error").html(data);  
							}else{
								$("#preview").html(data);
							}	
												 
					   }
				   }).submit();
				});
             			

			
				
		    //Logo Retina upload			
			 $('.change_logo_retina').on('click', function () {
				 $("#photoimg_retina").click();
			  });
				 
				$('#photoimg_retina').on('change', function(){ 
				   $("#preview_retina_error").html('');
				   $("#ad_loader").show();
				   $("#logo_retinaform").ajaxForm({
				           
						beforeSubmit : function(arr, $form, options){
						},
					    success : function(data){
						 $("#ad_loader").hide();
						 var cl = $(data).attr("class");
						 if($(data).attr("class") == "img_error"){
							 $("#preview_retina_error").html(data);  
							}else{
								$("#preview_retina").html(data);
							}	
												 
					   }   
						   
				   }).submit();
				});	
				
          //change favicon
		   $('.change_favicon').on('click', function () {
				 $("#photoimg_favicon").click();
			  });
				 
				$('#photoimg_favicon').on('change', function(){ 
				  $("#ad_loader").show();
				   $("#preview_favicon_error").html('');
				 
				   $("#favicon_form").ajaxForm({
				    beforeSubmit : function(arr, $form, options){
						},
					    success : function(data){
							$("#ad_loader").hide();
						 var cl = $(data).attr("class");
						 if($(data).attr("class") == "img_error"){
							 $("#preview_favicon_error").html(data);  
							}else{
								$("#preview_favicon").html(data);
							}	
												 
					   }
				   }).submit();
				});
				
				
		   //Change touchIcon		  
		   $('.change_touchicon').on('click', function () {
				 $("#photoimg_touchicon").click();
			  });
				 
				$('#photoimg_touchicon').on('change', function(){ 
				   $("#preview_touchicon_error").html('');
				    $("#ad_loader").show();
				   $("#touchicon_form").ajaxForm({
				     beforeSubmit : function(arr, $form, options){
						},
					    success : function(data){
						$("#ad_loader").hide();
						 var cl = $(data).attr("class");
						 if($(data).attr("class") == "img_error"){
							 $("#preview_touchicon_error").html(data);  
							}else{
								$("#preview_touchicon").html(data);
							}	
												 
					   }
				   }).submit();
				});
		  
		   //Delete logo,logo Retina, Favicon Touchicon
		     $('.delete_icon').on('click', function () {
				var ids =  $(this).attr("id");
				if (confirm("Are you sure for delete?")) {
                    $("#ad_loader").show();
					var str = "ids="+ids;
				 	$.ajax({
						type: "POST",
						url: "ajax_savecolor_deleteicon.php",
						data: str,
						cache: false,
						success: function(result){
							$("#ad_loader").hide();
							if(result=="delete_logo"){ $("#preview").html("");}
							else if(result=="delete_retina"){ $("#preview_retina").html("");}
							else if(result=="delete_favicon"){ $("#preview_favicon").html("");}
							else if(result=="delete_touchicon"){ $("#preview_touchicon").html("");}
						}
					});	
						return false;
				  
				 }
				return false;		
			  });
	  //############ Logo upload and delete section end #########################################   
	  //############ Logo upload and delete section end #########################################   
		
		
    });//Main close

	