function repeat(str, num) {
  if (num < 0) {
    return "";
  } else {
    str = Array(num + 1).join(str);
    return str;
  }
}

repeat('abc', 3);
