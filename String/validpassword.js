var s=prompt("Enter the username:");//input the username
var reg=/[a-zA-Z0-9_]{4,16}$/;//regular expression 
function check(s){
return reg.test(s);//check
}
var result=check(s);
console.log(result)//output in the console(true or false)

Output:
Enter the username:Rach_15
Result:
true
