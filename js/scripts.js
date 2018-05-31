$(document).ready(function() {
  $(".survey").submit(function(event) {
    event.preventDefault();
    var music =$("input:radio[name=music]:checked").val();
    console.log(music);
  });
});
