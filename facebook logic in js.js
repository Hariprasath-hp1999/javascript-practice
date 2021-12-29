var database = [
    {
    username: "Hari",
    password: "password123"
    }
];
var newsfeed = [
    {
        username:"venky",
        status:"feel happy today"
    },
    {
        username:"anwar",
        status:"love to learn java script"
    }
];
var usernamePrompt=prompt("Enter the username");
var passwordPrompt=prompt("Enter the password");

function SignIn(user,pass){
    if(user===database[0].username && pass===database[0].password)
    {
        console.log(newsfeed);
    }
    else{
        alert("Invalid username and password");
    }
}
SignIn(usernamePrompt,passwordPrompt);