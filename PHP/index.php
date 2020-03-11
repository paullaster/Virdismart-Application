<?php


require_once('geoplugin.class.php');

$geoplugin = new geoPlugin();



//locate the IP
$geoplugin->locate();
$geoplugin->city;
$geoplugin->latitude;
$geoplugin->countryName;
$geoplugin->latitude;
$geoplugin->longitude;
?>
