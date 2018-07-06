document.getElementById("numberForm").onsubmit = function(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  var intArray = new Array(firstNumber);
  for(var i = 0; i < firstNumber; i++){
      intArray[i] = new Array(secondNumber);
  }
  input(intArray);
};
function input(intArray){
  for(var i = 0; i < intArray.length; i++){
    for (var j = 0; j < intArray[0].length; j++){
      intArray[i][j] = prompt("Enter element A["+ i +"]["+ j +"]");
    }
  }
  document.getElementById("choice").innerHTML = ""+
    "<p>"+
      "1-Print Array <br>"+
      "2-Calculate sum of all element <br>"+
      "3-Check element <br>"+
      "4-Sort element <br>"+
    "</p>"+
    "<form id='choiceForm' action='javascript:void(0)''>"+
      "<div>"+
        "<input type='number' name='' id='numberTask'>"+
      "</div>"+
      "<div>"+
        "<input type='submit' value='Enter task'>"+
      "</div>"+
    "</form>";
  document.getElementById("choiceForm").onsubmit = function(){
    var numberTask = document.getElementById("numberTask").value;
    switch(numberTask){
      case "1":
        printArray(intArray);
        break;
      case "2":
        document.getElementById("result").innerHTML =
          "<p>sum of all elements of array is: "+ sum(intArray) +"</p>";
        break;
      case "3":
        var value = prompt("Enter a value");
        value = parseInt(value);
        if(searchArray(intArray, value)){
          document.getElementById("result").innerHTML = "<p>Exist</p>";
        }else{
          document.getElementById("result").innerHTML = "<p>Not exist</p>";
        }
        break;
      case "4":
        document.getElementById("result").innerHTML =
          "<p>Sorted array is: "+ sortByAsc(intArray) +"</p>";
        break;
      default:
        document.getElementById("result").innerHTML = "Invalid number"
    }
  }
}
function printArray(intArray){
  document.getElementById("result").innerHTML = "<p>"+ intArray +"</p>";
}
function sum(intArray){
  var total = 0;
  for(var i = 0; i < intArray.length; i++){
    for (var j = 0; j < intArray[0].length; j++){
      total += parseInt(intArray[i][j]);
      alert(total);
    }
  }
  return total;
}
function searchArray(intArray, value){
  var check = false;
  for(var i = 0; i < intArray.length; i++){
    for (var j = 0; j < intArray[0].length; j++){
      var temp = parseInt(intArray[i][j]);
      if(temp == value){
        check = true;
        break;
      }
    }
  }
  return check;
}
function sortByAsc(intArray){
  var coppyArray = [];
  for(var i = 0; i < intArray.length; i++){
    for (var j = 0; j < intArray[0].length; j++){
      coppyArray.push(parseInt(intArray[i][j]));
    }
  }
  return coppyArray.sort(function(a, b){return a - b});
}
