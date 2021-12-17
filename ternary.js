const myBtn = document.getElementById("btn");
const myInput  = document.getElementById("input");
const myResult = document.getElementById("result");


myBtn.addEventListener("click", function(e) {
    e.preventDefault();

/*regular if/else
     if(myInput.value < 18) {
         myResult.innerText = "You are too young";
     } else {
         myResult.innerText = "You are old enough";
     }
*/

    const validation = (myInput.value < 18 ? "Too young" : "Old enough");

    myResult.innerHTML = validation;
    console.log(validation);
})



