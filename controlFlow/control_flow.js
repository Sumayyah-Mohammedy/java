let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level: ", accessLevel);

let isLoggesIn = true;
let userMessage;
if (isLoggesIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!"
    } else {
        userMessage = "welcome, user!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User message: ", userMessage);

let usertype = "subscriber"
let usercategory;
switch(usertype){
    case "admin":
        usercategory = "Administration";
        break;
    case "manager":
        usercategory = "Manager";
        break;
    case "subscriber":
        usercategory = "Subscriber";
        break;
    default:
        usercategory = "unknown";
}


console.log("User Category: ",usercategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated? "Authenticated":"Not Authenticated";
console.log("Authentication Status: ", authenticationStatus);
