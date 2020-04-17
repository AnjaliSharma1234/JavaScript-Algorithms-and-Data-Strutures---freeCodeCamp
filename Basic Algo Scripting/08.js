function truncateString(str, num) {
  if ( str.length > num ) {
    return str.slice(0, num) + "..." ;
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
