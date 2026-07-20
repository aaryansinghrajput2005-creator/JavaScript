const accountId = 123456789;
let accountEmail="aryansinghrajput2005@gmail.com";
var accountPassword="aryan@123";
accountCity=Jaipur;

//accountId = 987654321; // This will throw an error because accountId is a constant

accountEmail = "golu@gmai.com   "
accountPassword= "newpassword123"; // This is valid because accountEmail and accountPassword are declared with let and var respectively
accountCity = "Delhi"; // This is valid because accountCity is declared without var, let, or const, making it a global variable

console.log( accountId);
console.table(accountEmail , accountPassword , accountCity);