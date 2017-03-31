function initMap() {
  var uluru = {lat: 51.9017, lng: -8.4686};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
