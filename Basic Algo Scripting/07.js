function repeatStringNumTimes(str, num) {
  var a = "";
  while ( num > 0 ){
    a += str ;
    num--
  }
  return a;
}

repeatStringNumTimes("abc", 3);
