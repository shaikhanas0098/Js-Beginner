const accountId = 12765
let accountEmail = "Sam@1645gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // not allowed

accountEmail = "Rehan@132gmail.com"
accountPassword = "1863573"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
Because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

