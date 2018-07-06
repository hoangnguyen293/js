window.onload = function(){
  var nameArray = [];
  var check = true
  while(check){
    var name = prompt("Enter a name");
    if( name === null){
      check =  false;
    } else{
      nameArray.push(name);
    }
  }
  document.getElementById("result").innerHTML = "<p>sorted name: "+ nameArray.sort() +"</p>";
}

