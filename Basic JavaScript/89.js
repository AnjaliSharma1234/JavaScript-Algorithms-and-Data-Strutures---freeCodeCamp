// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Only change code below this line
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
  return "Change Me!";
  // Only change code above this line
}

checkObj("gift");
