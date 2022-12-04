function encd(string) {
  var number = "0x";
  var length = string.length;
  for (var i = 0; i < length; i++) number += string.charCodeAt(i).toString(16);
  return number;
}

function decd(number) {
  var string = "";
  number = number.slice(2);
  var length = number.length;
  for (var i = 0; i < length; ) {
    var code = number.slice(i, (i += 2));
    string += String.fromCharCode(parseInt(code, 16));
  }
  return string;
}

function setItem(key, val) {
  localStorage.setItem(encd(JSON.stringify(key)), encd(JSON.stringify(val)));
}

function getItem(key) {
  let r = localStorage.getItem(encd(JSON.stringify(key)));
  if (r) r = decd(r);
  return JSON.parse(r);
}

function setRecentSearch(arr) {
  if (!Array.isArray(arr))
    return console.error("Unable to set RecentSearch. Not an array");
  setItem("RecentSearch", arr);
}

function getRecentSearch() {
  return getItem("RecentSearch");
}

function addRecentSearch(val) {
  let arr = getRecentSearch();
  if (!arr) arr = [];
  arr.push(val);
  console.log(arr);
  setRecentSearch(arr);
}
