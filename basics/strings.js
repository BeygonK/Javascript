//Strings are immutable
let str = 'As sly as a fox, as strongs as an ox';
// let target = 'as';
// let pos = 0;

// while(true){
//     let foundPos = str.indexOf(target,pos);
//     if(foundPos == -1) break;

//     console.log(`Found '${target}' at ${pos}`);
//     pos = foundPos + 1;
// }


// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   console.log(pos)
// }
function getStr(str){
    //Check an empty string; Since to uppercase method returns undefine
    if(!str) return;
    return str[0].toUpperCase().concat(str.slice(1))
}

//console.log(getStr('john'))

function truncateString(str, maxLenght){
    if(str.length <= maxLenght) return;
    return str.slice(0, maxLenght) + '...'
}
//console.log(truncateString('Hello everyone, my name is denis', 7));

let str1 = 'Hello there my name is';
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength) + '…' : str;
  }

  console.log(truncate(str1,6));