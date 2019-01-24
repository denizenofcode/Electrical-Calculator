window.onload=function(){
/*
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

  */
  var voltageVar;
  var currentVar;
  var resistanceVar;
  var powerVar;

  var submitButtonVar = document.getElementById("submitButton");

  var voltageCheckVar = document.getElementById("voltageCheck");
/*
  submitButton.addEventListener("click", function() {
    console.log("Button pressed.");
  }, false);
*/
  //Calculate Voltage
  voltageCheck.addEventListener("change", function() {
    if(this.checked) {
      submitButton.addEventListener("click", function() {
        console.log("DEBUG Button pressed");
        if (isNaN(currentVar) == true && isNaN(resistanceVar) == true) {
          document.getElementById("voltage").value = "Voltage = " + document.getElementById("current").value * document.getElementById("resistance").value;
          console.log("DEBUG Line 72-75 Run")
        } else if (isNaN(powerVar) == true && isNaN(resistanceVar) == true) {
          document.getElementById("voltage").value = "Voltage = " + Math.sqrt(document.getElementById("power").value * document.getElementById("resistance").value);
          console.log("DEBUG Line 75-77 Run")
        }
      })
    } else {

    }
  });


}
