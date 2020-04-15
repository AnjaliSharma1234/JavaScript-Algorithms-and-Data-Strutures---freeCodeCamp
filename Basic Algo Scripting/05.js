function largestOfFour(arr) {
  var k = [];
  for ( var i = 0 ; i < arr.length ; i++ ) {
    var maxx = arr[i][0];
    for ( var j = 1 ; j < arr[i].length ; j++ ) {
      if ( maxx < arr[i][j]) {
        maxx = arr[i][j];
      }
    }
    k[i] = maxx ;

  }


  return k;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
