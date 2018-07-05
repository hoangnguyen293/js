var intArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
document.getElementById("numberForm").onsubmit = function(){
  var input = document.getElementById("number").value
  switch(input){
    case "1":
      printArray();
      break;
    case "2":
      var value = prompt("Enter a value");
      value = parseInt(value);
      if(searchArray(value)){
        document.getElementById("result").innerHTML = "<p>Exist</p>";
      }else{
        document.getElementById("result").innerHTML = "<p>Not exist</p>";
      }
      break;
    case "3":
      document.getElementById("result").innerHTML = "<p>Max number is: "+ findMaxNumber() +"</p>";
      break;
    case "4":
      document.getElementById("result").innerHTML = "<p>sum of all elements of array is: "+ sum() +"</p>";
      break;
    case "5":
      var coppyArray = intArray.map(function(element){
        return element;
      });
      document.getElementById("result").innerHTML = "<p>Sorted array: "+ sortDesc(coppyArray) +"</p>";
      break;
    default:
      document.getElementById("result").innerHTML = "<p>invalid number</p>";
  }
};
function printArray(){
  document.getElementById("result").innerHTML = "<p>"+ intArray +"</p>";
}
function searchArray(value){
  var check = false;
  var i = 0;
  while((i < intArray.length) && (check == false)){
    if(intArray[i] == value){
      check = true;
    }
    i++;
  }
  return check;
}
function findMaxNumber(){
  var max = intArray[0];
  for(var i = 1; i < intArray.length; i++){
    if(intArray[i] > max){
      max = intArray[i];
    }
  }
  return max;
}
function sum(){
  var sum = 0;
  for(var i = 1; i < intArray.length; i++){
    sum += intArray[i];
  }
  return sum;
}
function sortDesc(coppyArray){
  for(var i = 0; i < coppyArray.length - 1; i++){
    for(var j = i + 1; j < coppyArray.length; j++){
      if(coppyArray[i] < coppyArray [j]){
        var temp = coppyArray[i];
        coppyArray[i] = coppyArray[j];
        coppyArray[j] = temp;
      }
    }
  }
  return coppyArray;
}

