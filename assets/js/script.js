// Assignment Code
var generateBtn = document.querySelector("#generate");
var createBtn = document.querySelector("#create");
// User choices
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
// Display password
function writePassword(password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;   
}
// Display criteria form
function setCriteria() {
    document.getElementById("criteria").style.display="block";
}
// Create string of random chars
function randomFunc(criteriaArray) {
    var charList = "";
    var password = "";
    console.log(charUpper);
    if (criteriaArray[0])
        charList = charList.concat(charUpper);
    if (criteriaArray[1])
        charList = charList.concat(charLower);
    if (criteriaArray[2])
        charList = charList.concat(numeric);
    if (criteriaArray[3])
        charList = charList.concat(special);
    var charArray = charList.split("");
    for (var i = 0; i < parseInt(criteriaArray[4]); i++)
        password = password.concat(charArray[Math.floor(Math.random() * charArray.length)]);
    return password;
}
// Generate password
function generatePassword(event) {
    event.preventDefault();

    var criteriaArray = [document.querySelector("#upperCase").checked,
        document.querySelector("#lowerCase").checked, 
        document.querySelector("#numeric").checked,
        document.querySelector("#special").checked,
        document.querySelector("#size").value];
    var size = parseInt(criteriaArray[4]);
    if (criteriaArray.includes(true) && (size >= 8 && size <= 128)) {
        document.getElementById("criteria").style.display="none";
        var password = randomFunc(criteriaArray);
        writePassword(password);
        document.getElementById("form1").reset();        
    } else {
        if (!criteriaArray.includes(true))
            document.getElementById("errorCheckBox").style.display="block";
        if ((size <= 8 || size >= 128) || isNaN(size))
            document.getElementById("errorSize").style.display="block";
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", setCriteria);
createBtn.addEventListener("click", generatePassword);