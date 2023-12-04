var s=prompt("Enter the string:");//Input from the username (String)
var h=s.split(' ');//spli the string with the delimitor space
k=[]//creating a array (empty)
for(i of h){
var l=i.length;
k.push(l);
}
var m=Math.max(...k);
for(i of h){
if(i.length===m){
console.log(i);
break;
}
}
Output:
the quick brown fox jumps pver the lazy dog
Result:
quick//first largest word in the given string
