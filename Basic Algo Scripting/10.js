function booWho(bool) {
  return (typeof(bool) == "boolean") && (bool == true) || (bool == false);
}

booWho(null);
