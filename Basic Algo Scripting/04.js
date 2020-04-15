function findLongestWordLength(str) {

  var k = str.split(" ");
  var maxx = 0 ;
  for ( var i in k ){
    //console.log(k[i]);
    maxx = Math.max( maxx, k[i].length );
  }

  return maxx;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
