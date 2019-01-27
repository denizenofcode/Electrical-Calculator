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

var voltage;
var current;
var resistance;
var power;

window.onload = function() {

    var submitButtonVar = document.getElementById("submitButton");
    var voltageCheckVar = document.getElementById("voltageCheck");
    var currentCheckVar = document.getElementById("currentCheck");
    var resistanceCheckVar = document.getElementById("resistanceCheck");
    var powerCheckVar = document.getElementById("powerCheck");

    //VOLTAGE CALCULATOR
    voltageCheckVar.addEventListener("change", function() {
        //Checkbox Checked
        if (this.checked) {
            document.getElementById("currentCheck").checked = false;
            document.getElementById("resistanceCheck").checked = false;
            document.getElementById("powerCheck").checked = false;
            //Button Clicked
            submitButtonVar.addEventListener("click", function() {
                document.getElementById("voltageCheck").checked = false;
                document.getElementById("currentCheck").checked = false;
                document.getElementById("resistanceCheck").checked = false;
                document.getElementById("powerCheck").checked = false;

                setVCRPCalcValues();

                //Calculate Voltage using Current & Resistance
                if (power == "" || power.length == 0 || power == null) {
                    document.getElementById("voltage").value = "Voltage = " + (current * resistance);
                }
                //Calculate Voltage using Power & Resistance
                if (current == "" || current.length == 0 || current == null) {
                    document.getElementById("voltage").value = "Voltage = " + (Math.sqrt(power * resistance));
                }
                //Calculate Voltage using Power & Current
                if (resistance == "" || resistance.length == 0 || resistance == null) {
                    document.getElementById("voltage").value = "Voltage = " + (power / current);
                }
            });
        }
    });
    //CURRENT CALCULATOR
    currentCheckVar.addEventListener("change", function() {
        //Checkbox Checked
        if (this.checked) {
            document.getElementById("voltageCheck").checked = false;
            document.getElementById("resistanceCheck").checked = false;
            document.getElementById("powerCheck").checked = false;
            //Button Clicked
            submitButtonVar.addEventListener("click", function() {
                document.getElementById("voltageCheck").checked = false;
                document.getElementById("currentCheck").checked = false;
                document.getElementById("resistanceCheck").checked = false;
                document.getElementById("powerCheck").checked = false;

                setVCRPCalcValues();

                //Calculate Current using Power & Resistance
                if (voltage == "" || voltage.length == 0 || voltage == null) {
                    document.getElementById("current").value = "Current = " + (Math.sqrt(power * resistance));
                }
                //Calculate Current using Power & Voltage
                if (resistance == "" || resistance.length == 0 || resistance == null) {
                    document.getElementById("current").value = "Current = " + (power / voltage);
                }
                //Calculate Current using Voltage & Resistance
                if (power == "" || power.length == 0 || power == null) {
                    document.getElementById("current").value = "Current = " + (voltage / resistance);
                }
            });
        }
    });
    //RESISTANCE CALCULATOR
    resistanceCheckVar.addEventListener("change", function() {
        //Checkbox Checked
        if (this.checked) {
            document.getElementById("currentCheck").checked = false;
            document.getElementById("voltageCheck").checked = false;
            document.getElementById("powerCheck").checked = false;
            //Button Clicked
            submitButtonVar.addEventListener("click", function() {
                document.getElementById("voltageCheck").checked = false;
                document.getElementById("currentCheck").checked = false;
                document.getElementById("resistanceCheck").checked = false;
                document.getElementById("powerCheck").checked = false;

                setVCRPCalcValues();

                //Calculate Resistance using Voltage & Power
                if (current == "" || current.length == 0 || current == null) {
                    document.getElementById("resistance").value = "Resistance = " + (Math.pow(voltage, 2) / power);
                }
                //Calculate Resistance using Power & Current
                if (voltage == "" || voltage.length == 0 || voltage == null) {
                    document.getElementById("resistance").value = "Resistance = " + (power / (Math.pow(current, 2)));
                }
                //Calculate Resistance using Voltage & Current
                if (power == "" || power.length == 0 || power == null) {
                    document.getElementById("resistance").value = "Resistance = " + (voltage / current);
                }
            });
        }
    });
    //POWER CALCULATOR
    powerCheckVar.addEventListener("change", function() {
        //Checkbox Checked
        if (this.checked) {
            document.getElementById("currentCheck").checked = false;
            document.getElementById("resistanceCheck").checked = false;
            document.getElementById("voltageCheck").checked = false;
            //Button Clicked
            submitButtonVar.addEventListener("click", function() {
                document.getElementById("voltageCheck").checked = false;
                document.getElementById("currentCheck").checked = false;
                document.getElementById("resistanceCheck").checked = false;
                document.getElementById("powerCheck").checked = false;

                setVCRPCalcValues();

                //Calculate Power using Resistance & Current
                if (voltage == "" || voltage.length == 0 || voltage == null) {
                    document.getElementById("power").value = "Power = " + (resistance * Math.pow(current, 2));
                }
                //Calculate Power using Current & Voltage
                if (resistance == "" || resistance.length == 0 || resistance == null) {
                    document.getElementById("power").value = "Power = " + (current * voltage);
                }
                //Calculate Power using Voltage & Resistance
                if (current == "" || current.length == 0 || current == null) {
                    document.getElementById("power").value = "Power = " + (Math.pow(voltage, 2) / resistance);
                }
            });
        }
    });
};

function setVCRPCalcValues() {
  voltage = document.getElementById("voltage").value;
  current = document.getElementById("current").value;
  resistance = document.getElementById("resistance").value;
  power = document.getElementById("power").value;
}
