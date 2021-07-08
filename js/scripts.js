$(document).ready(function() {
  const height = parseInt(prompt("How tall are you?"));
  
  if (height >= 4){
    $("#ride-1").show();
  } 
  
  if (height >= 7){
    $("#ride-2").show();
  }

  if (height <= 5){
    $("#ride-3").show();
  }

  if (height >= 10){
    $("#ride-4").show();
  }

  if (height >= 4 , height <= 10) {
    $("#ride-5").show();
  }
});