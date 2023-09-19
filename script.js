function convert() {
  let inputFromUser = document.getElementById("userInputSection").value; //first we accessed our elementbyid and converted it to a variable
  let onePound = 0.454; //we know 1 lbs==0.454 kgs
  let displayValue = inputFromUser * onePound; //fomula
  document.getElementById("displaySection").value = displayValue; //this lines tells where we shall display our results......
}
function clearBtn() {
  let a = "";
  document.getElementById("displaySection").value = a; //It clears the value of "resultsSection"
  document.getElementById("userInputSection").value = a; //It clears the value of "inputSection"
}
// function forRound(){
//     let inputFromUser=document.getElementById('userInputSection').value;
//     let onePound=0.454;
//     let displayValue=(inputFromUser*onePound);
//     document.getElementById('displaySection').value=displayValue;
// }
