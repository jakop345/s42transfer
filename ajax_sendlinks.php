<?php


//@error_reporting(0);
define ('JIRAFEAU_ROOT', dirname (__FILE__) . '/');

require (JIRAFEAU_ROOT . 'lib/config.original.php');
require (JIRAFEAU_ROOT . 'lib/config.local.php');
require (JIRAFEAU_ROOT . 'lib/settings.php');
require (JIRAFEAU_ROOT . 'lib/functions.php');
require (JIRAFEAU_ROOT . 'lib/lang.php');

If(!isset($cfg)){
	global $cfg;
	$cfg['main_color']="#134953";
	$cfg['main_color_light']="#01cefe";
}
if($cfg['typekit_fontreplacement']==1){
	$typekit_normal = $cfg['typekit_normal'];
	$typekit_bold = $cfg['typekit_bold'];
	$typekit_optional = $cfg['typekit_optional'];	
}else{
	$cfg['typekit_normal']="Arial";
	$cfg['typekit_bold']="Arial";
	$cfg['typekit_optional']="Arial";
	$typekit_normal = $cfg['typekit_normal'];
	$typekit_bold = $cfg['typekit_bold'];
	$typekit_optional = $cfg['typekit_optional'];
}

    $friend_Emails = $_POST['friend_Emails'];
	$your_Email = $_POST['your_Email'];
	$snd_msg = $_POST['snd_msg'];
	
	$file_links = $_POST['file_links'];
	$h = $_POST['web_root'].'f.php?h='.$_POST['file_links'].'&d=1';
	$direct_Dwnload_url = get_tiny_url($h);
	
	
	
	$send_lnk="";
	$files_html  = "";
	$totals      = 0;	
	$link_nameArr = explode("@",$file_links);
	foreach($link_nameArr as $link_name){
			
	  $links = jirafeau_get_link ($link_name);	 
	  $files_html .='<div style="width:100%;float:left;margin:0 0 1% 0;" class="links_innner"><span style="width:82%;word-break:break-all;color:'.$cfg['main_color'].';float:left;font-family:'.$typekit_optional.';">'.$links['file_name'].'</span>  <span style="width:18%;text-align:right;color:'.$cfg['main_color_light'].';float:right;font-family:'.$typekit_optional.';">'.jirafeau_human_size($links['file_size']).'</span></div>';
	  $totals += $links['file_size']; 
	}
	//echo $files_html;
	//echo jirafeau_human_size($totals);
	
	$send_lnk .= '<html><head><title>Send Links</title></head>'.
	             '<body style="float:left">'.
				 '<div style="width:100%;float:left">'.		
				 
				  '<div style="float:left;padding:2%;width:96%">'.
	               '<p style="width:100%;margin:0px;padding-bottom:0px;color:'.$cfg['main_color_light'].'!important;font-size: 32px;text-decoration:none;font-family:'.$typekit_normal.';">'.$your_Email.'</p>'.
	               '<p style="width:100%;margin:0px;font-family:'.$typekit_normal.';color:'.$cfg['main_color'].'; font-size: 32px;">sent you some files </p>'.
	               '<p style="width:100%;color:'.$cfg['main_color'].';font-family:'.$typekit_normal.';font-size: 17px;">'.$snd_msg.'</p>'.
	               '<p><a style="margin:0px;width:40%;text-align:center;background:'.$cfg['main_color'].';color:'.$cfg['main_color_light'].';padding:10px;text-decoration:none;font-weight:bold;font-size:17px;float:left;font-family:'.$typekit_bold.';cursor:pointer;" href="'.$direct_Dwnload_url.'">Download</a></p>'.
	              '</div>'; 
     $send_lnk1 = "";
	 $send_lnk1 .= '<div style="width:96%;float:left;padding:0 2%;">'.
				   '<p style="color:'.$cfg['main_color'].';font-weight:bold;float:left;width:100%;text-align:right;border-bottom:1px solid '.$cfg['main_color_light'].';padding-bottom: 5px;margin-top:0px;font-family:'.$typekit_bold.';">'.count($link_nameArr).' Files (Total: '.formatSizeUnits($totals).') </p>'.		
				   '<p>'.$files_html.'</p>'.				   
				   '</div>'. 
				   
	               '<div style="width:96%;float:left;border-top:1px solid '.$cfg['main_color'].';padding-top:1%;margin:4% 2%;">
				   <abbr style="color:'.$cfg['main_color'].';float:left;text-decoration:none;cursor:default;font-family:'.$typekit_optional.';" title="s42.transfer">s42.transfer</abbr>
				    
				    <a style="color:'.$cfg['main_color'].';font-family:'.$typekit_optional.';text-decoration:none;float:right;" href="'.rtrim($cfg['web_root'], '/') . '/tos.php">'.t("&nbsp;| Terms").'</a><a style="color:'.$cfg['main_color'].';text-decoration:none;float:right;font-family:'.$typekit_optional.';" href="https://www.gnu.org/licenses/agpl.html"><abbr style="text-decoration:none;"  title="Affero General Public License">AGPL</abbr>v3</a>
			</div>
			</div>
				   </body></html>';	
				 
	   $send_lnks = $send_lnk.$send_lnk1;	 
	
	 	$to =$friend_Emails;
		$subject = $your_Email .' has sent you file(s) via s42.transfer';
		
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		// More headers		
		$headers .= 'From: '.$cfg['sender_name'].'<'.$your_Email.'>' . "\r\n";
		//$headers = "From: $name <$email>\r\n" 
		$results = mail($to,$subject,$send_lnks,$headers);
		if($results){
			echo 1;
		}else{
			echo 0;
		}
		
?>		