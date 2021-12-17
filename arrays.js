const userInput = document.getElementById("title");
const userDesc = document.getElementById("desc");

const showInput = document.getElementById("newTitle");
const showDesc = document.getElementById("newDesc");

const myButton = document.getElementById("mybtn");


myButton.addEventListener("click", function(e) {
    e.preventDefault();

    const newInput = userInput.value;

    const newDesc = userDesc.value;

    showInput.innerHTML = newInput;

    showDesc.innerHTML = newDesc;

})
