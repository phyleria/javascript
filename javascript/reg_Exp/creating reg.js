let boardName =("united nations")
console.log((boardName.replace(/\b(united|nations)\b/g,
str => str.toUpperCase())));;
let confirm = /\w+/.exec(boardName);
console.log(confirm);
let find = (boardName.search("united"))
console.log(find);
function merge(){
  console.log("The" +" " + boardName + " "+ "body");
}
merge();
str=> str.toUpperCase();
var check = boardName.endsWith("nations");
console.log(check);
