 // Initialize and add the map
 function initMap() {
   // The location of location
   var location = {lat: -1.3816867, lng: 36.771166799999996};
   // The map, centered at location
   var map = new google.maps.Map(
   document.getElementById('map'), {zoom: 4, center: location});
   // The marker, positioned at Uluru
   var marker = new google.maps.Marker({position: location, map: map});
   }