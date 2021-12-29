var database = [
    {
    username: "Hari",
    password: "password123"
    },
    {
        username:  "Venky",
        password: "Password234"

    },
    {
        username:  "sony",
        password: "2334"

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
    },
    { 
        username:"karthi",
        status:"be happy"

    }
];
function isUserValid(username,password)
{
    for(var i=0;i<database.length;i++)
    {
       if(username===database[i].username && password===database[i].password)
       {
           return true;
       }

    }
    return false;
}

function SignIn(username,password){

    if(isUserValid(usernamePrompt,passwordPrompt))
    {
        console.log(newsfeed);
    }
    else{
        alert("Invalid username and password");
    }
    
}

var usernamePrompt=prompt("Enter the username");
var passwordPrompt=prompt("Enter the password");
SignIn(usernamePrompt,passwordPrompt);