function convertNumber() {
  const input = document.getElementById("inputNumber").value;
  const fromBase = parseInt(document.getElementById("fromBase").value);
  const toBase = parseInt(document.getElementById("toBase").value);
  const output = document.getElementById("output");
  

  if (input == "") {
    output.textContent = "Please enter a number.";
    return;
  }

  let decimalValue = parseInt(input, fromBase);

  if (isNaN(decimalValue)) {
    output.textContent = "Invalid number for the selected base.";
    return;
  }

    let result = decimalValue.toString(toBase).toUpperCase();
    document.getElementById("result").value = result;

}

    function clearFields() {

    document.getElementById("inputNumber").value = "";
    document.getElementById("result").value = "";

    }

