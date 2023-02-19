const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let outputEl1 = document.getElementById("output-el1")
let outputEl2 = document.getElementById("output-el2")
outputEl1.textContent= ""
outputEl2.textContent = ""
let password = ""
let password2 = ""
let passwordLength = 12
const passwordBtn = document.getElementById("password-btn")

function genarate() {
  let randompassword =Math.floor(Math.random()*characters.length)
   return characters[randompassword] 
}

passwordBtn.addEventListener("click", function(){
    for (let i = 0; i <passwordLength; i++) { 
        password += genarate()
        password2 += genarate()  
    }
    outputEl1.textContent = password
    outputEl2.textContent = password2
    //return password
    password = ""
    password2 = ""

})

// function generateRandomPassword() {
//     let password = ""
//     let password2 = ""
//     for (let i = 0; i <passwordLength; i++) { 
//         password += genarate()
//         password2 += genarate()  
//     }
//     outputEl1.textContent = password
//     outputEl2.textContent = password2


//    return password
    
// }




//const generatedPasswordOne = generateRandomPassword()

