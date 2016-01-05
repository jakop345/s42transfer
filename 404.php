<?php
define ('JIRAFEAU_ROOT', dirname (__FILE__) . '/');

require (JIRAFEAU_ROOT . 'lib/config.original.php');
require (JIRAFEAU_ROOT . 'lib/settings.php');
require (JIRAFEAU_ROOT . 'lib/functions.php');
require (JIRAFEAU_ROOT . 'lib/lang.php');
require (JIRAFEAU_ROOT . 'lib/template/header.php');
?>

<div id="cancel_container" class="cancel_container">
    <div id="upload_cncl" class="upload_cncl">
	    <span class="cancel_image"></span>
	    <span class="cancel_txt">Upload Error!</span>
	    <span class="cancel_txt_below">Something went wrong</span>
		
    </div>	
</div> 

<?php require (JIRAFEAU_ROOT . 'lib/template/footer.php'); ?>