/**
 * Mariana Acosta
 * 05.01.2024
 **/

// sortUserName 
function sortUserName(){
	var userName = window.prompt('What is my name?');
  console.log("user.Name =", userName); 
// split string array
var nameArray = userName.split ('');
console.log("nameArray =", nameArray);
//sort the array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
// join array back to a string
var nameSorted = nameArraysort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
 } 
// output
document.writeln("Mariana", 
sortUserName(),"</br>");