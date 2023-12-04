var s=prompt("enter the string:");//input from the user
function firstcap(s){
return s.split(' ').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ');//first th einput is bsing  convert to the array of words then using map and slice function we achieved our goal


}
var captial=firstcap(s);
console.log(captial);

