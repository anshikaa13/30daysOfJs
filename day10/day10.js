// activity1
document.getElementById("task1").addEventListener("click",function(){
    let para=document.getElementById("paraa")
    para.textContent="hi am learning js"
})
// task2
const Cat = document.getElementById("cat");


Cat.style.visibility = "visible";

Cat.addEventListener("dblclick", function() {
    if (Cat.style.visibility === "visible") {
        Cat.style.visibility = "hidden";
    } else {
        Cat.style.visibility = "visible";
    }
});

// activity2

const myElement = document.getElementById("myElement");

// Add mouseover event listener
myElement.addEventListener("mouseover", function() {
    myElement.style.backgroundColor = "orange";
});
// task4
// Add mouseout event listener
myElement.addEventListener("mouseout", function() {
    myElement.style.backgroundColor = "lightblue";
});


// activity3
const myInput = document.getElementById("myInput");
const output = document.getElementById("output");

// Keydown event listener
myInput.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});
//  task6
// Keyup event listener
myInput.addEventListener("keyup", function() {
    output.textContent = myInput.value;
});

// activity 4
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById("username").value;
    console.log("Submitted username:", username);
});

// task 8
const mySelect = document.getElementById("mySelect");
const selectedValueParagraph = document.getElementById("selectedValue");

mySelect.addEventListener("change", function() {
    const selectedOption = mySelect.options[mySelect.selectedIndex].text;
    selectedValueParagraph.textContent = `Selected fruit: ${selectedOption}`;
});


// activity5
const myList = document.getElementById("myList");

myList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked item:", event.target.textContent);
    }
});

// task 10
const newItem = document.createElement("li");
newItem.textContent = "New Item";
myList.appendChild(newItem);




