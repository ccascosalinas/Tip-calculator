var calculateTip = function () {
  var check = document.getElementById("BillAmountBox").value;
    var people = parseFloat(document.getElementById("PeopleBox").value);
   var Service = document.getElementById("QualityOfService").value;

ValidateBillAmount(check);
ValidatePeople(people);
showtip(result);

  var result = (check * Service) / people + " Of tip";
  showtip(result);
  return result;

};

var ValidateBillAmount = function(check){
    if (!check) {
      alert("Complete the bill Amount");
    }
}

var ValidatePeople = function(people){
if(!people){
    alert("complete the people field");
}
}

var showtip = function(result){
    document.getElementById("ShowTip").innerHTML = result;
}


var button = document.getElementById("press");
button.addEventListener("click", calculateTip);
