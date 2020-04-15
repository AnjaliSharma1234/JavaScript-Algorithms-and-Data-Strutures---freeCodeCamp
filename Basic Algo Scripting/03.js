function factorialize(num) {
  if( num > 1 ) {
    return num * factorialize(num - 1) ;
  }
  else {
    return 1
  }
}

factorialize(5);
