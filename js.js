var voltage,current,resistance,power;

window.onload=function(){

  document.getElementById("voltage").addEventListener("keydown", function(e) {
      // Enter is pressed
      if (e.keyCode == 13 && isNaN(document.getElementById("voltage").value) != true) {
        voltage = document.getElementById("voltage").value;
        document.getElementById("voltage").style.backgroundColor = "green";
      }
      else if (e.keyCode == 13) {
        voltage = 0;
        document.getElementById("voltage").value = 0;
        document.getElementById("voltage").style.backgroundColor = "red";
      }
  }, false);

  document.getElementById("current").addEventListener("keydown", function(e) {
      // Enter is pressed
      if (e.keyCode == 13 && isNaN(document.getElementById("current").value) != true) {
        current = document.getElementById("current").value;
        document.getElementById("current").style.backgroundColor = "green";
      }
      else if (e.keyCode == 13) {
        current = 0;
        document.getElementById("current").value = 0;
        document.getElementById("current").style.backgroundColor = "red";
      }
  }, false);
  document.getElementById("resistance").addEventListener("keydown", function(e) {
      // Enter is pressed
      if (e.keyCode == 13 && isNaN(document.getElementById("resistance").value) != true) {
        resistance = document.getElementById("resistance").value;
        document.getElementById("resistance").style.backgroundColor = "green";
      }
      else if (e.keyCode == 13) {
        resistance = 0;
        document.getElementById("resistance").value = 0;
        document.getElementById("resistance").style.backgroundColor = "red";
      }
  }, false);
  document.getElementById("power").addEventListener("keydown", function(e) {
      // Enter is pressed
      if (e.keyCode == 13 && isNaN(document.getElementById("power").value) != true) {
        power = document.getElementById("power").value;
        document.getElementById("power").style.backgroundColor = "green";
      }
      else if (e.keyCode == 13) {
        power = 0;
        document.getElementById("power").value = 0;
        document.getElementById("power").style.backgroundColor = "red";
      }
  }, false);

  document.getElementById("submitButton").addEventListener("click", function() {
    console.log("Button pressed.");
  }, false);

}
